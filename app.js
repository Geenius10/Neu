const STORES=[{"id": "edeka-center-otto", "group": "EDEKA", "name": "E center Schneidermarkt", "address": "Otto-Hahn-Straße 1, 95447 Bayreuth", "retailer": "edeka-center"}, {"id": "edeka-gravenreuth", "group": "EDEKA", "name": "EDEKA Schneidermarkt", "address": "Gravenreuther Straße 19, 95445 Bayreuth", "retailer": "edeka"}, {"id": "edeka-meran", "group": "EDEKA", "name": "EDEKA Schneidermarkt", "address": "Meranierring 2, 95445 Bayreuth", "retailer": "edeka"}, {"id": "edeka-pensel", "group": "EDEKA", "name": "EDEKA Pensel", "address": "Königsallee 45, 95448 Bayreuth", "retailer": "edeka"}, {"id": "edeka-center-riedinger", "group": "EDEKA", "name": "E center Schneidermarkt", "address": "Riedingerstraße 21, 95448 Bayreuth", "retailer": "edeka-center"}, {"id": "nahgut-troeger", "group": "EDEKA", "name": "nah & gut Tröger", "address": "Eichendorffring 1, 95447 Bayreuth", "retailer": "edeka-nah-gut"}, {"id": "rewe-justus", "group": "REWE", "name": "REWE", "address": "Justus-Liebig-Str. 8, 95447 Bayreuth", "retailer": "rewe"}, {"id": "rewe-kanal", "group": "REWE", "name": "REWE", "address": "Kanalstr. 15–17, 95444 Bayreuth", "retailer": "rewe"}, {"id": "rewe-friedrich", "group": "REWE", "name": "REWE", "address": "Friedrichstr. 53, 95444 Bayreuth", "retailer": "rewe"}, {"id": "rewe-spinnerei", "group": "REWE", "name": "REWE", "address": "Spinnereistr. 7–13, 95445 Bayreuth", "retailer": "rewe"}, {"id": "rewe-bamberger", "group": "REWE", "name": "REWE", "address": "Bamberger Str. 32, 95445 Bayreuth", "retailer": "rewe"}, {"id": "nahkauf-friedrich-ebert", "group": "REWE", "name": "nahkauf", "address": "Friedrich-Ebert-Str. 14, 95448 Bayreuth", "retailer": "nahkauf"}, {"id": "nahkauf-carl-burger", "group": "REWE", "name": "nahkauf", "address": "Carl-Burger-Str. 8, 95445 Bayreuth", "retailer": "nahkauf"}, {"id": "nahkauf-preuschwitz", "group": "REWE", "name": "nahkauf", "address": "Preuschwitzer Str. 23, 95445 Bayreuth", "retailer": "nahkauf"}, {"id": "rewe-express-hindenburg", "group": "REWE", "name": "REWE express", "address": "Hindenburgstraße 4, 95445 Bayreuth", "retailer": "rewe"}, {"id": "lidl-adolf", "group": "Lidl", "name": "Lidl", "address": "Adolf-Wächter-Str. 1, 95447 Bayreuth", "retailer": "lidl"}, {"id": "lidl-meran", "group": "Lidl", "name": "Lidl", "address": "Meranierring 49, 95445 Bayreuth", "retailer": "lidl"}, {"id": "lidl-nuernberg", "group": "Lidl", "name": "Lidl", "address": "Nürnberger Str. 3a, 95448 Bayreuth", "retailer": "lidl"}, {"id": "lidl-riedinger", "group": "Lidl", "name": "Lidl", "address": "Riedingerstraße 21, 95448 Bayreuth", "retailer": "lidl"}, {"id": "aldi-tunnel", "group": "ALDI SÜD", "name": "ALDI SÜD", "address": "Tunnelstraße 11, 95448 Bayreuth", "retailer": "aldi-sued"}, {"id": "aldi-otto", "group": "ALDI SÜD", "name": "ALDI SÜD", "address": "Otto-Hahn-Straße 1a, 95447 Bayreuth", "retailer": "aldi-sued"}, {"id": "aldi-himmelkron", "group": "ALDI SÜD", "name": "ALDI SÜD", "address": "Himmelkronstraße 1, 95445 Bayreuth", "retailer": "aldi-sued"}, {"id": "aldi-theodor", "group": "ALDI SÜD", "name": "ALDI SÜD", "address": "Theodor-Schmidt-Straße 12, 95448 Bayreuth", "retailer": "aldi-sued"}, {"id": "aldi-nuernberg", "group": "ALDI SÜD", "name": "ALDI SÜD", "address": "Nürnberger Str. 96, 95448 Bayreuth", "retailer": "aldi-sued"}, {"id": "netto-leuschner", "group": "Netto", "name": "Netto Marken-Discount", "address": "Leuschnerstraße 84, 95447 Bayreuth", "retailer": "netto-marken-discount"}, {"id": "netto-koenigsallee", "group": "Netto", "name": "Netto Marken-Discount", "address": "Königsallee 47, 95448 Bayreuth", "retailer": "netto-marken-discount"}, {"id": "netto-bamberger", "group": "Netto", "name": "Netto Marken-Discount", "address": "Bamberger Str. 38, 95445 Bayreuth", "retailer": "netto-marken-discount"}, {"id": "netto-spinnerei", "group": "Netto", "name": "Netto Marken-Discount", "address": "Spinnereistraße 7, 95445 Bayreuth", "retailer": "netto-marken-discount"}, {"id": "netto-richard", "group": "Netto", "name": "Netto Marken-Discount", "address": "Richard-Wagner-Straße 17, 95444 Bayreuth", "retailer": "netto-marken-discount"}, {"id": "netto-nuernberg", "group": "Netto", "name": "Netto Marken-Discount", "address": "Nürnberger Str. 37, 95447 Bayreuth", "retailer": "netto-marken-discount"}, {"id": "norma-kanal", "group": "NORMA", "name": "NORMA", "address": "Kanalstraße 17, 95444 Bayreuth", "retailer": "norma"}, {"id": "norma-spitzweg", "group": "NORMA", "name": "NORMA", "address": "Spitzwegstraße 59, 95447 Bayreuth", "retailer": "norma"}, {"id": "norma-bauhof", "group": "NORMA", "name": "NORMA", "address": "Am Bauhof 4, 95445 Bayreuth", "retailer": "norma"}, {"id": "norma-kemnather", "group": "NORMA", "name": "NORMA", "address": "Kemnather Str. 29, 95448 Bayreuth", "retailer": "norma"}, {"id": "kaufland-weiher", "group": "Kaufland", "name": "Kaufland Bayreuth", "address": "Weiherstraße 27, 95448 Bayreuth", "retailer": "kaufland"}, {"id": "sultan-weiher", "group": "Weitere", "name": "sultan Markt Bayreuth", "address": "Weiherstraße 1, 95448 Bayreuth", "retailer": null}, {"id": "fruchtgarten", "group": "Weitere", "name": "Fruchtgarten Bayreuth GmbH", "address": "Ritter-von-Eitzenberger-Straße 9, 95448 Bayreuth", "retailer": null}];
const BASE_ROUTE=["Aktionsware / Non-Food", "Baby & Familie", "Backen", "Backwaren", "Drogerie & Körperpflege", "Essig & Öl", "Frischetheke Fleisch & Wurst", "Frischetheke Käse & Feinkost", "Getränke alkoholfrei", "Getränke alkoholisch", "Gewürze", "Haushalt & Reinigung", "Kasse / Impulsware", "Kühlung Convenience", "Kühlung Milchprodukte", "Obst & Gemüse", "Sonstiges", "Süßwaren & Snacks", "Tabak & Raucherbedarf", "Tiefkühlung", "Tiernahrung", "Vorrat Frühstück & Brotaufstrich", "Vorrat Konserven & Saucen", "Vorrat Nudeln, Reis & Hülsenfrüchte", "Zeitschriften & Presse"];
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
const STORAGE_KEY="rethink-einkauf-v29";
const $=s=>document.querySelector(s);

