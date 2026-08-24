const STORES=[{"id": "edeka-center-otto", "group": "EDEKA", "name": "E center Schneidermarkt", "address": "Otto-Hahn-Straße 1, 95447 Bayreuth", "retailer": "edeka-center"}, {"id": "edeka-gravenreuth", "group": "EDEKA", "name": "EDEKA Schneidermarkt", "address": "Gravenreuther Straße 19, 95445 Bayreuth", "retailer": "edeka"}, {"id": "edeka-meran", "group": "EDEKA", "name": "EDEKA Schneidermarkt", "address": "Meranierring 2, 95445 Bayreuth", "retailer": "edeka"}, {"id": "edeka-pensel", "group": "EDEKA", "name": "EDEKA Pensel", "address": "Königsallee 45, 95448 Bayreuth", "retailer": "edeka"}, {"id": "edeka-center-riedinger", "group": "EDEKA", "name": "E center Schneidermarkt", "address": "Riedingerstraße 21, 95448 Bayreuth", "retailer": "edeka-center"}, {"id": "nahgut-troeger", "group": "EDEKA", "name": "nah & gut Tröger", "address": "Eichendorffring 1, 95447 Bayreuth", "retailer": "edeka-nah-gut"}, {"id": "rewe-justus", "group": "REWE", "name": "REWE", "address": "Justus-Liebig-Str. 8, 95447 Bayreuth", "retailer": "rewe"}, {"id": "rewe-kanal", "group": "REWE", "name": "REWE", "address": "Kanalstr. 15–17, 95444 Bayreuth", "retailer": "rewe"}, {"id": "rewe-friedrich", "group": "REWE", "name": "REWE", "address": "Friedrichstr. 53, 95444 Bayreuth", "retailer": "rewe"}, {"id": "rewe-spinnerei", "group": "REWE", "name": "REWE", "address": "Spinnereistr. 7–13, 95445 Bayreuth", "retailer": "rewe"}, {"id": "rewe-bamberger", "group": "REWE", "name": "REWE", "address": "Bamberger Str. 32, 95445 Bayreuth", "retailer": "rewe"}, {"id": "nahkauf-friedrich-ebert", "group": "REWE", "name": "nahkauf", "address": "Friedrich-Ebert-Str. 14, 95448 Bayreuth", "retailer": "nahkauf"}, {"id": "nahkauf-carl-burger", "group": "REWE", "name": "nahkauf", "address": "Carl-Burger-Str. 8, 95445 Bayreuth", "retailer": "nahkauf"}, {"id": "nahkauf-preuschwitz", "group": "REWE", "name": "nahkauf", "address": "Preuschwitzer Str. 23, 95445 Bayreuth", "retailer": "nahkauf"}, {"id": "rewe-express-hindenburg", "group": "REWE", "name": "REWE express", "address": "Hindenburgstraße 4, 95445 Bayreuth", "retailer": "rewe"}, {"id": "lidl-adolf", "group": "Lidl", "name": "Lidl", "address": "Adolf-Wächter-Str. 1, 95447 Bayreuth", "retailer": "lidl"}, {"id": "lidl-meran", "group": "Lidl", "name": "Lidl", "address": "Meranierring 49, 95445 Bayreuth", "retailer": "lidl"}, {"id": "lidl-nuernberg", "group": "Lidl", "name": "Lidl", "address": "Nürnberger Str. 3a, 95448 Bayreuth", "retailer": "lidl"}, {"id": "lidl-riedinger", "group": "Lidl", "name": "Lidl", "address": "Riedingerstraße 21, 95448 Bayreuth", "retailer": "lidl"}, {"id": "aldi-tunnel", "group": "ALDI SÜD", "name": "ALDI SÜD", "address": "Tunnelstraße 11, 95448 Bayreuth", "retailer": "aldi-sued"}, {"id": "aldi-otto", "group": "ALDI SÜD", "name": "ALDI SÜD", "address": "Otto-Hahn-Straße 1a, 95447 Bayreuth", "retailer": "aldi-sued"}, {"id": "aldi-himmelkron", "group": "ALDI SÜD", "name": "ALDI SÜD", "address": "Himmelkronstraße 1, 95445 Bayreuth", "retailer": "aldi-sued"}, {"id": "aldi-theodor", "group": "ALDI SÜD", "name": "ALDI SÜD", "address": "Theodor-Schmidt-Straße 12, 95448 Bayreuth", "retailer": "aldi-sued"}, {"id": "aldi-nuernberg", "group": "ALDI SÜD", "name": "ALDI SÜD", "address": "Nürnberger Str. 96, 95448 Bayreuth", "retailer": "aldi-sued"}, {"id": "netto-leuschner", "group": "Netto", "name": "Netto Marken-Discount", "address": "Leuschnerstraße 84, 95447 Bayreuth", "retailer": "netto-marken-discount"}, {"id": "netto-koenigsallee", "group": "Netto", "name": "Netto Marken-Discount", "address": "Königsallee 47, 95448 Bayreuth", "retailer": "netto-marken-discount"}, {"id": "netto-bamberger", "group": "Netto", "name": "Netto Marken-Discount", "address": "Bamberger Str. 38, 95445 Bayreuth", "retailer": "netto-marken-discount"}, {"id": "netto-spinnerei", "group": "Netto", "name": "Netto Marken-Discount", "address": "Spinnereistraße 7, 95445 Bayreuth", "retailer": "netto-marken-discount"}, {"id": "netto-richard", "group": "Netto", "name": "Netto Marken-Discount", "address": "Richard-Wagner-Straße 17, 95444 Bayreuth", "retailer": "netto-marken-discount"}, {"id": "netto-nuernberg", "group": "Netto", "name": "Netto Marken-Discount", "address": "Nürnberger Str. 37, 95447 Bayreuth", "retailer": "netto-marken-discount"}, {"id": "norma-kanal", "group": "NORMA", "name": "NORMA", "address": "Kanalstraße 17, 95444 Bayreuth", "retailer": "norma"}, {"id": "norma-spitzweg", "group": "NORMA", "name": "NORMA", "address": "Spitzwegstraße 59, 95447 Bayreuth", "retailer": "norma"}, {"id": "norma-bauhof", "group": "NORMA", "name": "NORMA", "address": "Am Bauhof 4, 95445 Bayreuth", "retailer": "norma"}, {"id": "norma-kemnather", "group": "NORMA", "name": "NORMA", "address": "Kemnather Str. 29, 95448 Bayreuth", "retailer": "norma"}, {"id": "kaufland-weiher", "group": "Kaufland", "name": "Kaufland Bayreuth", "address": "Weiherstraße 27, 95448 Bayreuth", "retailer": "kaufland"}, {"id": "sultan-weiher", "group": "Weitere", "name": "sultan Markt Bayreuth", "address": "Weiherstraße 1, 95448 Bayreuth", "retailer": null}, {"id": "fruchtgarten", "group": "Weitere", "name": "Fruchtgarten Bayreuth GmbH", "address": "Ritter-von-Eitzenberger-Straße 9, 95448 Bayreuth", "retailer": null}];
const BASE_ROUTE=["Obst & Gemüse","Backwaren","Frischetheke Fleisch & Wurst","Frischetheke Käse & Feinkost","Kühlung Milchprodukte","Kühlung Convenience","Vorrat Frühstück & Brotaufstrich","Vorrat Nudeln, Reis & Hülsenfrüchte","Vorrat Konserven & Saucen","Gewürze","Essig & Öl","Backen","Süßwaren & Snacks","Getränke alkoholfrei","Getränke alkoholisch","Tiefkühlung","Drogerie & Körperpflege","Haushalt & Reinigung","Tiernahrung","Baby & Familie","Zeitschriften & Presse","Tabak & Raucherbedarf","Aktionsware / Non-Food","Kasse / Impulsware","Sonstiges"];
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

