from flask import Flask, request, jsonify, send_from_directory
from bs4 import BeautifulSoup
import requests, re, time
from urllib.parse import quote
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor, as_completed

ROOT=Path(__file__).resolve().parent
app=Flask(__name__, static_folder=str(ROOT), static_url_path="")
CACHE={}
TTL=1800
HEADERS={"User-Agent":"Mozilla/5.0 (compatible; RETHINK.einkauf/3.0)"}

RETAILER_NAMES={
 "rewe":["REWE"],"nahkauf":["nahkauf"],"lidl":["Lidl"],"aldi-sued":["ALDI SÜD","ALDI Süd"],
 "netto-marken-discount":["Netto Marken-Discount"],"norma":["NORMA"],"kaufland":["Kaufland"],
 "edeka":["EDEKA"],"edeka-center":["E center","EDEKA Center"],"edeka-nah-gut":["nah & gut","...nah und gut"]
}

def slugify(s):
    return re.sub(r"[^a-z0-9]+","-",s.lower().replace("ä","ae").replace("ö","oe").replace("ü","ue").replace("ß","ss")).strip("-")

def fetch(url):
    now=time.time()
    if url in CACHE and now-CACHE[url][0]<TTL:
        return CACHE[url][1]
    r=requests.get(url,headers=HEADERS,timeout=5)
    r.raise_for_status()
    CACHE[url]=(now,r.text)
    return r.text


STOPWORDS={"und","oder","der","die","das","ein","eine","mit","ohne","von","vom","im","in","am","an","zum","zur","frisch","frische","frischer"}

def normalize_text(s):
    s=(s or "").lower()
    s=s.replace("ä","ae").replace("ö","oe").replace("ü","ue").replace("ß","ss")
    s=re.sub(r"[^a-z0-9]+"," ",s)
    return re.sub(r"\s+"," ",s).strip()

def query_terms(query):
    return [t for t in normalize_text(query).split() if len(t)>=3 and t not in STOPWORDS]

def offer_relevance(query, offer):
    """
    Strenge Relevanz:
    - 'Schinken' matcht Kochschinken/Rohschinken/Hinterschinken etc.
    - 'Kasseler' matcht NICHT 'Schinken'.
    - Bei mehreren Suchwörtern müssen die wesentlichen Begriffe im Angebot vorkommen.
    """
    q=normalize_text(query)
    hay=normalize_text(" ".join([
        offer.get("title",""),
        offer.get("brand",""),
    ]))
    if not q or not hay:
        return 0

    terms=query_terms(query)
    if not terms:
        return 0

    # Exact phrase is strongest.
    if q in hay:
        return 100 + len(q)

    score=0
    matched=0
    for term in terms:
        # Compound words count: "schinken" in "kochschinken".
        if term in hay:
            matched += 1
            score += 25 + len(term)
        else:
            return 0

    return score if matched == len(terms) else 0

def filter_relevant_offers(query, offers, limit=12):
    ranked=[]
    for offer in offers:
        score=offer_relevance(query, offer)
        if score>0:
            ranked.append((score, offer))
    ranked.sort(key=lambda x:(-x[0], x[1].get("price",""), x[1].get("title","")))
    result=[]
    seen=set()
    for _,offer in ranked:
        key=(normalize_text(offer.get("title","")), offer.get("price",""), normalize_text(offer.get("brand","")))
        if key in seen:
            continue
        seen.add(key)
        result.append(offer)
        if len(result)>=limit:
            break
    return result

def parse_offers(html,retailer_slug):
    soup=BeautifulSoup(html,"html.parser")
    lines=[re.sub(r"\s+"," ",x).strip() for x in soup.get_text("\n",strip=True).splitlines() if x.strip()]
    allowed=[x.lower() for x in RETAILER_NAMES.get(retailer_slug,[])]
    out=[]

    for i,line in enumerate(lines):
        if line != "Händler:":
            continue
        retailer=lines[i+1] if i+1<len(lines) else ""
        if allowed and retailer.lower() not in allowed:
            continue

        lower=max(0,i-28)
        price_idx=brand_idx=valid_idx=None
        for j in range(i-1,lower-1,-1):
            if lines[j]=="Händler:":
                break
            if valid_idx is None and lines[j]=="Gültig:":
                valid_idx=j
            if price_idx is None and lines[j]=="Preis:":
                price_idx=j
            if brand_idx is None and lines[j]=="Marke:":
                brand_idx=j

        if price_idx is None:
            continue

        price=""
        for j in range(price_idx+1,i):
            if re.fullmatch(r"€\s*\d+[,.]\d{2}",lines[j]):
                price=lines[j]
                break
        if not price:
            continue

        brand=lines[brand_idx+1] if brand_idx is not None and brand_idx+1<i else ""
        valid=lines[valid_idx+1] if valid_idx is not None and valid_idx+1<i else ""

        anchor=brand_idx if brand_idx is not None and brand_idx<price_idx else price_idx
        title=""
        ignored_prefixes=("brandneu","in kürze","image","verpasst","noch ","in ","läuft bald ab","laeuft bald ab")
        for j in range(anchor-1,lower-1,-1):
            candidate=lines[j]
            low=candidate.lower()
            if candidate in {"Marke:","Preis:","Gültig:","Händler:"}:
                continue
            if low.startswith(ignored_prefixes):
                continue
            if re.fullmatch(r"\d+\s*(tag|tage|woche|wochen)",low):
                continue
            if len(candidate)>2:
                title=candidate
                break

        if title:
            out.append({"title":title,"brand":brand,"price":price,"valid":valid,"retailer":retailer})

    seen=set()
    result=[]
    for offer in out:
        key=(normalize_text(offer.get("title","")),normalize_text(offer.get("brand","")),offer.get("price",""),offer.get("valid",""))
        if key in seen:
            continue
        seen.add(key)
        result.append(offer)
    return result


