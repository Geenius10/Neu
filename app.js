const LEGACY_STORES=[{"id": "edeka-center-otto", "group": "EDEKA", "name": "E center Schneidermarkt", "address": "Otto-Hahn-Straße 1, 95447 Bayreuth", "retailer": "edeka-center"}, {"id": "edeka-gravenreuth", "group": "EDEKA", "name": "EDEKA Schneidermarkt", "address": "Gravenreuther Straße 19, 95445 Bayreuth", "retailer": "edeka"}, {"id": "edeka-meran", "group": "EDEKA", "name": "EDEKA Schneidermarkt", "address": "Meranierring 2, 95445 Bayreuth", "retailer": "edeka"}, {"id": "edeka-pensel", "group": "EDEKA", "name": "EDEKA Pensel", "address": "Königsallee 45, 95448 Bayreuth", "retailer": "edeka"}, {"id": "edeka-center-riedinger", "group": "EDEKA", "name": "E center Schneidermarkt", "address": "Riedingerstraße 21, 95448 Bayreuth", "retailer": "edeka-center"}, {"id": "nahgut-troeger", "group": "EDEKA", "name": "nah & gut Tröger", "address": "Eichendorffring 1, 95447 Bayreuth", "retailer": "edeka-nah-gut"}, {"id": "rewe-justus", "group": "REWE", "name": "REWE", "address": "Justus-Liebig-Str. 8, 95447 Bayreuth", "retailer": "rewe"}, {"id": "rewe-kanal", "group": "REWE", "name": "REWE", "address": "Kanalstr. 15–17, 95444 Bayreuth", "retailer": "rewe"}, {"id": "rewe-friedrich", "group": "REWE", "name": "REWE", "address": "Friedrichstr. 53, 95444 Bayreuth", "retailer": "rewe"}, {"id": "rewe-spinnerei", "group": "REWE", "name": "REWE", "address": "Spinnereistr. 7–13, 95445 Bayreuth", "retailer": "rewe"}, {"id": "rewe-bamberger", "group": "REWE", "name": "REWE", "address": "Bamberger Str. 32, 95445 Bayreuth", "retailer": "rewe"}, {"id": "nahkauf-friedrich-ebert", "group": "REWE", "name": "nahkauf", "address": "Friedrich-Ebert-Str. 14, 95448 Bayreuth", "retailer": "nahkauf"}, {"id": "nahkauf-carl-burger", "group": "REWE", "name": "nahkauf", "address": "Carl-Burger-Str. 8, 95445 Bayreuth", "retailer": "nahkauf"}, {"id": "nahkauf-preuschwitz", "group": "REWE", "name": "nahkauf", "address": "Preuschwitzer Str. 23, 95445 Bayreuth", "retailer": "nahkauf"}, {"id": "rewe-express-hindenburg", "group": "REWE", "name": "REWE express", "address": "Hindenburgstraße 4, 95445 Bayreuth", "retailer": "rewe"}, {"id": "lidl-adolf", "group": "Lidl", "name": "Lidl", "address": "Adolf-Wächter-Str. 1, 95447 Bayreuth", "retailer": "lidl"}, {"id": "lidl-meran", "group": "Lidl", "name": "Lidl", "address": "Meranierring 49, 95445 Bayreuth", "retailer": "lidl"}, {"id": "lidl-nuernberg", "group": "Lidl", "name": "Lidl", "address": "Nürnberger Str. 3a, 95448 Bayreuth", "retailer": "lidl"}, {"id": "lidl-riedinger", "group": "Lidl", "name": "Lidl", "address": "Riedingerstraße 21, 95448 Bayreuth", "retailer": "lidl"}, {"id": "aldi-tunnel", "group": "ALDI SÜD", "name": "ALDI SÜD", "address": "Tunnelstraße 11, 95448 Bayreuth", "retailer": "aldi-sued"}, {"id": "aldi-otto", "group": "ALDI SÜD", "name": "ALDI SÜD", "address": "Otto-Hahn-Straße 1a, 95447 Bayreuth", "retailer": "aldi-sued"}, {"id": "aldi-himmelkron", "group": "ALDI SÜD", "name": "ALDI SÜD", "address": "Himmelkronstraße 1, 95445 Bayreuth", "retailer": "aldi-sued"}, {"id": "aldi-theodor", "group": "ALDI SÜD", "name": "ALDI SÜD", "address": "Theodor-Schmidt-Straße 12, 95448 Bayreuth", "retailer": "aldi-sued"}, {"id": "aldi-nuernberg", "group": "ALDI SÜD", "name": "ALDI SÜD", "address": "Nürnberger Str. 96, 95448 Bayreuth", "retailer": "aldi-sued"}, {"id": "netto-leuschner", "group": "Netto", "name": "Netto Marken-Discount", "address": "Leuschnerstraße 84, 95447 Bayreuth", "retailer": "netto-marken-discount"}, {"id": "netto-koenigsallee", "group": "Netto", "name": "Netto Marken-Discount", "address": "Königsallee 47, 95448 Bayreuth", "retailer": "netto-marken-discount"}, {"id": "netto-bamberger", "group": "Netto", "name": "Netto Marken-Discount", "address": "Bamberger Str. 38, 95445 Bayreuth", "retailer": "netto-marken-discount"}, {"id": "netto-spinnerei", "group": "Netto", "name": "Netto Marken-Discount", "address": "Spinnereistraße 7, 95445 Bayreuth", "retailer": "netto-marken-discount"}, {"id": "netto-richard", "group": "Netto", "name": "Netto Marken-Discount", "address": "Richard-Wagner-Straße 17, 95444 Bayreuth", "retailer": "netto-marken-discount"}, {"id": "netto-nuernberg", "group": "Netto", "name": "Netto Marken-Discount", "address": "Nürnberger Str. 37, 95447 Bayreuth", "retailer": "netto-marken-discount"}, {"id": "norma-kanal", "group": "NORMA", "name": "NORMA", "address": "Kanalstraße 17, 95444 Bayreuth", "retailer": "norma"}, {"id": "norma-spitzweg", "group": "NORMA", "name": "NORMA", "address": "Spitzwegstraße 59, 95447 Bayreuth", "retailer": "norma"}, {"id": "norma-bauhof", "group": "NORMA", "name": "NORMA", "address": "Am Bauhof 4, 95445 Bayreuth", "retailer": "norma"}, {"id": "norma-kemnather", "group": "NORMA", "name": "NORMA", "address": "Kemnather Str. 29, 95448 Bayreuth", "retailer": "norma"}, {"id": "kaufland-weiher", "group": "Kaufland", "name": "Kaufland Bayreuth", "address": "Weiherstraße 27, 95448 Bayreuth", "retailer": "kaufland"}, {"id": "sultan-weiher", "group": "Weitere", "name": "sultan Markt Bayreuth", "address": "Weiherstraße 1, 95448 Bayreuth", "retailer": null}, {"id": "fruchtgarten", "group": "Weitere", "name": "Fruchtgarten Bayreuth GmbH", "address": "Ritter-von-Eitzenberger-Straße 9, 95448 Bayreuth", "retailer": null}];
const SUPERMARKET_ROUTE=["Aktionsware / Non-Food", "Baby & Familie", "Backen", "Backwaren", "Drogerie & Körperpflege", "Essig & Öl", "Frischetheke Fleisch & Wurst", "Frischetheke Käse & Feinkost", "Getränke alkoholfrei", "Getränke alkoholisch", "Gewürze", "Haushalt & Reinigung", "Kasse / Impulsware", "Kühlung Convenience", "Kühlung Milchprodukte", "Obst & Gemüse", "Sonstiges", "Süßwaren & Snacks", "Tabak & Raucherbedarf", "Tiefkühlung", "Tiernahrung", "Vorrat Frühstück & Brotaufstrich", "Vorrat Konserven & Saucen", "Vorrat Nudeln, Reis & Hülsenfrüchte", "Zeitschriften & Presse"];
const DRUGSTORE_ROUTE=["Baby & Familie","Drogerie & Körperpflege","Gesundheit & Nahrungsergänzung","Haushalt & Reinigung","Hygiene & Damenhygiene","Kosmetik & Gesichtspflege","Parfum & Düfte","Tiernahrung","Foto & Services","Aktionsware / Non-Food","Kasse / Impulsware","Sonstiges"];
const CATEGORY_KEYWORDS={
"Obst & Gemüse":["banan","apfel","aepfel","birne","orange","mandarine","zitrone","limette","traube","weintraube","erdbeer","himbeer","heidelbeer","beere","kiwi","mango","ananas","melone","pfirsich","nektarine","pflaume","zwetschge","tomate","gurke","paprika","zucchini","aubergine","karotte","moehre","möhre","kartoffel","zwiebel","knoblauch","salat","spinat","brokkoli","blumenkohl","kohl","champignon","pilz","avocado","kraeuter","kräuter","obst","gemuese","gemüse"],
"Backwaren":["brot","broetchen","brötchen","toast","baguette","ciabatta","croissant","brezel","semmel","backware","kuchen","muffin","donut","teilchen"],
"Frischetheke Fleisch & Wurst":["hack","hackfleisch","fleisch","haehnchen","hähnchen","pute","rind","schwein","wurst","salami","schinken","kasseler","steak","schnitzel","leberkaese","leberkäse","bratwurst","aufschnitt","mortadella","lyoner","bacon","speck","gulasch","filet"],
"Frischetheke Käse & Feinkost":["thekenkaese","thekenkäse","feinkost","antipasti","olive","feta","parmesan","pecorino","frischkaese","frischkäse","kaesetheke","käsetheke","hummus","dips","salatbecher"],
"Kühlung Milchprodukte":["milch","butter","joghurt","jogurt","kaese","käse","gouda","emmentaler","quark","sahne","ei","eier","pudding","kefir","skyr","mozzarella","mascarpone","creme fraiche","frischkaese","frischkäse"],
"Kühlung Convenience":["fertiggericht","wrap","sandwich","frische pizza","gnocchi","tortellini","maultasche","salat bowl","convenience","frischer teig","blätterteig","blaetterteig"],
"Vorrat Frühstück & Brotaufstrich":["marmelade","konfituere","konfitüre","honig","nutella","nussnougat","brotaufstrich","cornflakes","muesli","müsli","haferflock","cerealien","porridge","erdnussbutter"],
"Vorrat Nudeln, Reis & Hülsenfrüchte":["nudel","spaghetti","penne","fusilli","reis","linse","bohne","kichererbse","couscous","bulgur","quinoa","huelsenfrucht","hülsenfrucht"],
"Vorrat Konserven & Saucen":["konserve","dose","dosentomate","tomatensauce","passierte tomate","pesto","ketchup","senf","mayonnaise","mayo","sauce","soße","sosse","bruehe","brühe","fond","mais dose","thunfisch dose"],

"Gewürze":["salz","pfeffer","paprikapulver","curry","kurkuma","oregano","basilikum","thymian","rosmarin","muskat","chili","gewuerz","gewürz","kraeuter","kräuter"],
"Essig & Öl":["essig","balsamico","apfelessig","weinessig","oel","öl","olivenoel","olivenöl","sonnenblumenoel","sonnenblumenöl","rapsoel","rapsöl","bratoel","bratöl"],
"Backen":["mehl","zucker","puderzucker","backpulver","vanillezucker","hefe","staerke","stärke","kakao backen","backkakao","mandel gemahlen","kokosraspel","kuvertuere","kuvertüre","backaroma"],
"Süßwaren & Snacks":["schokolade","schoko","chips","snack","keks","cookie","bonbon","gummibaer","gummibär","nuss","cracker","popcorn","riegel","praline","lakritz"],
"Getränke alkoholfrei":["wasser","mineralwasser","cola","saft","limo","limonade","energy","eistee","getraenk","getränk","schorle","tonic","ginger ale"],
"Getränke alkoholisch":["bier","pils","weizen","wein","rotwein","weisswein","weißwein","sekt","prosecco","spirituose","whisky","whiskey","vodka","wodka","gin","rum","likoer","likör","schnaps"],
"Tiefkühlung":["tiefkuehl","tiefkühl","tk","pizza","pommes","eis","fischstaebchen","fischstäbchen","gemuese tk","gemüse tk","beeren tk"],
"Drogerie & Körperpflege":["shampoo","seife","zahnpasta","zahnbuerste","zahnbürste","deo","duschgel","rasierer","rasierklinge","koerperpflege","körperpflege","creme","lotion","haarspray","tampon","binde","kondom"],
"Haushalt & Reinigung":["spuel","spül","waschmittel","reiniger","toilettenpapier","klopapier","kuechenrolle","küchenrolle","mullbeutel","müllbeutel","schwamm","spuelmaschine","spülmaschine","weichspueler","weichspüler","putzmittel","glasreiniger"],
"Tiernahrung":["hundefutter","katzenfutter","tierfutter","katzenstreu","streu","leckerli","hunde snack","katzen snack","vogelfutter"],
"Baby & Familie":["windel","babynahrung","babybrei","feuchttuch","schnuller","babyflasche","milchpulver","pre nahrung","kindernahrung"],
"Zeitschriften & Presse":["zeitschrift","zeitung","magazin","rätselheft","raetselheft","presse","comic","tv zeitschrift"],
"Tabak & Raucherbedarf":["zigarette","zigaretten","kippe","kippen","tabak","drehtabak","stopftabak","zigarre","zigarillo","filter","blaettchen","blättchen","papers","feuerzeug","huelse","hülse","zigarettenhuelse","zigarettenhülse"],
"Aktionsware / Non-Food":["aktion","non food","non-food","werkzeug","textil","socke","pfanne","topf","elektronik","batterie","kabel","lampe","spielzeug","deko","garten","haushaltsgeraet","haushaltsgerät"],
"Kasse / Impulsware":["kaugummi","lotto","rubellos","impulsware","mint","bonbon kasse"]
};
CATEGORY_KEYWORDS["Gesundheit & Nahrungsergänzung"]=["vitamin","magnesium","zink","nahrungsergänzung","pflaster","verband"];CATEGORY_KEYWORDS["Hygiene & Damenhygiene"]=["tampon","binde","slipeinlage","intimpflege","desinfektion"];CATEGORY_KEYWORDS["Kosmetik & Gesichtspflege"]=["make up","mascara","lippenstift","foundation","gesichtscreme","serum"];CATEGORY_KEYWORDS["Parfum & Düfte"]=["parfum","eau de toilette","duft"];CATEGORY_KEYWORDS["Foto & Services"]=["foto","fotopapier","passbild"];
const ALL_CATEGORIES=[...new Set([...SUPERMARKET_ROUTE,...DRUGSTORE_ROUTE])].sort((a,b)=>a.localeCompare(b,"de",{sensitivity:"base"}));const STORAGE_KEY="rethink-einkauf-v34";const $=s=>document.querySelector(s);
function norm(s){return String(s||"").toLowerCase().replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/ß/g,"ss").replace(/[^a-z0-9]+/g," ").trim()}
function infer(name){const text=norm(name);let best="Sonstiges",score=0;for(const[cat,words]of Object.entries(CATEGORY_KEYWORDS)){let local=0;for(const raw of words){const k=norm(raw);if(!k)continue;if(text===k)local+=100;else if(text.includes(k))local+=20+k.length;else if(text.split(" ").some(w=>w.startsWith(k)||k.startsWith(w)))local+=8}if(local>score){score=local;best=cat}}return best}
function retailerFromName(name){const n=norm(name);if(n.includes("rewe"))return"rewe";if(n.includes("nahkauf"))return"nahkauf";if(n.includes("lidl"))return"lidl";if(n.includes("aldi"))return"aldi-sued";if(n.includes("netto"))return"netto-marken-discount";if(n.includes("norma"))return"norma";if(n.includes("kaufland"))return"kaufland";if(n.includes("edeka")||n.includes("e center"))return"edeka";return null}
function storeTemplate(s){return{id:String(s.id),name:s.name||"Filiale",address:s.address||"",group:s.group||s.chain||"",type:s.type||"supermarket",retailer:s.retailer??retailerFromName(s.name),source:s.source||"saved"}}
function emptyState(){return{items:[],myStores:[],store:"",compareStore:"",routes:{},hiddenCategories:{},learning:{},storeCategoryOverrides:{},autoCategoryLearning:{},offers:{},compareOffers:{},prices:{},settings:{priceComparison:false},shopStage:1,shopSequence:{},routeEditStore:""}}
function migrate(raw){const s={...emptyState(),...(raw||{})};s.items=Array.isArray(s.items)?s.items:[];s.myStores=Array.isArray(s.myStores)?s.myStores.map(storeTemplate):[];s.routes=s.routes||{};s.hiddenCategories=s.hiddenCategories||{};s.learning=s.learning||{};s.storeCategoryOverrides=s.storeCategoryOverrides||{};s.autoCategoryLearning=s.autoCategoryLearning||{};s.offers=s.offers||{};s.compareOffers=s.compareOffers||{};s.prices=s.prices||{};s.settings={priceComparison:false,...(s.settings||{})};s.shopSequence={};for(const sid of[s.store,s.compareStore]){if(sid&&!s.myStores.some(x=>x.id===sid)){const old=LEGACY_STORES.find(x=>x.id===sid);if(old)s.myStores.push(storeTemplate({...old,type:"supermarket",source:"migration"}))}}if(!s.myStores.some(x=>x.id===s.store))s.store=s.myStores[0]?.id||"";if(s.compareStore&&!s.myStores.some(x=>x.id===s.compareStore))s.compareStore="";s.items.forEach(i=>{i.mode=i.mode==="recurring"?"recurring":"once";i.checked=!!i.checked;i.cat=i.cat||infer(i.name)});return s}
function load(){for(const k of[STORAGE_KEY,"rethink-einkauf-v33","rethink-einkauf-v32","rethink-einkauf-v31","rethink-einkauf-v30","rethink-einkauf-v29","rethink-einkauf-v28"])try{const raw=localStorage.getItem(k);if(raw){const s=migrate(JSON.parse(raw));localStorage.setItem(STORAGE_KEY,JSON.stringify(s));return s}}catch(e){}return emptyState()}
let state=load(),editing=[],offerTimer=null,pendingServiceWorker=null;function save(){localStorage.setItem(STORAGE_KEY,JSON.stringify(state))}function esc(s=""){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[c]))}function getStore(id){return state.myStores.find(s=>s.id===id)||null}function currentStore(){return getStore(state.store)}function compareStore(){return getStore(state.compareStore)}function itemStoreKey(item){return norm(item.name)}
function categoryForStore(item,storeId){return state.storeCategoryOverrides?.[storeId]?.[itemStoreKey(item)]||state.autoCategoryLearning?.[storeId]?.[itemStoreKey(item)]?.category||item.cat}
function setCategoryForStore(item,storeId,category){state.storeCategoryOverrides[storeId]=state.storeCategoryOverrides[storeId]||{};state.storeCategoryOverrides[storeId][itemStoreKey(item)]=category}function isManualCategoryOverride(item,storeId){return !!state.storeCategoryOverrides?.[storeId]?.[itemStoreKey(item)]}
function autoEvidence(storeId,item){
  state.autoCategoryLearning[storeId]=state.autoCategoryLearning[storeId]||{};
  const key=itemStoreKey(item);
  state.autoCategoryLearning[storeId][key]=state.autoCategoryLearning[storeId][key]||{category:null,scores:{},observations:0};
  return state.autoCategoryLearning[storeId][key];
}
function learnItemPlacements(storeId){
  const seq=state.shopSequence[storeId]||[];
  if(seq.length<3)return;
  const routeNow=route(storeId),idx={};
  routeNow.forEach((c,i)=>idx[c]=i);
  seq.forEach((entry,pos)=>{
    const item=state.items.find(x=>x.id===entry.itemId);
    if(!item||isManualCategoryOverride(item,storeId))return;
    const prev=seq[pos-1]?.category,next=seq[pos+1]?.category;
    let candidate=null;
    if(prev&&next&&prev===next)candidate=prev;
    else if(prev||next){
      const current=categoryForStore(item,storeId),ci=idx[current]??999;
      const candidates=[prev,next].filter(Boolean);
      candidates.sort((a,b)=>Math.abs((idx[a]??999)-ci)-Math.abs((idx[b]??999)-ci));
      candidate=candidates[0]||null;
    }
    if(!candidate||candidate==="Sonstiges")return;
    const ev=autoEvidence(storeId,item);
    ev.observations++;
    ev.scores[candidate]=(ev.scores[candidate]||0)+1;
    const ranked=Object.entries(ev.scores).sort((a,b)=>b[1]-a[1]);
    const best=ranked[0],second=ranked[1]?.[1]||0;
    if(best&&best[1]>=3&&best[1]>=second+2)ev.category=best[0];
  });
}