function normalizeCategoryText(s){
  return String(s||"").toLowerCase()
    .replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/ß/g,"ss")
    .replace(/[^a-z0-9]+/g," ").trim();
}

function infer(name){
  const text=normalizeCategoryText(name);
  let best="Sonstiges",score=0;
  for(const [category,words] of Object.entries(CATEGORY_KEYWORDS)){
    let local=0;
    for(const raw of words){
      const kw=normalizeCategoryText(raw);
      if(!kw)continue;
      if(text===kw)local+=100;
      else if(text.includes(kw))local+=20+kw.length;
      else if(text.split(" ").some(w=>w.startsWith(kw)||kw.startsWith(w)))local+=8;
    }
    if(local>score){score=local;best=category;}
  }
  return best;
}

function emptyState(){
  return {
    items:[],
    routes:{},
    hiddenCategories:{},
    store:STORES[0]?.id||"",
    compareStore:"",
    offers:{},
    compareOffers:{},
    prices:{},
    settings:{priceComparison:false},
    shopStage:1,
    routeEditStore:""
  };
}

function migrateState(x){
  const s={...emptyState(),...(x||{})};
  s.items=Array.isArray(s.items)?s.items:[];
  s.routes=s.routes&&typeof s.routes==="object"?s.routes:{};
  s.hiddenCategories=s.hiddenCategories&&typeof s.hiddenCategories==="object"?s.hiddenCategories:{};
  s.offers=s.offers&&typeof s.offers==="object"?s.offers:{};
  s.compareOffers=s.compareOffers&&typeof s.compareOffers==="object"?s.compareOffers:{};
  s.prices=s.prices&&typeof s.prices==="object"?s.prices:{};
  s.settings={priceComparison:false,...(s.settings||{})};
  s.shopStage=[1,2].includes(s.shopStage)?s.shopStage:1;
  s.routeEditStore="";
  for(const item of s.items){
    item.mode=item.mode==="recurring"?"recurring":"once";
    item.checked=!!item.checked;
    item.cat=item.cat||infer(item.name);
  }
  return s;
}

