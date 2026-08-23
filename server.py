from flask import Flask, request, jsonify, send_from_directory
from bs4 import BeautifulSoup
import requests, re, time, unicodedata
from urllib.parse import quote

app = Flask(__name__, static_folder="static", static_url_path="")
CACHE={}
TTL=1800
HEADERS={"User-Agent":"Mozilla/5.0 (compatible; Einkaufsweg/0.9; +local-prototype)"}

RETAILER_NAMES={
 "rewe":["REWE"],
 "lidl":["Lidl"],
 "aldi-sued":["ALDI SÜD","ALDI Süd"],
 "netto-marken-discount":["Netto Marken-Discount"],
 "norma":["NORMA"]
}

def slugify(s):
    s=s.lower().replace("ä","ae").replace("ö","oe").replace("ü","ue").replace("ß","ss")
    s=re.sub(r"[^a-z0-9]+","-",s).strip("-")
    aliases={"aepfel":"aepfel","kaese":"kaese","mineralwasser":"mineralwasser","toilettenpapier":"toilettenpapier"}
    return aliases.get(s,s)

def fetch(url):
    now=time.time()
    if url in CACHE and now-CACHE[url][0] < TTL:
        return CACHE[url][1]
    r=requests.get(url,headers=HEADERS,timeout=8)
    r.raise_for_status()
    CACHE[url]=(now,r.text)
    return r.text

def clean(x):
    return re.sub(r"\s+"," ",x or "").strip()

def parse_offers(html, retailer_slug):
    soup=BeautifulSoup(html,"html.parser")
    text=soup.get_text("\n",strip=True)
    lines=[clean(x) for x in text.splitlines() if clean(x)]
    allowed=[x.lower() for x in RETAILER_NAMES.get(retailer_slug,[])]
    out=[]
    # Marktguru pages expose repeating textual blocks with product, brand, price, validity, retailer.
    for i,line in enumerate(lines):
        if line.lower() != "händler:" and not line.lower().startswith("händler:"):
            continue
        retailer = lines[i+1] if i+1<len(lines) else ""
        if allowed and retailer.lower() not in allowed:
            continue
        start=max(0,i-18)
        block=lines[start:i+2]
        title=""
        brand=""
        price=""
        valid=""
        for j,x in enumerate(block):
            if x=="Preis:" and j>0:
                # title usually occurs before Marke:/Preis:
                k=j-1
                while k>=0 and block[k] in ("Marke:","Preis:"): k-=1
                if not title and k>=0: title=block[k]
            if x=="Marke:" and j+1<len(block): brand=block[j+1]
            if re.fullmatch(r"€\s*\d+[,.]\d{2}",x): price=x
            if x=="Gültig:" and j+1<len(block): valid=block[j+1]
        # Better title: nearest plausible line before Marke:/Preis:
        for j in range(len(block)-1,-1,-1):
            x=block[j]
            if x in ("Marke:","Preis:","Gültig:","Händler:",brand,price,valid,retailer): continue
            if re.match(r"^(Noch|In|Läuft|Brandneu|Top Rabatt|Image|Abgelaufen)",x,re.I): continue
            if len(x)>2:
                title=x
                break
        if price and title:
            out.append({"title":title,"brand":brand,"price":price,"valid":valid,"retailer":retailer})
    # de-duplicate
    seen=set(); result=[]
    for x in out:
        key=(x["title"],x["price"],x["retailer"])
        if key not in seen:
            seen.add(key);result.append(x)
    return result[:20]

@app.get("/")
def root():
    return send_from_directory("static","index.html")

@app.get("/manifest.webmanifest")
def manifest():
    return send_from_directory("static","manifest.webmanifest")

@app.post("/api/match-offers")
def match_offers():
    data=request.get_json(force=True) or {}
    retailer=data.get("retailer","rewe")
    items=data.get("items",[])[:30]
    matches={}
    for item in items:
        iid=str(item.get("id",""))
        name=clean(item.get("name",""))
        if not iid or not name:
            continue
        slug=slugify(name)
        # retailer+category URL gives a much tighter result set than the general retailer page
        url=f"https://www.marktguru.de/rc/{quote(retailer)}/{quote(slug)}"
        try:
            html=fetch(url)
            offers=parse_offers(html,retailer)
            matches[iid]=offers[:3]
        except Exception:
            # fallback: general category page, then filter retailer
            try:
                html=fetch(f"https://www.marktguru.de/c/{quote(slug)}")
                matches[iid]=parse_offers(html,retailer)[:3]
            except Exception:
                matches[iid]=[]
    return jsonify({"matches":matches,"source":"marktguru.de","cached_seconds":TTL})

if __name__=="__main__":
    app.run(host="0.0.0.0",port=8000,debug=False)