function normalizeCategoryText(s){
  return String(s||"").toLowerCase()
    .replace(/ä/g,"ae").replace(/ö/g,"oe").replace(/ü/g,"ue").replace(/ß/g,"ss")
    .replace(/[^a-z0-9]+/g," ").trim();
}

const $=s=>document.querySelector(s);

function infer(name){
  const text=normalizeCategoryText(name);
  let best="Sonstiges",score=0;
  for(const [category,keywords] of Object.entries(CATEGORY_KEYWORDS)){
    let local=0;
    for(const kwRaw of keywords){
      const kw=normalizeCategoryText(kwRaw);
      if(!kw)continue;
      if(text===kw)local+=100;
      else if(text.includes(kw))local+=20+kw.length;
      else{
        const words=text.split(" ");
        if(words.some(w=>w.startsWith(kw)||kw.startsWith(w)))local+=8;
      }
    }
    if(local>score){score=local;best=category;}
  }
  return best;
}
function emptyState(){
  return {items:[],routes:{},hiddenCategories:{},store:STORES[0]?.id||"",compareStore:"",offers:{},compareOffers:{},prices:{},settings:{priceComparison:false}};
}
function load(){
  try{
    const x=JSON.parse(localStorage.getItem("rethink-einkauf-v24"));
    if(x?.items&&x?.routes){
      x.hiddenCategories=x.hiddenCategories||{};
      x.compareStore=x.compareStore||"";
      x.offers=x.offers||{};
      x.compareOffers=x.compareOffers||{};
      x.prices=x.prices||{};
      x.settings=x.settings||{priceComparison:false};
      return x;
    }
  }catch(e){}
  return emptyState();
}
let state=load();
let editing=[];
let offerTimer=null;