function load(){
  const keys=[STORAGE_KEY,"rethink-einkauf-v27","rethink-einkauf-v26","rethink-einkauf-v25","rethink-einkauf-v24","rethink-einkauf-v23","rethink-einkauf-v22","rethink-einkauf-v21"];
  for(const key of keys){
    try{
      const raw=localStorage.getItem(key);
      if(raw){
        const s=migrateState(JSON.parse(raw));
        if(key!==STORAGE_KEY)localStorage.setItem(STORAGE_KEY,JSON.stringify(s));
        return s;
      }
    }catch(e){}
  }
  return emptyState();
}

let state=load();
let editing=[];
let offerTimer=null;
function save(){localStorage.setItem(STORAGE_KEY,JSON.stringify(state));}

function currentStore(){return STORES.find(s=>s.id===state.store)||STORES[0]||null;}
function compareStore(){return STORES.find(s=>s.id===state.compareStore)||null;}
function hiddenForStore(storeId){return new Set(state.hiddenCategories?.[storeId]||[]);}
function route(storeId=state.store){
  const base=state.routes[storeId]||BASE_ROUTE;
  const hidden=hiddenForStore(storeId);
  return base.filter(c=>!hidden.has(c));
}
function esc(s=""){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[c]));}
function show(screen,title){
  document.querySelectorAll(".screen").forEach(x=>x.classList.remove("active"));
  $("#"+screen+"Screen")?.classList.add("active");
  if($("#screenTitle"))$("#screenTitle").textContent=title;
  window.scrollTo({top:0,behavior:"smooth"});
}
function offersFor(item){return state.offers?.[item.id]||[];}
function compareOffersFor(item){return state.compareOffers?.[item.id]||[];}
function euro(v){const n=parseFloat(String(v||"").replace("€","").replace(",","."));return Number.isFinite(n)?n:null;}
function priceKey(storeId,item){return storeId+"::"+item.name.trim().toLowerCase();}
function knownPrice(storeId,item){return state.prices?.[priceKey(storeId,item)]||null;}
function cheapest(arr){return (arr||[]).map(o=>({...o,n:euro(o.price)})).filter(o=>o.n!==null).sort((a,b)=>a.n-b.n)[0]||null;}
function bestPrice(storeId,item,arr){
  const offer=cheapest(arr),known=knownPrice(storeId,item),normal=known?euro(known.price):null;
  if(offer&&(normal===null||offer.n<normal))return {label:offer.price,type:"Angebot"};
  if(normal!==null)return {label:normal.toFixed(2).replace(".",",")+" €",type:"zuletzt bekannt"};
  return offer?{label:offer.price,type:"Angebot"}:null;
}