function defaultRoute(id){return getStore(id)?.type==="drugstore"?DRUGSTORE_ROUTE:SUPERMARKET_ROUTE}function learnedRoute(id){const base=defaultRoute(id),stats=state.learning?.[id]?.positions||{},seen=[],unseen=[];for(const c of base){const x=stats[c];if(x?.count)seen.push([c,x.sum/x.count]);else unseen.push(c)}seen.sort((a,b)=>a[1]-b[1]);return[...seen.map(x=>x[0]),...unseen]}function route(id=state.store){const base=state.routes[id]||learnedRoute(id),hidden=new Set(state.hiddenCategories?.[id]||[]);return base.filter(c=>!hidden.has(c))}function learnStatus(id){if(state.routes[id])return"Manuell";const n=state.learning?.[id]?.trips||0;return n?`Lernt · ${n} Einkauf${n===1?"":"e"}`:"Noch ungelernt"}
function recordCategory(i){const id=state.shopStage===2&&state.compareStore?state.compareStore:state.store;if(!id)return;const seq=state.shopSequence[id]||(state.shopSequence[id]=[]);const category=categoryForStore(i,id);if(seq[seq.length-1]?.itemId!==i.id)seq.push({itemId:i.id,category})}
function commitLearning(id){
  const raw=state.shopSequence[id]||[];
  if(raw.length<2){state.shopSequence[id]=[];return}
  learnItemPlacements(id);
  const cats=raw.map(entry=>{const item=state.items.find(x=>x.id===entry.itemId);return item?categoryForStore(item,id):entry.category}).filter(Boolean);
  const seq=[...new Set(cats)];
  if(seq.length>=2){
    const l=state.learning[id]||{trips:0,positions:{}},n=seq.length;
    seq.forEach((c,i)=>{const x=l.positions[c]||(l.positions[c]={sum:0,count:0});x.sum+=i/(n-1);x.count++});
    l.trips++;state.learning[id]=l;
  }
  state.shopSequence[id]=[];
}
function offersFor(i){return state.offers?.[i.id]||[]}function compareOffersFor(i){return state.compareOffers?.[i.id]||[]}function euro(v){const n=parseFloat(String(v||"").replace("€","").replace(",","."));return Number.isFinite(n)?n:null}function priceKey(s,i){return s+"::"+i.name.trim().toLowerCase()}function knownPrice(s,i){return state.prices?.[priceKey(s,i)]||null}function cheapest(a){return(a||[]).map(o=>({...o,n:euro(o.price)})).filter(o=>o.n!==null).sort((a,b)=>a.n-b.n)[0]||null}function bestPrice(s,i,a){const o=cheapest(a),k=knownPrice(s,i),n=k?euro(k.price):null;if(o&&(n===null||o.n<n))return{label:o.price,type:"Angebot"};if(n!==null)return{label:n.toFixed(2).replace(".",",")+" €",type:"zuletzt bekannt"};return o?{label:o.price,type:"Angebot"}:null}
function priceHtml(i){if(!state.settings.priceComparison)return"";const row=(s,a)=>{const p=bestPrice(s.id,i,a),k=knownPrice(s.id,i);return`<div class="price-store"><div><b>${esc(s.name)}</b><small>${esc(s.address)}</small></div><div class="price-value">${p?`<strong>${esc(p.label)}</strong><span>${esc(p.type)}</span>`:`<span>Preis unbekannt</span>`}</div><button class="price-edit" data-price-store="${s.id}" data-price-item="${i.id}">${k?"✎":"+ €"}</button></div>`};let x=currentStore()?row(currentStore(),offersFor(i)):"";if(compareStore())x+=row(compareStore(),compareOffersFor(i));return x?`<div class="price-compare">${x}</div>`:""}
function offerHtml(i){
  const groups=[];
  const main=currentStore(),second=compareStore();
  const a=offersFor(i),b=compareOffersFor(i);
  if(main&&a.length)groups.push({store:main,offers:a});
  if(second&&b.length)groups.push({store:second,offers:b});
  if(!groups.length)return"";

  const id=`offers-${i.id}`;
  const total=groups.reduce((n,g)=>n+g.offers.length,0);
  const rows=groups.map(g=>`
    <div class="offer-store-group">
      <div class="offer-store-label">${esc(g.store.name)}</div>
      ${g.offers.map((o,n)=>`<a class="offer-row" href="${esc(o.source_url||"#")}" target="_blank" rel="noopener">
        <div class="offer-number">${n+1}</div>
        <div class="offer-detail"><b>${esc(o.title||i.name)}</b>${o.brand?`<span>${esc(o.brand)}</span>`:""}${o.valid?`<small>${esc(o.valid)}</small>`:""}</div>
        <strong class="offer-price">${esc(o.price||"")}</strong>
      </a>`).join("")}
    </div>`).join("");

  return `<div class="offer-toggle-row"><button class="offer-arrow" data-toggle-offers="${id}" aria-label="Angebote ein-/ausklappen">⌄</button><span>${total} ${total===1?"Angebot":"Angebote"}${groups.length>1?" · 2 Filialen":""}</span></div><div id="${id}" class="offer-list more-offers" hidden>${rows}</div>`;
}
function openCategoryPicker(i){const o=document.createElement("div"),main=currentStore(),second=compareStore(),inShop=!!document.querySelector("#shopScreen.active"),contextStore=inShop?(state.shopStage===2&&second?second:main):main;let mode=contextStore?"store":"global";const manual=contextStore?state.storeCategoryOverrides?.[contextStore.id]?.[itemStoreKey(i)]:null,auto=contextStore?state.autoCategoryLearning?.[contextStore.id]?.[itemStoreKey(i)]?.category:null,current=contextStore?categoryForStore(i,contextStore.id):i.cat;o.className="category-picker-overlay";o.innerHTML=`<div class="category-picker-sheet"><div class="category-picker-head"><b>Kategorie ändern</b><button class="category-picker-close">×</button></div>${contextStore?`<div class="category-context"><small>Platzierung in</small><b>${esc(contextStore.name)}</b><span>${esc(contextStore.address)}</span>${manual?`<em>Manuell: ${esc(manual)}</em>`:auto?`<em>Automatisch gelernt: ${esc(auto)}</em>`:""}</div>`:""}<div class="category-picker-mode">${contextStore?`<button data-cat-mode="store" class="selected">Nur diese Filiale</button>`:""}<button data-cat-mode="global" class="${contextStore?"":"selected"}">Globaler Standard</button></div>${contextStore&&manual?`<button class="clear-category-override" data-clear-override>Manuelle Platzierung entfernen · wieder lernen</button>`:""}<div class="category-picker-list">${ALL_CATEGORIES.map(c=>`<button class="category-choice ${c===current?"selected":""}" data-choice="${esc(c)}">${esc(c)}</button>`).join("")}</div></div>`;document.body.appendChild(o);const refresh=()=>o.querySelectorAll("[data-cat-mode]").forEach(b=>b.classList.toggle("selected",b.dataset.catMode===mode));o.querySelectorAll("[data-cat-mode]").forEach(b=>b.onclick=()=>{mode=b.dataset.catMode;refresh()});o.querySelector("[data-clear-override]")?.addEventListener("click",()=>{delete state.storeCategoryOverrides?.[contextStore.id]?.[itemStoreKey(i)];save();o.remove();render()});const close=()=>o.remove();o.onclick=e=>{if(e.target===o)close()};o.querySelector(".category-picker-close").onclick=close;o.querySelectorAll("[data-choice]").forEach(b=>b.onclick=()=>{if(mode==="store"&&contextStore)setCategoryForStore(i,contextStore.id,b.dataset.choice);else i.cat=b.dataset.choice;save();close();render()})}function itemNode(i,shopping=false){const e=document.createElement("div"),activeStoreId=shopping?(state.shopStage===2&&state.compareStore?state.compareStore:state.store):state.store,shownCategory=shopping&&activeStoreId?categoryForStore(i,activeStoreId):i.cat;e.className="item"+(i.checked?" checked":"")+((offersFor(i).length||compareOffersFor(i).length)?" offer":"");e.innerHTML=`<input class="check" data-id="${i.id}" type="checkbox" ${i.checked?"checked":""}><div><div class="item-name">${esc(i.name)}${(Number(i.qty)||1)>1?` <span class="item-qty">×${Number(i.qty)}</span>`:""}</div><div class="meta"><button class="tag ${i.mode}" data-mode="${i.id}">${i.mode==="recurring"?"dauerhaft":"einmalig"}</button><button class="tag category-tag" data-category-id="${i.id}">${esc(shownCategory)}</button></div>${offerHtml(i)}${priceHtml(i)}</div>${shopping?"":`<button class="delete" data-delete="${i.id}">×</button>`}`;return e}function bindList(box,shopping=false){box.querySelectorAll(".check").forEach(b=>b.onchange=e=>{const i=state.items.find(x=>x.id===e.target.dataset.id);if(!i)return;i.checked=e.target.checked;if(shopping&&i.checked)recordCategory(i);save();render()});box.querySelectorAll("[data-mode]").forEach(b=>b.onclick=()=>{const i=state.items.find(x=>x.id===b.dataset.mode);if(i){i.mode=i.mode==="once"?"recurring":"once";save();render()}});box.querySelectorAll("[data-category-id]").forEach(b=>b.onclick=()=>{const i=state.items.find(x=>x.id===b.dataset.categoryId);if(i)openCategoryPicker(i)});box.querySelectorAll("[data-delete]").forEach(b=>b.onclick=()=>{state.items=state.items.filter(i=>i.id!==b.dataset.delete);save();render();scheduleOffers()});box.querySelectorAll("[data-toggle-offers]").forEach(b=>b.onclick=()=>{const t=document.getElementById(b.dataset.toggleOffers);if(t){const open=t.hidden;t.hidden=!open;b.classList.toggle("open",open)}});box.querySelectorAll("[data-price-store]").forEach(b=>b.onclick=()=>{if(!state.settings.priceComparison)return;const i=state.items.find(x=>x.id===b.dataset.priceItem);if(!i)return;const old=knownPrice(b.dataset.priceStore,i),raw=prompt("Preis für "+i.name+" merken (z. B. 1,29)",old?String(old.price).replace(".",","):"");if(raw===null)return;const n=euro(raw);if(n===null)return alert("Bitte gültigen Preis eingeben.");state.prices[priceKey(b.dataset.priceStore,i)]={price:n,date:new Date().toISOString().slice(0,10)};save();render()})}
function renderList(){const b=$("#items");b.innerHTML="";[...state.items].sort((a,c)=>a.name.localeCompare(c.name,"de",{sensitivity:"base"})).forEach(i=>b.append(itemNode(i)));bindList(b);$("#emptyState").style.display=state.items.length?"none":"grid"}function shoppingItems(){const sid=state.shopStage===2&&state.compareStore?state.compareStore:state.store,o=route(sid);return state.items.filter(i=>!i.checked).sort((a,b)=>{const ai=o.indexOf(categoryForStore(a,sid)),bi=o.indexOf(categoryForStore(b,sid)),aa=ai<0?999:ai,bb=bi<0?999:bi;return aa!==bb?aa-bb:a.name.localeCompare(b.name,"de",{sensitivity:"base"})})}function renderShop(){const b=$("#shopItems"),items=shoppingItems(),second=state.shopStage===2&&compareStore(),s=second?compareStore():currentStore();b.innerHTML="";items.forEach(i=>b.append(itemNode(i,true)));bindList(b,true);$("#progressText").textContent=items.length?`${items.length} noch offen`:"Alles erledigt";$("#progressBar").style.width=items.length?"0%":"100%";if(s)$("#shopStore").textContent=s.name+" · "+s.address;$("#shopHeading").textContent=second?"Reste in der zweiten Filiale":"Dein Laufweg";$("#shopStageHint").hidden=!second;if(second)$("#shopStageHint").textContent="Nur offene Artikel aus der ersten Filiale werden angezeigt.";$("#finishBtn").textContent=!second&&compareStore()?"Weiter zur zweiten Filiale →":"Einkauf abschließen ✓"}
function renderPlan(){const a=$("#storeSelect"),b=$("#compareStoreSelect"),opts=state.myStores.map(s=>`<option value="${s.id}">${esc(s.name)} · ${esc(s.address)}</option>`).join("");a.innerHTML=opts||`<option value="">Keine Filiale gespeichert</option>`;b.innerHTML=`<option value="">Keine zweite Filiale</option>`+opts;a.value=state.store||"";b.value=state.compareStore||"";$("#noStoresNotice").hidden=!!state.myStores.length;const s=currentStore(),c=compareStore();$("#mainRouteCard").hidden=!s;if(s){$("#storeName").textContent=s.name+" · "+s.address;$("#routePreview").innerHTML=route(s.id).map(x=>`<span>${esc(x)}</span>`).join("");$("#mainLearnState").textContent=learnStatus(s.id)}$("#compareRouteCard").hidden=!c;if(c){$("#compareStoreName").textContent=c.name+" · "+c.address;$("#compareRoutePreview").innerHTML=route(c.id).map(x=>`<span>${esc(x)}</span>`).join("");$("#compareLearnState").textContent=learnStatus(c.id)}$("#offerSummary").textContent=s?"Angebote werden automatisch im Hintergrund geprüft.":"Füge unter Filialen zuerst einen Markt hinzu."}
function renderMyStores(){const b=$("#myStores");b.innerHTML=state.myStores.length?state.myStores.map(s=>`<div class="saved-store"><div><b>${esc(s.name)}</b><span>${esc(s.address)}</span><small>${s.type==="drugstore"?"Drogerie":"Supermarkt"} · ${learnStatus(s.id)}</small></div><button data-remove-store="${s.id}">×</button></div>`).join(""):`<div class="empty compact"><b>Noch keine Filiale gespeichert</b><span>Suche unten nach deinem ersten Markt.</span></div>`;b.querySelectorAll("[data-remove-store]").forEach(x=>x.onclick=()=>{const id=x.dataset.removeStore;if(!confirm("Filiale aus Meine Filialen entfernen?"))return;state.myStores=state.myStores.filter(s=>s.id!==id);if(state.store===id)state.store=state.myStores[0]?.id||"";if(state.compareStore===id)state.compareStore="";save();render()})}function render(){renderList();renderShop();renderPlan();renderMyStores()}function show(screen,title){document.querySelectorAll(".screen").forEach(x=>x.classList.remove("active"));$("#"+screen+"Screen")?.classList.add("active");$("#screenTitle").textContent=title;document.querySelectorAll("[data-nav]").forEach(b=>b.classList.toggle("nav-active",b.dataset.nav===screen));window.scrollTo({top:0,behavior:"smooth"})}
const NUMBER_WORDS={ein:1,eine:1,einen:1,einer:1,eins:1,zwei:2,drei:3,vier:4,fuenf:5,fünf:5,sechs:6,sieben:7,acht:8,neun:9,zehn:10,zwoelf:12,zwölf:12};
const UNIT_WORDS=["flasche","flaschen","packung","packungen","paket","pakete","dose","dosen","becher","glas","glaeser","gläser","kiste","kisten","stueck","stück","stuecke","stücke","kg","kilo","gramm","g","liter","l"];
const FILLER_PREFIXES=[
  "ich brauche noch","ich brauche","wir brauchen noch","wir brauchen","bitte noch","bitte",
  "kauf bitte","kaufe bitte","hol bitte","hole bitte","noch"
];