function save(){localStorage.setItem("rethink-einkauf-v24",JSON.stringify(state));}
function currentStore(){return STORES.find(s=>s.id===state.store)||STORES[0];}
function compareStore(){return STORES.find(s=>s.id===state.compareStore)||null;}
function hiddenForStore(){return new Set(state.hiddenCategories?.[state.store]||[]);}
function route(){
  const base=state.routes[state.store]||BASE_ROUTE;
  const hidden=hiddenForStore();
  return base.filter(c=>!hidden.has(c));
}
function esc(s=""){
  return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[c]));
}
function show(screen,title){
  document.querySelectorAll(".screen").forEach(x=>x.classList.remove("active"));
  const el=$("#"+screen+"Screen");
  if(el) el.classList.add("active");
  const t=$("#screenTitle"); if(t) t.textContent=title;
  window.scrollTo({top:0,behavior:"smooth"});
}
function sortedItems(){
  const o=route();
  return [...state.items].sort((a,b)=>{
    const ai=o.indexOf(a.cat),bi=o.indexOf(b.cat);
    return (ai<0?999:ai)-(bi<0?999:bi);
  });
}
function offersFor(item){return state.offers?.[item.id]||[];}
function compareOffersFor(item){return state.compareOffers?.[item.id]||[];}
function euro(v){const n=parseFloat(String(v||"").replace("€","").replace(",","."));return Number.isFinite(n)?n:null;}
function priceKey(s,i){return s+"::"+i.name.trim().toLowerCase();}
function knownPrice(s,i){return state.prices?.[priceKey(s,i)]||null;}
function cheapest(a){return (a||[]).map(x=>({...x,n:euro(x.price)})).filter(x=>x.n!==null).sort((a,b)=>a.n-b.n)[0]||null;}
function bestPrice(s,i,a){
  const o=cheapest(a),k=knownPrice(s,i),n=k?euro(k.price):null;
  if(o&&(n===null||o.n<n)) return {v:o.n,label:o.price,type:"Angebot"};
  if(n!==null) return {v:n,label:n.toFixed(2).replace(".",",")+" €",type:"zuletzt bekannt"};
  return o?{v:o.n,label:o.price,type:"Angebot"}:null;
}
function priceComparisonHtml(item){
  if(!state.settings?.priceComparison) return "";
  const row=(store,offers)=>{
    const current=bestPrice(store.id,item,offers),known=knownPrice(store.id,item);
    return `<div class="price-store"><div><b>${esc(store.name)}</b><small>${esc(store.address)}</small></div><div class="price-value">${current?`<strong>${esc(current.label)}</strong><span>${esc(current.type)}</span>`:`<span class="unknown">Preis unbekannt</span>`}</div><button class="price-edit" data-price-store="${store.id}" data-price-item="${item.id}">${known?"✎":"+ €"}</button></div>`;
  };
  let rows=row(currentStore(),offersFor(item));
  const second=compareStore();
  if(second) rows+=row(second,compareOffersFor(item));
  return `<div class="price-compare">${rows}</div>`;
}
function offerRows(item){
  const offers=offersFor(item);
  if(!offers.length) return "";
  const rows=offers.map((o,i)=>`<a class="offer-row" href="${esc(o.source_url||"#")}" target="_blank" rel="noopener"><div class="offer-number">${i+1}</div><div class="offer-detail"><b>${esc(o.title||item.name)}</b>${o.brand?`<span>${esc(o.brand)}</span>`:""}${o.valid?`<small>${esc(o.valid)}</small>`:""}</div><strong class="offer-price">${esc(o.price||"")}</strong></a>`).join("");
  const id=`offers-${item.id}`;
  return `<div class="offer-toggle-row"><button class="offer-arrow" data-toggle-offers="${id}" aria-label="Angebote ein-/ausklappen">⌄</button><span>${offers.length} ${offers.length===1?"Angebot":"Angebote"}</span></div><div id="${id}" class="offer-list more-offers" hidden>${rows}</div>`;
}
function itemNode(item,shopping=false){
  const el=document.createElement("div");
  el.className="item"+(item.checked?" checked":"")+(offersFor(item).length?" offer":"");
  el.innerHTML=`<input class="check" data-id="${item.id}" type="checkbox" ${item.checked?"checked":""}><div><div class="item-name">${esc(item.name)}</div><div class="meta"><button class="tag ${item.mode}" data-mode="${item.id}">${item.mode==="recurring"?"dauerhaft":"einmalig"}</button><button class="tag category-tag" data-category-id="${item.id}">${esc(item.cat)}</button></div>${offerRows(item)}${priceComparisonHtml(item)}</div>${shopping?"":`<button class="delete" data-delete="${item.id}" aria-label="Löschen">×</button>`}`;
  return el;
}
function openCategoryPicker(item){
  let overlay=document.createElement("div");
  overlay.className="category-picker-overlay";
  overlay.innerHTML=`<div class="category-picker-sheet">
    <div class="category-picker-head"><b>Kategorie ändern</b><button class="category-picker-close" aria-label="Schließen">×</button></div>
    <div class="category-picker-list">
      ${BASE_ROUTE.map(c=>`<button class="category-choice ${c===item.cat?"selected":""}" data-choice="${esc(c)}">${esc(c)}</button>`).join("")}
    </div>
  </div>`;
  document.body.appendChild(overlay);
  const close=()=>overlay.remove();
  overlay.addEventListener("click",e=>{if(e.target===overlay)close()});
  overlay.querySelector(".category-picker-close").onclick=close;
  overlay.querySelectorAll("[data-choice]").forEach(b=>b.onclick=()=>{
    item.cat=b.dataset.choice;
    save();
    close();
    render();
  });
}
function bindList(box){
  box.querySelectorAll(".check").forEach(b=>b.addEventListener("change",e=>{
    const x=state.items.find(i=>i.id===e.target.dataset.id); if(!x)return;
    x.checked=e.target.checked; save(); render();
  }));
  box.querySelectorAll("[data-category-id]").forEach(btn=>btn.addEventListener("click",()=>{
    const item=state.items.find(i=>i.id===btn.dataset.categoryId); if(!item)return;
    openCategoryPicker(item);
  }));
  box.querySelectorAll("[data-mode]").forEach(b=>b.addEventListener("click",()=>{
    const x=state.items.find(i=>i.id===b.dataset.mode); if(!x)return;
    x.mode=x.mode==="once"?"recurring":"once"; save(); render();
  }));
  box.querySelectorAll("[data-delete]").forEach(b=>b.addEventListener("click",()=>{
    state.items=state.items.filter(i=>i.id!==b.dataset.delete);
    delete state.offers[b.dataset.delete]; delete state.compareOffers[b.dataset.delete];
    save(); render(); scheduleOffers();
  }));
  box.querySelectorAll("[data-toggle-offers]").forEach(b=>b.addEventListener("click",()=>{
    const t=box.querySelector("#"+CSS.escape(b.dataset.toggleOffers)); if(!t)return;
    const open=t.hidden; t.hidden=!open; b.classList.toggle("open",open);
  }));
  box.querySelectorAll("[data-price-store]").forEach(b=>b.addEventListener("click",()=>{
    if(!state.settings?.priceComparison)return;
    const item=state.items.find(i=>i.id===b.dataset.priceItem); if(!item)return;
    const old=knownPrice(b.dataset.priceStore,item);
    const raw=prompt("Preis für "+item.name+" merken (z. B. 1,29)",old?String(old.price).replace(".",","):"");
    if(raw===null)return;
    const n=euro(raw); if(n===null||n<0){alert("Bitte gültigen Preis eingeben.");return;}
    state.prices[priceKey(b.dataset.priceStore,item)]={price:n,date:new Date().toISOString().slice(0,10)};
    save(); render();
  }));
}
function renderList(){
  const box=$("#items"); if(!box)return;
  box.innerHTML=""; state.items.forEach(x=>box.append(itemNode(x,false))); bindList(box);
  const empty=$("#emptyState"); if(empty) empty.style.display=state.items.length?"none":"grid";
}
function renderShop(){
  const box=$("#shopItems"); if(!box)return;
  box.innerHTML=""; sortedItems().forEach(x=>box.append(itemNode(x,true))); bindList(box);
  const done=state.items.filter(x=>x.checked).length,total=state.items.length,pct=total?Math.round(done/total*100):0;
  if($("#progressText"))$("#progressText").textContent=`${done} von ${total} erledigt`;
  if($("#progressPct"))$("#progressPct").textContent=pct+"%";
  if($("#progressBar"))$("#progressBar").style.width=pct+"%";
  if($("#shopStore")&&currentStore())$("#shopStore").textContent=currentStore().name+" · "+currentStore().address;
}
function renderStores(){
  const sel=$("#storeSelect"),cmp=$("#compareStoreSelect");
  if(!sel)return;
  if(!sel.dataset.ready){
    const groups=[...new Set(STORES.map(s=>s.group))];
    const opts=groups.map(g=>`<optgroup label="${esc(g)}">${STORES.filter(s=>s.group===g).map(s=>`<option value="${s.id}">${esc(s.name)} · ${esc(s.address)}</option>`).join("")}</optgroup>`).join("");
    sel.innerHTML=opts;
    if(cmp)cmp.innerHTML=`<option value="">Keine zweite Filiale</option>`+opts;
    sel.dataset.ready="1";
  }
  sel.value=state.store;
  if(cmp)cmp.value=state.compareStore||"";
  if($("#storeName")&&currentStore())$("#storeName").textContent=currentStore().name+" · "+currentStore().address;
  if($("#routePreview"))$("#routePreview").innerHTML=route().map(x=>`<span>${esc(x)}</span>`).join("");
  const matched=Object.values(state.offers||{}).filter(a=>a?.length).length;
  const total=Object.values(state.offers||{}).reduce((n,a)=>n+(a?.length||0),0);
  if($("#offerSummary"))$("#offerSummary").textContent=currentStore()?.retailer?(matched?`${total} passende Angebote für ${matched} Artikel gefunden.`:"Aktuell keine passenden Angebote gefunden."):"Für diesen Markt ist keine automatische Angebotsquelle hinterlegt.";
}
function render(){renderList();renderShop();renderStores();}
function addItems(){
  const input=$("#itemInput"); const raw=(input?.value||"").trim(); if(!raw)return;
  raw.split(/,|;|\n/).map(x=>x.trim()).filter(Boolean).forEach(name=>state.items.push({id:crypto.randomUUID(),name:name.charAt(0).toUpperCase()+name.slice(1),cat:infer(name),mode:"once",checked:false}));
  input.value=""; save(); render(); scheduleOffers();
}
function renderRouteEditor(){
  const box=$("#routeEditor"); if(!box)return;
  box.innerHTML=editing.map((c,i)=>`<div class="route-row route-row-manage"><b>${esc(c)}</b><button data-up="${i}">↑</button><button data-down="${i}">↓</button><button class="hide-cat" data-hide="${esc(c)}">×</button></div>`).join("");
  box.querySelectorAll("[data-up]").forEach(b=>b.onclick=()=>move(+b.dataset.up,-1));
  box.querySelectorAll("[data-down]").forEach(b=>b.onclick=()=>move(+b.dataset.down,1));
  box.querySelectorAll("[data-hide]").forEach(b=>b.onclick=()=>{
    const cat=b.dataset.hide;
    const h=new Set(state.hiddenCategories[state.store]||[]); h.add(cat); state.hiddenCategories[state.store]=[...h];
    editing=editing.filter(x=>x!==cat); state.routes[state.store]=[...editing]; save(); renderRouteEditor(); render();
  });
}
function move(i,d){const j=i+d;if(j<0||j>=editing.length)return;[editing[i],editing[j]]=[editing[j],editing[i]];renderRouteEditor();}
function scheduleOffers(){clearTimeout(offerTimer);offerTimer=setTimeout(loadOffers,300);}
async function fetchStoreOffers(store){
  if(!store?.retailer||!state.items.length)return {};
  const r=await fetch("/api/match-offers",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({retailer:store.retailer,items:state.items.map(x=>({id:x.id,name:x.name}))})});
  if(!r.ok)throw new Error();
  return (await r.json()).matches||{};
}
async function loadOffers(){
  if(!state.items.length)return;
  const sync=$("#syncState"); if(sync)sync.textContent="Angebote werden aktualisiert …";
  try{
    const second=compareStore();
    const [a,b]=await Promise.all([fetchStoreOffers(currentStore()),second?fetchStoreOffers(second):Promise.resolve({})]);
    state.offers=a; state.compareOffers=b; save();
    if(sync)sync.textContent=second?"Beide Filialen aktualisiert":"Angebote aktualisiert";
    render();
  }catch(e){if(sync)sync.textContent="Online-Daten gerade nicht erreichbar · Liste funktioniert weiter";}
}