function priceComparisonHtml(item){
  if(!state.settings.priceComparison)return "";
  const row=(store,arr)=>{
    const p=bestPrice(store.id,item,arr),known=knownPrice(store.id,item);
    return `<div class="price-store"><div><b>${esc(store.name)}</b><small>${esc(store.address)}</small></div><div class="price-value">${p?`<strong>${esc(p.label)}</strong><span>${esc(p.type)}</span>`:`<span class="unknown">Preis unbekannt</span>`}</div><button class="price-edit" data-price-store="${store.id}" data-price-item="${item.id}">${known?"✎":"+ €"}</button></div>`;
  };
  let rows=currentStore()?row(currentStore(),offersFor(item)):"";
  const second=compareStore();
  if(second)rows+=row(second,compareOffersFor(item));
  return rows?`<div class="price-compare">${rows}</div>`:"";
}

function offerRows(item){
  const offers=offersFor(item);
  if(!offers.length)return "";
  const id=`offers-${item.id}`;
  const rows=offers.map((o,i)=>`<a class="offer-row" href="${esc(o.source_url||"#")}" target="_blank" rel="noopener"><div class="offer-number">${i+1}</div><div class="offer-detail"><b>${esc(o.title||item.name)}</b>${o.brand?`<span>${esc(o.brand)}</span>`:""}${o.valid?`<small>${esc(o.valid)}</small>`:""}</div><strong class="offer-price">${esc(o.price||"")}</strong></a>`).join("");
  return `<div class="offer-toggle-row"><button class="offer-arrow" data-toggle-offers="${id}" aria-label="Angebote ein-/ausklappen">⌄</button><span>${offers.length} ${offers.length===1?"Angebot":"Angebote"}</span></div><div id="${id}" class="offer-list more-offers" hidden>${rows}</div>`;
}

function openCategoryPicker(item){
  const overlay=document.createElement("div");
  overlay.className="category-picker-overlay";
  const cats=[...BASE_ROUTE].sort((a,b)=>a.localeCompare(b,"de",{sensitivity:"base"}));
  overlay.innerHTML=`<div class="category-picker-sheet"><div class="category-picker-head"><b>Kategorie ändern</b><button class="category-picker-close">×</button></div><div class="category-picker-list">${cats.map(c=>`<button class="category-choice ${c===item.cat?"selected":""}" data-choice="${esc(c)}">${esc(c)}</button>`).join("")}</div></div>`;
  document.body.appendChild(overlay);
  const close=()=>overlay.remove();
  overlay.addEventListener("click",e=>{if(e.target===overlay)close();});
  overlay.querySelector(".category-picker-close")?.addEventListener("click",close);
  overlay.querySelectorAll("[data-choice]").forEach(b=>b.addEventListener("click",()=>{item.cat=b.dataset.choice;save();close();render();}));
}

function itemNode(item,shopping=false){
  const el=document.createElement("div");
  el.className="item"+(item.checked?" checked":"")+(offersFor(item).length?" offer":"");
  el.innerHTML=`<input class="check" data-id="${item.id}" type="checkbox" ${item.checked?"checked":""}><div><div class="item-name">${esc(item.name)}</div><div class="meta"><button class="tag ${item.mode}" data-mode="${item.id}">${item.mode==="recurring"?"dauerhaft":"einmalig"}</button><button class="tag category-tag" data-category-id="${item.id}">${esc(item.cat)}</button></div>${offerRows(item)}${priceComparisonHtml(item)}</div>${shopping?"":`<button class="delete" data-delete="${item.id}">×</button>`}`;
  return el;
}