@app.get("/health")
def health():
    return jsonify({"status":"ok","app":"RETHINK.einkauf"})

@app.get("/")
def home():
    return send_from_directory(ROOT,"index.html")


STORE_SEARCH_CACHE={}
def infer_store_type(name,tags):
    n=(name+" "+tags.get("shop","")).lower()
    return "drugstore" if ("dm " in n or n.startswith("dm") or "drogerie" in n or tags.get("shop")=="chemist") else "supermarket"
def store_retailer(name):
    n=name.lower()
    if "rewe" in n:return "rewe"
    if "nahkauf" in n:return "nahkauf"
    if "lidl" in n:return "lidl"
    if "aldi" in n:return "aldi-sued"
    if "netto" in n:return "netto-marken-discount"
    if "norma" in n:return "norma"
    if "kaufland" in n:return "kaufland"
    if "edeka" in n or "e center" in n:return "edeka"
    return None
def fmt_addr(t):
    street=" ".join(x for x in [t.get("addr:street",""),t.get("addr:housenumber","")] if x).strip(); city=t.get("addr:city") or t.get("addr:place") or ""; pc=t.get("addr:postcode","")
    return ", ".join(x for x in [street," ".join(x for x in [pc,city] if x).strip()] if x)
@app.get("/api/store-search")
def store_search():
    q=(request.args.get("q") or "").strip()
    if len(q)<2:return jsonify({"results":[]})
    key=q.lower(); now=time.time()
    if key in STORE_SEARCH_CACHE and now-STORE_SEARCH_CACHE[key][0]<3600:return jsonify({"results":STORE_SEARCH_CACHE[key][1]})
    try:
        g=requests.get("https://nominatim.openstreetmap.org/search",params={"q":q,"format":"jsonv2","limit":1,"countrycodes":"de"},headers=HEADERS,timeout=5);g.raise_for_status();rows=g.json()
        if not rows:return jsonify({"results":[]})
        lat=float(rows[0]["lat"]);lon=float(rows[0]["lon"]); oq=f'[out:json][timeout:15];(nwr(around:15000,{lat},{lon})["shop"~"^(supermarket|convenience|chemist)$"];);out center tags;'
        ov=requests.post("https://overpass-api.de/api/interpreter",data={"data":oq},headers=HEADERS,timeout=10);ov.raise_for_status();els=ov.json().get("elements",[])
        qwords=[w for w in re.sub(r"[^a-z0-9äöüß ]"," ",q.lower()).split() if len(w)>2 and w not in {"bayreuth","weidenberg","bindlach","markt","filiale"}]
        result=[];seen=set()
        for e in els:
            t=e.get("tags",{}); name=t.get("name") or t.get("brand") or t.get("operator")
            if not name:continue
            if qwords and not any(w in name.lower() for w in qwords):continue
            address=fmt_addr(t)
            if not address:continue
            item={"id":f'osm-{e.get("type")}-{e.get("id")}',"name":name,"address":address,"group":t.get("brand") or name,"type":infer_store_type(name,t),"retailer":store_retailer(name),"source":"OpenStreetMap"}
            k=(name.lower(),address.lower())
            if k not in seen:seen.add(k);result.append(item)
        result=sorted(result,key=lambda x:(x["name"].lower(),x["address"].lower()))[:40];STORE_SEARCH_CACHE[key]=(now,result);return jsonify({"results":result})
    except Exception as exc:
        app.logger.warning("store search failed: %s",exc);return jsonify({"results":[]})

@app.post("/api/match-offers")
def match_offers():
    data=request.get_json(force=True) or {}
    retailer=data.get("retailer","")
    items=[x for x in data.get("items",[])[:25] if x.get("id") and (x.get("name") or "").strip()]

    def one_item(item):
        iid=str(item.get("id",""))
        name=(item.get("name") or "").strip()
        slug=slugify(name)
        collected=[]
        urls=[
            f"https://www.marktguru.de/rc/{quote(retailer)}/{quote(slug)}",
            f"https://www.marktguru.de/c/{quote(slug)}"
        ]
        for url in urls:
            try:
                collected.extend(parse_offers(fetch(url),retailer))
            except Exception:
                pass
        relevant=filter_relevant_offers(name,collected,limit=20)
        category_url=f"https://www.marktguru.de/rc/{quote(retailer)}/{quote(slug)}"
        for offer in relevant:
            offer["source_url"]=category_url
        return iid,relevant

    matches={}
    # External pages are I/O-bound. Parallel item fetches keep the request well
    # below Gunicorn's default timeout instead of doing up to 50 HTTP calls serially.
    with ThreadPoolExecutor(max_workers=6) as pool:
        futures=[pool.submit(one_item,item) for item in items]
        for f in as_completed(futures):
            try:
                iid,relevant=f.result()
                matches[iid]=relevant
            except Exception:
                pass

    return jsonify({"matches":matches,"source":"marktguru.de","cached_seconds":TTL})

if __name__=="__main__":
    import os
    port=int(os.environ.get("PORT","8000"))
    app.run(host="0.0.0.0",port=port,debug=False)