function wire(){
  $("#addBtn")?.addEventListener("click",addItems);
  $("#itemInput")?.addEventListener("keydown",e=>{if(e.key==="Enter"){e.preventDefault();addItems();}});
  $("#chooseStoreBtn")?.addEventListener("click",()=>show("store","Filiale wählen"));
  $("#storeSelect")?.addEventListener("change",()=>{state.store=$("#storeSelect").value;if(state.compareStore===state.store)state.compareStore="";state.offers={};state.compareOffers={};save();render();scheduleOffers();});
  $("#compareStoreSelect")?.addEventListener("change",()=>{state.compareStore=$("#compareStoreSelect").value===state.store?"":$("#compareStoreSelect").value;state.compareOffers={};save();render();scheduleOffers();});
  $("#startBtn")?.addEventListener("click",()=>{if(!state.items.length){alert("Füge zuerst mindestens einen Artikel hinzu.");return;}show("shop","Einkauf");scheduleOffers();});
  $("#finishBtn")?.addEventListener("click",()=>{state.items=state.items.filter(x=>!(x.mode==="once"&&x.checked));state.items.forEach(x=>{if(x.mode==="recurring")x.checked=false;});state.offers={};state.compareOffers={};save();render();show("list","Einkaufsliste");});
  $("#settingsBtn")?.addEventListener("click",()=>show("settings","Einstellungen"));
  document.querySelectorAll(".back").forEach(b=>b.addEventListener("click",()=>{const s=b.dataset.screen;show(s,s==="list"?"Einkaufsliste":s==="store"?"Filiale wählen":"RETHINK.einkauf");}));
  $("#editRouteBtn")?.addEventListener("click",()=>{editing=[...route()];renderRouteEditor();show("route","Laufweg anpassen");});
  $("#saveRouteBtn")?.addEventListener("click",()=>{state.routes[state.store]=[...editing];save();render();show("store","Filiale wählen");});
  $("#resetCategoriesBtn")?.addEventListener("click",()=>{state.hiddenCategories[state.store]=[];state.routes[state.store]=[...BASE_ROUTE];editing=[...BASE_ROUTE];save();render();alert("Kategorien wurden zurückgesetzt.");});
  const toggle=$("#priceCompareToggle"); if(toggle){toggle.checked=!!state.settings?.priceComparison;toggle.addEventListener("change",()=>{state.settings.priceComparison=toggle.checked;save();render();});}
  $("#exportBtn")?.addEventListener("click",()=>{const blob=new Blob([JSON.stringify({version:21,data:state},null,2)],{type:"application/json"}),a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="rethink-einkauf-backup.json";a.click();URL.revokeObjectURL(a.href);});
  $("#importInput")?.addEventListener("change",async e=>{const f=e.target.files[0];if(!f)return;try{const b=JSON.parse(await f.text());if(!b.data?.items||!b.data?.routes)throw 0;state=b.data;save();render();scheduleOffers();alert("Backup wiederhergestellt.");}catch(_){alert("Backup konnte nicht gelesen werden.");}e.target.value="";});
}

function migrateSplitCategories(){
  let changed=false;
  for(const item of state.items){
    if(item.cat==="Gewürze, Öl & Backzutaten"){
      item.cat=infer(item.name); changed=true;
    }
  }
  for(const storeId of Object.keys(state.routes||{})){
    const r=state.routes[storeId];
    const idx=r.indexOf("Gewürze, Öl & Backzutaten");
    if(idx>=0){r.splice(idx,1,"Gewürze","Essig & Öl","Backen");changed=true;}
  }
  for(const storeId of Object.keys(state.hiddenCategories||{})){
    const h=state.hiddenCategories[storeId];
    if(h.includes("Gewürze, Öl & Backzutaten")){
      state.hiddenCategories[storeId]=h.filter(x=>x!=="Gewürze, Öl & Backzutaten").concat(["Gewürze","Essig & Öl","Backen"]);
      changed=true;
    }
  }
  if(changed)save();
}

migrateSplitCategories();
wire();
render();
scheduleOffers();