function bindList(box){
  box.querySelectorAll(".check").forEach(b=>b.addEventListener("change",e=>{
    const item=state.items.find(i=>i.id===e.target.dataset.id);if(!item)return;
    item.checked=e.target.checked;save();render();
  }));
  box.querySelectorAll("[data-mode]").forEach(b=>b.addEventListener("click",()=>{
    const item=state.items.find(i=>i.id===b.dataset.mode);if(!item)return;
    item.mode=item.mode==="once"?"recurring":"once";save();render();
  }));
  box.querySelectorAll("[data-category-id]").forEach(b=>b.addEventListener("click",()=>{
    const item=state.items.find(i=>i.id===b.dataset.categoryId);if(item)openCategoryPicker(item);
  }));
  box.querySelectorAll("[data-delete]").forEach(b=>b.addEventListener("click",()=>{
    state.items=state.items.filter(i=>i.id!==b.dataset.delete);delete state.offers[b.dataset.delete];delete state.compareOffers[b.dataset.delete];save();render();scheduleOffers();
  }));
  box.querySelectorAll("[data-toggle-offers]").forEach(b=>b.addEventListener("click",()=>{
    const target=document.getElementById(b.dataset.toggleOffers);if(!target)return;
    const open=target.hidden;target.hidden=!open;b.classList.toggle("open",open);
  }));
  box.querySelectorAll("[data-price-store]").forEach(b=>b.addEventListener("click",()=>{
    if(!state.settings.priceComparison)return;
    const item=state.items.find(i=>i.id===b.dataset.priceItem);if(!item)return;
    const old=knownPrice(b.dataset.priceStore,item);
    const raw=prompt("Preis für "+item.name+" merken (z. B. 1,29)",old?String(old.price).replace(".",","):"");
    if(raw===null)return;
    const n=euro(raw);if(n===null||n<0){alert("Bitte gültigen Preis eingeben.");return;}
    state.prices[priceKey(b.dataset.priceStore,item)]={price:n,date:new Date().toISOString().slice(0,10)};save();render();
  }));
}

function renderList(){
  const box=$("#items");if(!box)return;
  box.innerHTML="";
  [...state.items].sort((a,b)=>a.name.localeCompare(b.name,"de",{sensitivity:"base"})).forEach(i=>box.append(itemNode(i,false)));
  bindList(box);
  if($("#emptyState"))$("#emptyState").style.display=state.items.length?"none":"grid";
}

function activeShoppingStoreId(){return state.shopStage===2&&state.compareStore?state.compareStore:state.store;}
function shoppingItems(){
  const o=route(activeShoppingStoreId());
  return state.items.filter(i=>!i.checked).sort((a,b)=>{
    const ai=o.indexOf(a.cat),bi=o.indexOf(b.cat),ca=ai<0?999:ai,cb=bi<0?999:bi;
    return ca!==cb?ca-cb:a.name.localeCompare(b.name,"de",{sensitivity:"base"});
  });
}
function renderShop(){
  const box=$("#shopItems");if(!box)return;
  const items=shoppingItems();box.innerHTML="";items.forEach(i=>box.append(itemNode(i,true)));bindList(box);
  const stage2=state.shopStage===2&&compareStore(),store=stage2?compareStore():currentStore();
  if($("#progressText"))$("#progressText").textContent=items.length?`${items.length} noch offen`:"Alles erledigt";
  if($("#progressPct"))$("#progressPct").textContent="";
  if($("#progressBar"))$("#progressBar").style.width=items.length?"0%":"100%";
  if($("#shopStore")&&store)$("#shopStore").textContent=store.name+" · "+store.address;
  if($("#shopHeading"))$("#shopHeading").textContent=stage2?"Reste in der zweiten Filiale":"Dein Laufweg";
  if($("#shopStageHint")){$("#shopStageHint").hidden=!stage2;if(stage2)$("#shopStageHint").textContent="Nur offene Artikel aus der ersten Filiale werden angezeigt.";}
  if($("#finishBtn"))$("#finishBtn").textContent=(!stage2&&compareStore())?"Weiter zur zweiten Filiale →":"Einkauf abschließen ✓";
}

