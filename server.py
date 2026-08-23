from flask import Flask, request, jsonify, send_from_directory
from bs4 import BeautifulSoup
import requests, re, time
from urllib.parse import quote
from pathlib import Path

ROOT=Path(__file__).resolve().parent
app=Flask(__name__, static_folder=str(ROOT), static_url_path="")
CACHE={}
TTL=1800
HEADERS={"User-Agent":"Mozilla/5.0 (compatible; Einkaufsweg/1.2)"}

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
    r=requests.get(url,headers=HEADERS,timeout=8)
    r.raise_for_status()
    CACHE[url]=(now,r.text)
    return r.text

def parse_offers(html,retailer_slug):
    soup=BeautifulSoup(html,"html.parser")
    lines=[re.sub(r"\s+"," ",x).strip() for x in soup.get_text("\n",strip=True).splitlines() if x.strip()]
    allowed=[x.lower() for x in RETAILER_NAMES.get(retailer_slug,[])]
    out=[]
    for i,line in enumerate(lines):
        if not line.lower().startswith("händler"):
            continue
        retailer=lines[i+1] if i+1<len(lines) else ""
        if allowed and retailer.lower() not in allowed:
            continue
        block=lines[max(0,i-18):i+2]
        price=next((x for x in block if re.fullmatch(r"€\s*\d+[,.]\d{2}",x)),"")
        valid=""
        brand=""
        for j,x in enumerate(block):
            if x=="Gültig:" and j+1<len(block): valid=block[j+1]
            if x=="Marke:" and j+1<len(block): brand=block[j+1]
        title=""
        for x in reversed(block):
            if x in {"Marke:","Preis:","Gültig:","Händler:",retailer,price,valid,brand}: continue
            if len(x)>2 and not x.lower().startswith(("noch ","leider ","aktuelle angebote","image")):
                title=x;break
        if title and price:
            out.append({"title":title,"brand":brand,"price":price,"valid":valid,"retailer":retailer})
    seen=set();result=[]
    for x in out:
        k=(x["title"],x["price"],x["retailer"])
        if k not in seen:
            seen.add(k);result.append(x)
    return result[:20]

@app.get("/")
def home():
    return send_from_directory(ROOT,"index.html")

@app.post("/api/match-offers")
def match_offers():
    data=request.get_json(force=True) or {}
    retailer=data.get("retailer","")
    matches={}
    for item in data.get("items",[])[:40]:
        iid=str(item.get("id",""));name=(item.get("name") or "").strip()
        if not iid or not name:
            continue
        slug=slugify(name);offers=[]
        urls=[f"https://www.marktguru.de/rc/{quote(retailer)}/{quote(slug)}",f"https://www.marktguru.de/c/{quote(slug)}"]
        for url in urls:
            try:
                offers=parse_offers(fetch(url),retailer)
                if offers:break
            except Exception:
                pass
        matches[iid]=offers[:3]
    return jsonify({"matches":matches,"source":"marktguru.de","cached_seconds":TTL})

if __name__=="__main__":
    app.run(host="0.0.0.0",port=8000,debug=False)