function cleanShoppingPhrase(s){
  let x=String(s||"").trim().replace(/[.!?]+$/,"").trim();
  const low=norm(x);
  for(const p of FILLER_PREFIXES){
    if(low.startsWith(norm(p)+" ")){x=x.slice(p.length).trim();break;}
  }
  return x.replace(/^(und|sowie|plus)\s+/i,"").trim();
}
function parseQuantity(text){
  let x=text.trim(),qty=1,unit="";
  let m=x.match(/^(\d+)\s*[x×]\s+(.+)$/i)||x.match(/^(\d+)\s*[x×]\s*(.+)$/i);
  if(m){qty=Number(m[1]);x=m[2].trim();}
  else{
    m=x.match(/^(\d+)\s+(.+)$/);
    if(m){qty=Number(m[1]);x=m[2].trim();}
    else{
      const first=x.split(/\s+/)[0].toLowerCase(),n=NUMBER_WORDS[first];
      if(n){qty=n;x=x.split(/\s+/).slice(1).join(" ").trim();}
    }
  }
  const parts=x.split(/\s+/);
  if(parts.length>1 && UNIT_WORDS.includes(parts[0].toLowerCase())){
    unit=parts.shift();x=parts.join(" ").trim();
  }
  return {name:x,qty:Math.max(1,qty||1),unit};
}
function smartSplitInput(raw){
  let x=String(raw||"").replace(/\r/g,"").trim();
  if(!x)return[];
  x=x.replace(/\s+(?:und|sowie|plus)\s+(?=(?:(?:\d+\s*[x×]?\s*)|(?:ein(?:e|en|er)?|eins|zwei|drei|vier|fünf|fuenf|sechs|sieben|acht|neun|zehn|zwölf|zwoelf)\s+)?[A-ZÄÖÜa-zäöüß])/gi,"|||");
  return x.split(/[,;\n]|\|\|\|/).map(cleanShoppingPhrase).filter(Boolean).map(parseQuantity).filter(x=>x.name);
}
function addItems(){
  const i=$("#itemInput"),raw=i.value.trim();if(!raw)return;
  const parsed=smartSplitInput(raw);
  if(!parsed.length)return;
  parsed.forEach(p=>{
    const name=p.name.trim();
    const ex=state.items.find(x=>norm(x.name)===norm(name));
    if(ex){
      ex.checked=false;
      ex.qty=Math.max(1,(Number(ex.qty)||1)+(p.qty>1?p.qty:0));
      if(p.unit)ex.unit=p.unit;
    }else{
      state.items.push({id:crypto.randomUUID(),name:name[0].toUpperCase()+name.slice(1),cat:infer(name),mode:"once",checked:false,qty:p.qty||1,unit:p.unit||""});
    }
  });
  i.value="";save();render();scheduleOffers();
}
function renderRouteEditor(){
  const id=state.routeEditStore,b=$("#routeEditor");
  b.innerHTML=editing.map((c,i)=>`<div class="route-row route-row-manage" draggable="true" data-i="${i}">
    <span class="drag-handle" aria-label="Verschieben">☰</span><b>${esc(c)}</b><button class="hide-cat" data-hide="${esc(c)}">×</button>
  </div>`).join("");

  const moveItem=(from,to)=>{
    if(from===null||to===null||from===to||from<0||to<0||from>=editing.length||to>=editing.length)return;
    const [moved]=editing.splice(from,1);
    editing.splice(to,0,moved);
    renderRouteEditor();
  };

  let from=null;
  b.querySelectorAll("[data-i]").forEach(r=>{
    r.ondragstart=e=>{from=+r.dataset.i;r.classList.add("dragging");if(e.dataTransfer)e.dataTransfer.effectAllowed="move"};
    r.ondragend=()=>{r.classList.remove("dragging");from=null};
    r.ondragover=e=>{e.preventDefault();r.classList.add("drag-over")};
    r.ondragleave=()=>r.classList.remove("drag-over");
    r.ondrop=e=>{e.preventDefault();r.classList.remove("drag-over");moveItem(from,+r.dataset.i);from=null};
  });

  // Pointer-based Drag & Drop for iPhone/Android.
  let pointerFrom=null;
  let activeHandle=null;
  b.querySelectorAll(".drag-handle").forEach(handle=>{
    handle.addEventListener("pointerdown",e=>{
      if(e.pointerType==="mouse")return;
      const row=handle.closest("[data-i]");
      pointerFrom=+row.dataset.i;
      activeHandle=handle;
      handle.setPointerCapture?.(e.pointerId);
      row.classList.add("dragging");
      document.body.classList.add("route-touch-dragging");
      e.preventDefault();
    });
    handle.addEventListener("pointermove",e=>{
      if(pointerFrom===null)return;
      const target=document.elementFromPoint(e.clientX,e.clientY)?.closest?.("[data-i]");
      b.querySelectorAll(".drag-over").forEach(x=>x.classList.remove("drag-over"));
      if(target)target.classList.add("drag-over");
      e.preventDefault();
    });
    const finish=e=>{
      if(pointerFrom===null)return;
      const target=document.elementFromPoint(e.clientX,e.clientY)?.closest?.("[data-i]");
      const to=target?+target.dataset.i:null;
      b.querySelectorAll(".dragging,.drag-over").forEach(x=>x.classList.remove("dragging","drag-over"));
      document.body.classList.remove("route-touch-dragging");
      activeHandle?.releasePointerCapture?.(e.pointerId);
      moveItem(pointerFrom,to);
      pointerFrom=null;activeHandle=null;
      e.preventDefault();
    };
    handle.addEventListener("pointerup",finish);
    handle.addEventListener("pointercancel",e=>{
      b.querySelectorAll(".dragging,.drag-over").forEach(x=>x.classList.remove("dragging","drag-over"));
      document.body.classList.remove("route-touch-dragging");
      pointerFrom=null;activeHandle=null;
    });
  });

  b.querySelectorAll("[data-hide]").forEach(x=>x.onclick=()=>{
    const h=new Set(state.hiddenCategories[id]||[]);
    h.add(x.dataset.hide);state.hiddenCategories[id]=[...h];
    editing=editing.filter(c=>c!==x.dataset.hide);
    renderRouteEditor();
  });
}
function scheduleOffers(){clearTimeout(offerTimer);offerTimer=setTimeout(loadOffers,350)}async function fetchOffers(s){if(!s?.retailer||!state.items.length)return{};const r=await fetch("/api/match-offers",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({retailer:s.retailer,items:state.items.filter(i=>!i.checked).map(i=>({id:i.id,name:i.name}))})});if(!r.ok)throw 0;return(await r.json()).matches||{}}async function loadOffers(){if(!state.items.length)return;try{const[a,b]=await Promise.all([fetchOffers(currentStore()),compareStore()?fetchOffers(compareStore()):Promise.resolve({})]);state.offers=a;state.compareOffers=b;save();$("#syncState").textContent="Online-Daten aktualisiert";render()}catch(e){$("#syncState").textContent="Online-Daten gerade nicht erreichbar"}}
async function searchStores(){const q=$("#storeSearchInput").value.trim();if(!q)return;$("#storeSearchState").textContent="Suche online …";$("#storeSearchResults").innerHTML="";try{const r=await fetch("/api/store-search?q="+encodeURIComponent(q));if(!r.ok)throw 0;const d=await r.json();$("#storeSearchState").textContent=d.results.length?`${d.results.length} Filialen gefunden`:"Keine passenden Filialen gefunden";$("#storeSearchResults").innerHTML=d.results.map((s,i)=>`<div class="search-store"><div><b>${esc(s.name)}</b><span>${esc(s.address)}</span><small>${s.type==="drugstore"?"Drogerie":"Supermarkt"}</small></div><button data-add-result="${i}" class="mini">＋</button></div>`).join("");$("#storeSearchResults").querySelectorAll("[data-add-result]").forEach(b=>b.onclick=()=>{const s=storeTemplate(d.results[+b.dataset.addResult]);if(!state.myStores.some(x=>x.id===s.id))state.myStores.push(s);if(!state.store)state.store=s.id;save();render();$("#storeSearchState").textContent=s.name+" gespeichert"})}catch(e){$("#storeSearchState").textContent="Online-Suche gerade nicht erreichbar."}}
function wire(){$("#addBtn").onclick=addItems;$("#itemInput").onkeydown=e=>{if(e.key==="Enter"){e.preventDefault();addItems()}};$("#chooseStoreBtn").onclick=()=>show("plan","Einkauf planen");document.querySelectorAll("[data-nav]").forEach(b=>b.onclick=()=>show(b.dataset.nav,b.dataset.nav==="list"?"Einkaufsliste":b.dataset.nav==="stores"?"Meine Filialen":"Einstellungen"));document.querySelectorAll(".back").forEach(b=>b.onclick=()=>show(b.dataset.screen,b.dataset.screen==="list"?"Einkaufsliste":"Einkauf planen"));$("#storeSelect").onchange=()=>{state.store=$("#storeSelect").value;if(state.compareStore===state.store)state.compareStore="";save();render();scheduleOffers()};$("#compareStoreSelect").onchange=()=>{const v=$("#compareStoreSelect").value;state.compareStore=v===state.store?"":v;save();render();scheduleOffers()};$("#startBtn").onclick=()=>{if(!currentStore())return alert("Füge zuerst eine Filiale hinzu.");if(!state.items.some(i=>!i.checked))return alert("Aktuell ist kein Produkt für den Einkauf markiert.");state.shopStage=1;state.shopSequence={};save();show("shop","Einkauf");render()};$("#finishBtn").onclick=()=>{const sid=state.shopStage===2&&state.compareStore?state.compareStore:state.store;commitLearning(sid);if(state.shopStage===1&&compareStore()){state.items=state.items.filter(i=>!(i.mode==="once"&&i.checked));state.shopStage=2;save();render();return}state.items=state.items.filter(i=>!(i.mode==="once"&&i.checked));state.shopStage=1;save();render();show("list","Einkaufsliste")};$("#editRouteBtn").onclick=()=>{state.routeEditStore=state.store;editing=[...route(state.store)];renderRouteEditor();show("route","Laufweg anpassen")};$("#editCompareRouteBtn").onclick=()=>{if(!compareStore())return;state.routeEditStore=state.compareStore;editing=[...route(state.compareStore)];renderRouteEditor();show("route","Laufweg anpassen")};$("#saveRouteBtn").onclick=()=>{state.routes[state.routeEditStore]=[...editing];state.routeEditStore="";save();render();show("plan","Einkauf planen")};$("#useLearningBtn").onclick=()=>{if(!state.routeEditStore)return;delete state.routes[state.routeEditStore];editing=[...learnedRoute(state.routeEditStore)];save();renderRouteEditor()};$("#storeSearchBtn").onclick=searchStores;$("#storeSearchInput").onkeydown=e=>{if(e.key==="Enter")searchStores()};const pc=$("#priceCompareToggle");pc.checked=state.settings.priceComparison;pc.onchange=()=>{state.settings.priceComparison=pc.checked;save();render()};$("#resetCategoriesBtn").onclick=()=>{if(!state.store)return;const cur=[...route(state.store)],missing=defaultRoute(state.store).filter(c=>!cur.includes(c));state.hiddenCategories[state.store]=[];state.routes[state.store]=[...cur,...missing];save();render();alert("Fehlende Kategorien wurden unten angehängt.")};$("#resetLearningBtn").onclick=()=>{if(confirm("Automatisch gelernte Laufwege zurücksetzen?")){state.learning={};save();render()}};$("#exportBtn").onclick=()=>{const blob=new Blob([JSON.stringify({version:34,data:state},null,2)],{type:"application/json"}),a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="rethink-einkauf-backup.json";a.click();URL.revokeObjectURL(a.href)};$("#importInput").onchange=async e=>{const f=e.target.files[0];if(!f)return;try{const b=JSON.parse(await f.text());if(!b?.data)throw 0;state=migrate(b.data);save();render();alert("Backup erfolgreich wiederhergestellt.")}catch(x){alert("Backup konnte nicht gelesen werden.")}finally{e.target.value=""}}}
async function updates(){if(!("serviceWorker"in navigator))return;try{const r=await navigator.serviceWorker.register("./sw.js");if(r.waiting){pendingServiceWorker=r.waiting;$("#updateBanner").hidden=false}r.onupdatefound=()=>{const w=r.installing;w.onstatechange=()=>{if(w.state==="installed"&&navigator.serviceWorker.controller){pendingServiceWorker=w;$("#updateBanner").hidden=false}}};$("#updateNowBtn").onclick=()=>pendingServiceWorker?.postMessage({type:"SKIP_WAITING"});navigator.serviceWorker.oncontrollerchange=()=>location.reload()}catch(e){}}wire();render();updates();scheduleOffers();