function renderStores(){
  const sel=$("#storeSelect"),cmp=$("#compareStoreSelect");if(!sel)return;
  if(!sel.dataset.ready){
    const groups=[...new Set(STORES.map(s=>s.group))];
    const opts=groups.map(g=>`<optgroup label="${esc(g)}">${STORES.filter(s=>s.group===g).map(s=>`<option value="${s.id}">${esc(s.name)} · ${esc(s.address)}</option>`).join("")}</optgroup>`).join("");
    sel.innerHTML=opts;if(cmp)cmp.innerHTML=`<option value="">Keine zweite Filiale</option>`+opts;sel.dataset.ready="1";
  }
  sel.value=state.store;if(cmp)cmp.value=state.compareStore||"";
  const main=currentStore(),second=compareStore();
  if($("#storeName")&&main)$("#storeName").textContent=main.name+" · "+main.address;
  if($("#routePreview"))$("#routePreview").innerHTML=route(state.store).map(x=>`<span>${esc(x)}</span>`).join("");
  if($("#compareRouteCard")){$("#compareRouteCard").hidden=!second;if(second){$("#compareStoreName").textContent=second.name+" · "+second.address;$("#compareRoutePreview").innerHTML=route(second.id).map(x=>`<span>${esc(x)}</span>`).join("");}}
  const matched=Object.values(state.offers).filter(a=>a?.length).length,total=Object.values(state.offers).reduce((n,a)=>n+(a?.length||0),0);
  if($("#offerSummary"))$("#offerSummary").textContent=main?.retailer?(matched?`${total} passende Angebote für ${matched} Artikel gefunden.`:"Aktuell keine passenden Angebote gefunden."):"Für diesen Markt ist keine automatische Angebotsquelle hinterlegt.";
}
function render(){renderList();renderShop();renderStores();}

function addItems(){
  const input=$("#itemInput"),raw=(input?.value||"").trim();if(!raw)return;
  raw.split(/,|;|\n/).map(x=>x.trim()).filter(Boolean).forEach(name=>state.items.push({id:crypto.randomUUID(),name:name.charAt(0).toUpperCase()+name.slice(1),cat:infer(name),mode:"once",checked:false}));
  input.value="";save();render();scheduleOffers();
}

function renderRouteEditor(){
  const box=$("#routeEditor");if(!box)return;
  box.innerHTML=editing.map((c,i)=>`<div class="route-row route-row-manage" draggable="true" data-route-index="${i}"><span class="drag-handle">☰</span><b>${esc(c)}</b><button class="hide-cat" data-hide="${esc(c)}">×</button></div>`).join("");
  let from=null;
  box.querySelectorAll("[data-route-index]").forEach(row=>{
    row.addEventListener("dragstart",()=>{from=Number(row.dataset.routeIndex);row.classList.add("dragging");});
    row.addEventListener("dragend",()=>{row.classList.remove("dragging");from=null;});
    row.addEventListener("dragover",e=>e.preventDefault());
    row.addEventListener("drop",e=>{e.preventDefault();const to=Number(row.dataset.routeIndex);if(from===null||from===to)return;const [m]=editing.splice(from,1);editing.splice(to,0,m);state.routes[state.routeEditStore||state.store]=[...editing];save();renderRouteEditor();render();});
  });
  box.querySelectorAll("[data-hide]").forEach(b=>b.addEventListener("click",()=>{const sid=state.routeEditStore||state.store;const h=new Set(state.hiddenCategories[sid]||[]);h.add(b.dataset.hide);state.hiddenCategories[sid]=[...h];editing=editing.filter(x=>x!==b.dataset.hide);state.routes[sid]=[...editing];save();renderRouteEditor();render();}));
}

function scheduleOffers(){clearTimeout(offerTimer);offerTimer=setTimeout(loadOffers,300);}
async function fetchStoreOffers(store){
  if(!store?.retailer||!state.items.length)return {};
  const r=await fetch("/api/match-offers",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({retailer:store.retailer,items:state.items.map(i=>({id:i.id,name:i.name}))})});
  if(!r.ok)throw new Error();
  return (await r.json()).matches||{};
}
async function loadOffers(){
  if(!state.items.length)return;
  if($("#syncState"))$("#syncState").textContent="Angebote werden aktualisiert …";
  try{
    const second=compareStore();
    const [a,b]=await Promise.all([fetchStoreOffers(currentStore()),second?fetchStoreOffers(second):Promise.resolve({})]);
    state.offers=a;state.compareOffers=b;save();if($("#syncState"))$("#syncState").textContent=second?"Beide Filialen aktualisiert":"Angebote aktualisiert";render();
  }catch(e){if($("#syncState"))$("#syncState").textContent="Online-Daten gerade nicht erreichbar · Liste funktioniert weiter";}
}

function wire(){
  $("#addBtn")?.addEventListener("click",addItems);
  $("#itemInput")?.addEventListener("keydown",e=>{if(e.key==="Enter"){e.preventDefault();addItems();}});
  $("#chooseStoreBtn")?.addEventListener("click",()=>show("store","Filiale wählen"));
  $("#storeSelect")?.addEventListener("change",()=>{state.store=$("#storeSelect").value;if(state.compareStore===state.store)state.compareStore="";state.offers={};state.compareOffers={};save();render();scheduleOffers();});
  $("#compareStoreSelect")?.addEventListener("change",()=>{const v=$("#compareStoreSelect").value;state.compareStore=v===state.store?"":v;state.compareOffers={};save();render();scheduleOffers();});
  $("#startBtn")?.addEventListener("click",()=>{if(!state.items.some(i=>!i.checked)){alert("Aktuell ist kein Produkt für den Einkauf markiert.");return;}state.shopStage=1;save();show("shop","Einkauf");render();scheduleOffers();});
  $("#finishBtn")?.addEventListener("click",()=>{if(state.shopStage===1&&compareStore()){state.items=state.items.filter(i=>!(i.mode==="once"&&i.checked));state.shopStage=2;save();render();window.scrollTo({top:0,behavior:"smooth"});return;}state.items=state.items.filter(i=>!(i.mode==="once"&&i.checked));state.offers={};state.compareOffers={};state.shopStage=1;save();render();show("list","Einkaufsliste");});
  $("#settingsBtn")?.addEventListener("click",()=>show("settings","Einstellungen"));
  document.querySelectorAll(".back").forEach(b=>b.addEventListener("click",()=>{const s=b.dataset.screen;show(s,s==="list"?"Einkaufsliste":s==="store"?"Filiale wählen":"RETHINK.einkauf");}));
  $("#editRouteBtn")?.addEventListener("click",()=>{state.routeEditStore=state.store;editing=[...route(state.store)];renderRouteEditor();show("route","Laufweg anpassen");});
  $("#editCompareRouteBtn")?.addEventListener("click",()=>{const s=compareStore();if(!s)return;state.routeEditStore=s.id;editing=[...route(s.id)];renderRouteEditor();show("route","Laufweg anpassen");});
  $("#saveRouteBtn")?.addEventListener("click",()=>{const sid=state.routeEditStore||state.store;state.routes[sid]=[...editing];state.routeEditStore="";save();render();show("store","Filiale wählen");});
  $("#resetCategoriesBtn")?.addEventListener("click",()=>{const current=[...(state.routes[state.store]||route(state.store))];const missing=BASE_ROUTE.filter(c=>!current.includes(c));state.hiddenCategories[state.store]=[];state.routes[state.store]=[...current,...missing];save();render();alert("Fehlende Kategorien wurden unten angehängt.");});
  const t=$("#priceCompareToggle");if(t){t.checked=!!state.settings.priceComparison;t.addEventListener("change",()=>{state.settings.priceComparison=t.checked;save();render();});}
  $("#exportBtn")?.addEventListener("click",()=>{const blob=new Blob([JSON.stringify({version:28,data:state},null,2)],{type:"application/json"}),a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="rethink-einkauf-backup.json";a.click();URL.revokeObjectURL(a.href);});
  $("#importInput")?.addEventListener("change",async e=>{const f=e.target.files[0];if(!f)return;try{const b=JSON.parse(await f.text());if(!b?.data)throw new Error();state=migrateState(b.data);save();render();scheduleOffers();alert("Backup erfolgreich wiederhergestellt.");}catch(err){alert("Backup konnte nicht gelesen werden.");}finally{e.target.value="";}});
}

wire();render();scheduleOffers();
