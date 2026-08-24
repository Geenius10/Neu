const STORES=[{"id": "edeka-center-otto", "group": "EDEKA", "name": "E center Schneidermarkt", "address": "Otto-Hahn-Straße 1, 95447 Bayreuth", "retailer": "edeka-center"}, {"id": "edeka-gravenreuth", "group": "EDEKA", "name": "EDEKA Schneidermarkt", "address": "Gravenreuther Straße 19, 95445 Bayreuth", "retailer": "edeka"}, {"id": "edeka-meran", "group": "EDEKA", "name": "EDEKA Schneidermarkt", "address": "Meranierring 2, 95445 Bayreuth", "retailer": "edeka"}, {"id": "edeka-pensel", "group": "EDEKA", "name": "EDEKA Pensel", "address": "Königsallee 45, 95448 Bayreuth", "retailer": "edeka"}, {"id": "edeka-center-riedinger", "group": "EDEKA", "name": "E center Schneidermarkt", "address": "Riedingerstraße 21, 95448 Bayreuth", "retailer": "edeka-center"}, {"id": "nahgut-troeger", "group": "EDEKA", "name": "nah & gut Tröger", "address": "Eichendorffring 1, 95447 Bayreuth", "retailer": "edeka-nah-gut"}, {"id": "rewe-justus", "group": "REWE", "name": "REWE", "address": "Justus-Liebig-Str. 8, 95447 Bayreuth", "retailer": "rewe"}, {"id": "rewe-kanal", "group": "REWE", "name": "REWE", "address": "Kanalstr. 15–17, 95444 Bayreuth", "retailer": "rewe"}, {"id": "rewe-friedrich", "group": "REWE", "name": "REWE", "address": "Friedrichstr. 53, 95444 Bayreuth", "retailer": "rewe"}, {"id": "rewe-spinnerei", "group": "REWE", "name": "REWE", "address": "Spinnereistr. 7–13, 95445 Bayreuth", "retailer": "rewe"}, {"id": "rewe-bamberger", "group": "REWE", "name": "REWE", "address": "Bamberger Str. 32, 95445 Bayreuth", "retailer": "rewe"}, {"id": "nahkauf-friedrich-ebert", "group": "REWE", "name": "nahkauf", "address": "Friedrich-Ebert-Str. 14, 95448 Bayreuth", "retailer": "nahkauf"}, {"id": "nahkauf-carl-burger", "group": "REWE", "name": "nahkauf", "address": "Carl-Burger-Str. 8, 95445 Bayreuth", "retailer": "nahkauf"}, {"id": "nahkauf-preuschwitz", "group": "REWE", "name": "nahkauf", "address": "Preuschwitzer Str. 23, 95445 Bayreuth", "retailer": "nahkauf"}, {"id": "rewe-express-hindenburg", "group": "REWE", "name": "REWE express", "address": "Hindenburgstraße 4, 95445 Bayreuth", "retailer": "rewe"}, {"id": "lidl-adolf", "group": "Lidl", "name": "Lidl", "address": "Adolf-Wächter-Str. 1, 95447 Bayreuth", "retailer": "lidl"}, {"id": "lidl-meran", "group": "Lidl", "name": "Lidl", "address": "Meranierring 49, 95445 Bayreuth", "retailer": "lidl"}, {"id": "lidl-nuernberg", "group": "Lidl", "name": "Lidl", "address": "Nürnberger Str. 3a, 95448 Bayreuth", "retailer": "lidl"}, {"id": "lidl-riedinger", "group": "Lidl", "name": "Lidl", "address": "Riedingerstraße 21, 95448 Bayreuth", "retailer": "lidl"}, {"id": "aldi-tunnel", "group": "ALDI SÜD", "name": "ALDI SÜD", "address": "Tunnelstraße 11, 95448 Bayreuth", "retailer": "aldi-sued"}, {"id": "aldi-otto", "group": "ALDI SÜD", "name": "ALDI SÜD", "address": "Otto-Hahn-Straße 1a, 95447 Bayreuth", "retailer": "aldi-sued"}, {"id": "aldi-himmelkron", "group": "ALDI SÜD", "name": "ALDI SÜD", "address": "Himmelkronstraße 1, 95445 Bayreuth", "retailer": "aldi-sued"}, {"id": "aldi-theodor", "group": "ALDI SÜD", "name": "ALDI SÜD", "address": "Theodor-Schmidt-Straße 12, 95448 Bayreuth", "retailer": "aldi-sued"}, {"id": "aldi-nuernberg", "group": "ALDI SÜD", "name": "ALDI SÜD", "address": "Nürnberger Str. 96, 95448 Bayreuth", "retailer": "aldi-sued"}, {"id": "netto-leuschner", "group": "Netto", "name": "Netto Marken-Discount", "address": "Leuschnerstraße 84, 95447 Bayreuth", "retailer": "netto-marken-discount"}, {"id": "netto-koenigsallee", "group": "Netto", "name": "Netto Marken-Discount", "address": "Königsallee 47, 95448 Bayreuth", "retailer": "netto-marken-discount"}, {"id": "netto-bamberger", "group": "Netto", "name": "Netto Marken-Discount", "address": "Bamberger Str. 38, 95445 Bayreuth", "retailer": "netto-marken-discount"}, {"id": "netto-spinnerei", "group": "Netto", "name": "Netto Marken-Discount", "address": "Spinnereistraße 7, 95445 Bayreuth", "retailer": "netto-marken-discount"}, {"id": "netto-richard", "group": "Netto", "name": "Netto Marken-Discount", "address": "Richard-Wagner-Straße 17, 95444 Bayreuth", "retailer": "netto-marken-discount"}, {"id": "netto-nuernberg", "group": "Netto", "name": "Netto Marken-Discount", "address": "Nürnberger Str. 37, 95447 Bayreuth", "retailer": "netto-marken-discount"}, {"id": "norma-kanal", "group": "NORMA", "name": "NORMA", "address": "Kanalstraße 17, 95444 Bayreuth", "retailer": "norma"}, {"id": "norma-spitzweg", "group": "NORMA", "name": "NORMA", "address": "Spitzwegstraße 59, 95447 Bayreuth", "retailer": "norma"}, {"id": "norma-bauhof", "group": "NORMA", "name": "NORMA", "address": "Am Bauhof 4, 95445 Bayreuth", "retailer": "norma"}, {"id": "norma-kemnather", "group": "NORMA", "name": "NORMA", "address": "Kemnather Str. 29, 95448 Bayreuth", "retailer": "norma"}, {"id": "kaufland-weiher", "group": "Kaufland", "name": "Kaufland Bayreuth", "address": "Weiherstraße 27, 95448 Bayreuth", "retailer": "kaufland"}, {"id": "sultan-weiher", "group": "Weitere", "name": "sultan Markt Bayreuth", "address": "Weiherstraße 1, 95448 Bayreuth", "retailer": null}, {"id": "fruchtgarten", "group": "Weitere", "name": "Fruchtgarten Bayreuth GmbH", "address": "Ritter-von-Eitzenberger-Straße 9, 95448 Bayreuth", "retailer": null}];
const BASE_ROUTE=["Obst & Gemüse","Backwaren","Kühlung","Fleisch & Wurst","Vorrat","Getränke","Tiefkühlung","Drogerie","Sonstiges"];
const RULES=[[/banane|apfel|äpfel|tomate|gurke|kartoffel|salat|zwiebel|paprika|obst|gemüse/,"Obst & Gemüse"],[/brot|brötchen|toast|baguette|back/,"Backwaren"],[/milch|butter|joghurt|käse|gouda|quark|sahne|eier?/,"Kühlung"],[/hack|fleisch|hähnchen|wurst|salami|schinken/,"Fleisch & Wurst"],[/nudel|reis|kaffee|mehl|zucker|müsli|öl|essig|konserve/,"Vorrat"],[/wasser|cola|saft|bier|limo|getränk/,"Getränke"],[/pizza|pommes|eis|tiefkühl/,"Tiefkühlung"],[/spül|waschmittel|toilettenpapier|küchenrolle|shampoo|seife|zahnpasta/,"Drogerie"]];
const $=s=>document.querySelector(s);
function infer(name){const l=name.toLowerCase();for(const [r,c] of RULES)if(r.test(l))return c;return"Sonstiges"}
function emptyState(){return {items:[],routes:{},store:"edeka-center-otto",compareStore:"",offers:{},compareOffers:{},prices:{}}}
function load(){try{const x=JSON.parse(localStorage.getItem("rethink-einkauf-v18"));if(x?.items&&x?.routes){x.compareStore=x.compareStore||"";x.compareOffers=x.compareOffers||{};x.prices=x.prices||{};return x}}catch(e){}return emptyState()}
let state=load(),editing=[];
function save(){localStorage.setItem("rethink-einkauf-v18",JSON.stringify(state))}
function currentStore(){return STORES.find(s=>s.id===state.store)||STORES[0]}
function compareStore(){return STORES.find(s=>s.id===state.compareStore)||null}
function priceKey(s,i){return s+"::"+i.name.trim().toLowerCase()}
function knownPrice(s,i){return state.prices?.[priceKey(s,i)]||null}
function euro(v){let n=parseFloat(String(v||"").replace("€","").replace(",","."));return Number.isFinite(n)?n:null}
function cheapest(a){return (a||[]).map(x=>({...x,n:euro(x.price)})).filter(x=>x.n!==null).sort((a,b)=>a.n-b.n)[0]||null}
function bestPrice(s,i,a){let o=cheapest(a),k=knownPrice(s,i),n=k?euro(k.price):null;if(o&&(n===null||o.n<n))return {v:o.n,label:o.price,type:"Angebot"};if(n!==null)return {v:n,label:n.toFixed(2).replace(".",",")+" €",type:"zuletzt bekannt"};return o?{v:o.n,label:o.price,type:"Angebot"}:null}
function route(){return state.routes[state.store]||BASE_ROUTE}
function esc(s=""){return s.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[c]))}
function show(id,title){document.querySelectorAll(".screen").forEach(x=>x.classList.remove("active"));$("#"+id+"Screen").classList.add("active");$("#screenTitle").textContent=title;window.scrollTo({top:0,behavior:"smooth"})}
function sortedItems(){const o=route();return[...state.items].sort((a,b)=>{let ai=o.indexOf(a.cat),bi=o.indexOf(b.cat);return(ai<0?99:ai)-(bi<0?99:bi)})}
function offersFor(item){return state.offers?.[item.id]||[]}
function compareOffersFor(item){return state.compareOffers?.[item.id]||[]}
function priceComparisonHtml(item){const s=compareStore();if(!s)return "";const a=bestPrice(state.store,item,offersFor(item)),b=bestPrice(s.id,item,compareOffersFor(item));const row=(st,x)=>`<div class="price-store"><b>${esc(st.name)}</b><span>${x?`<strong>${esc(x.label)}</strong> · ${x.type}`:"Preis unbekannt"}</span><button data-price-store="${st.id}" data-price-item="${item.id}">+ €</button></div>`;let v=(a&&b)?(Math.abs(a.v-b.v)<.005?"Preisgleich":`${esc((a.v<b.v?currentStore():s).name)} ${(Math.abs(a.v-b.v)).toFixed(2).replace(".",",")} € günstiger`):"Noch kein vollständiger Preisvergleich";return `<div class="price-compare">${row(currentStore(),a)}${row(s,b)}<small>${v}</small></div>`}
function itemNode(item,shopping=false){
    const offers=offersFor(item),hasOffers=offers.length>0,el=document.createElement("div");
    el.className="item"+(item.checked?" checked":"")+(hasOffers?" offer":"");

    const renderOffer=(offer,i)=>`
      <a class="offer-row" href="${esc(offer.source_url||"#")}" target="_blank" rel="noopener">
        <div class="offer-number">${i+1}</div>
        <div class="offer-detail">
          <b>${esc(offer.title||item.name)}</b>
          ${offer.brand?`<span>${esc(offer.brand)}</span>`:""}
          ${offer.valid?`<small>${esc(offer.valid)}</small>`:""}
        </div>
        <strong class="offer-price">${esc(offer.price||"")}</strong>
      </a>`;

    const firstOffer=hasOffers?renderOffer(offers[0],0):"";
    const moreOffers=offers.slice(1).map((offer,i)=>renderOffer(offer,i+1)).join("");
    const moreId=`offers-${item.id}`;

    el.innerHTML=`<input class="check" data-id="${item.id}" type="checkbox" ${item.checked?"checked":""}>
      <div>
        <button class="item-name item-name-button" ${offers.length>1?`data-toggle-offers="${moreId}"`:""}>${esc(item.name)}</button>
        <div class="meta">
          <button class="tag ${item.mode}" data-mode="${item.id}">${item.mode==="recurring"?"dauerhaft":"einmalig"}</button>
          <span class="tag">${item.cat}</span>
          ${hasOffers?`<span class="tag offer-tag">${offers.length} ${offers.length===1?"ANGEBOT":"ANGEBOTE"}</span>`:""}
        </div>
        ${priceComparisonHtml(item)}${hasOffers?`<div class="offer-list">${firstOffer}
          ${offers.length>1?`
            <button class="more-offers-btn" data-toggle-offers="${moreId}">
              Weitere ${offers.length-1} ${offers.length-1===1?"Angebot":"Angebote"} anzeigen
            </button>
            <div id="${moreId}" class="more-offers" hidden>${moreOffers}</div>`:""}
          </div>`:""}
      </div>
      ${shopping?"":`<button class="delete" data-delete="${item.id}" aria-label="Löschen">×</button>`}`;

    el.querySelectorAll("[data-toggle-offers]").forEach(btn=>{
      btn.addEventListener("click",()=>{
        const target=el.querySelector("#"+btn.dataset.toggleOffers);
        if(!target)return;
        const willOpen=target.hidden;
        target.hidden=!willOpen;
        el.querySelectorAll(".more-offers-btn").forEach(b=>{
          b.textContent=willOpen
            ? "Weitere Angebote ausblenden"
            : `Weitere ${offers.length-1} ${offers.length-1===1?"Angebot":"Angebote"} anzeigen`;
        });
      });
    });

    return el
}
function bind(box,shopping=false){box.querySelectorAll(".check").forEach(b=>b.onchange=e=>{const x=state.items.find(i=>i.id===e.target.dataset.id);if(!x)return;x.checked=e.target.checked;save();render()});box.querySelectorAll("[data-mode]").forEach(b=>b.onclick=()=>{const x=state.items.find(i=>i.id===b.dataset.mode);x.mode=x.mode==="once"?"recurring":"once";save();render()});box.querySelectorAll("[data-delete]").forEach(b=>b.onclick=()=>{state.items=state.items.filter(i=>i.id!==b.dataset.delete);delete state.offers[b.dataset.delete];save();render();scheduleOffers()})}
function renderList(){const box=$("#items");box.innerHTML="";state.items.forEach(x=>box.append(itemNode(x,false)));bind(box);$("#emptyState").style.display=state.items.length?"none":"grid"}
function renderShop(){const box=$("#shopItems");box.innerHTML="";sortedItems().forEach(x=>box.append(itemNode(x,true)));bind(box,true);const done=state.items.filter(x=>x.checked).length,total=state.items.length,pct=total?Math.round(done/total*100):0;$("#progressText").textContent=`${done} von ${total} erledigt`;$("#progressPct").textContent=pct+"%";$("#progressBar").style.width=pct+"%";$("#shopStore").textContent=currentStore().name+" · "+currentStore().address}
function renderStores(){const sel=$("#storeSelect"),cmp=$("#compareStoreSelect");if(!sel.dataset.ready){let groups=[...new Set(STORES.map(s=>s.group))];sel.innerHTML=groups.map(g=>`<optgroup label="${g}">${STORES.filter(s=>s.group===g).map(s=>`<option value="${s.id}">${s.name} · ${s.address}</option>`).join("")}</optgroup>`).join("");cmp.innerHTML=`<option value="">Keine zweite Filiale</option>`+sel.innerHTML;sel.dataset.ready="1"}sel.value=state.store;cmp.value=state.compareStore||"";$("#storeName").textContent=currentStore().name+" · "+currentStore().address;$("#routePreview").innerHTML=route().map(x=>`<span>${x}</span>`).join("");let matchedItems=Object.values(state.offers||{}).filter(a=>a?.length).length,totalOffers=Object.values(state.offers||{}).reduce((n,a)=>n+(a?.length||0),0);const supported=!!currentStore().retailer;$("#offerSummary").textContent=!supported?"Für diesen unabhängigen Markt ist derzeit keine automatische Angebotsquelle hinterlegt.":matchedItems?`${totalOffers} passende Angebote für ${matchedItems} Artikel deiner Liste gefunden.`:"Aktuell keine passenden Online-Angebote gefunden."}
function render(){renderList();renderShop();renderStores()}
function addItems(){const raw=$("#itemInput").value.trim();if(!raw)return;raw.split(/,|;|\n/).map(x=>x.trim()).filter(Boolean).forEach(name=>state.items.push({id:crypto.randomUUID(),name:name.charAt(0).toUpperCase()+name.slice(1),cat:infer(name),mode:"once",checked:false}));$("#itemInput").value="";save();render();scheduleOffers()}
let offerTimer;
function scheduleOffers(){clearTimeout(offerTimer);offerTimer=setTimeout(loadOffers,300)}
async function fetchStoreOffers(store){if(!store?.retailer||!state.items.length)return {};const r=await fetch("/api/match-offers",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({retailer:store.retailer,items:state.items.map(x=>({id:x.id,name:x.name}))})});if(!r.ok)throw 0;return (await r.json()).matches||{}}
async function loadOffers(){if(!state.items.length)return;$("#syncState").textContent="Preise & Angebote werden aktualisiert …";try{const s=compareStore();[state.offers,state.compareOffers]=await Promise.all([fetchStoreOffers(currentStore()),s?fetchStoreOffers(s):Promise.resolve({})]);save();$("#syncState").textContent=s?"Beide Filialen aktualisiert":"Angebote aktualisiert";render()}catch(e){$("#syncState").textContent="Online-Daten gerade nicht erreichbar · gelernte Preise bleiben verfügbar"}}
$("#addBtn").onclick=addItems;$("#itemInput").onkeydown=e=>{if(e.key==="Enter"){e.preventDefault();addItems()}};
$("#chooseStoreBtn").onclick=()=>show("store","Filiale wählen");
$("#storeSelect").onchange=()=>{state.store=$("#storeSelect").value;state.offers={};save();render();scheduleOffers()};
$("#compareStoreSelect").onchange=()=>{state.compareStore=$("#compareStoreSelect").value===state.store?"":$("#compareStoreSelect").value;state.compareOffers={};save();render();scheduleOffers()};
$("#startBtn").onclick=()=>{if(!state.items.length){alert("Füge zuerst mindestens einen Artikel hinzu.");return}show("shop","Einkauf");scheduleOffers()};
$("#finishBtn").onclick=()=>{state.items=state.items.filter(x=>!(x.mode==="once"&&x.checked));state.items.forEach(x=>{if(x.mode==="recurring")x.checked=false});state.offers={};save();render();show("list","Einkaufsliste");scheduleOffers()};
$("#settingsBtn").onclick=()=>show("settings","Einstellungen");
document.querySelectorAll(".back").forEach(b=>b.onclick=()=>{const s=b.dataset.screen;show(s,s==="list"?"Einkaufsliste":s==="store"?"Filiale wählen":"Einkaufsweg")} );
$("#editRouteBtn").onclick=()=>{editing=[...route()];renderRouteEditor();show("route","Laufweg anpassen")};
function renderRouteEditor(){$("#routeEditor").innerHTML=editing.map((c,i)=>`<div class="route-row"><b>${c}</b><button data-up="${i}">↑</button><button data-down="${i}">↓</button></div>`).join("");$("#routeEditor").querySelectorAll("[data-up]").forEach(b=>b.onclick=()=>move(+b.dataset.up,-1));$("#routeEditor").querySelectorAll("[data-down]").forEach(b=>b.onclick=()=>move(+b.dataset.down,1))}
function move(i,d){const j=i+d;if(j<0||j>=editing.length)return;[editing[i],editing[j]]=[editing[j],editing[i]];renderRouteEditor()}
$("#saveRouteBtn").onclick=()=>{state.routes[state.store]=[...editing];save();render();show("store","Filiale wählen")};
$("#exportBtn").onclick=()=>{const blob=new Blob([JSON.stringify({version:12,data:state},null,2)],{type:"application/json"}),a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="rethink-einkauf-backup.json";a.click();URL.revokeObjectURL(a.href)};
$("#importInput").onchange=async e=>{const f=e.target.files[0];if(!f)return;try{const b=JSON.parse(await f.text());if(!b.data?.items||!b.data?.routes)throw 0;state=b.data;save();render();scheduleOffers();alert("Backup wiederhergestellt.")}catch(_){alert("Backup konnte nicht gelesen werden.")}e.target.value=""};
render();

// --- PWA update flow ---
let pendingServiceWorker = null;

function showUpdateBanner(worker){
  pendingServiceWorker = worker || pendingServiceWorker;
  const banner = document.querySelector("#updateBanner");
  if (banner) banner.hidden = false;
}

function hideUpdateBanner(){
  const banner = document.querySelector("#updateBanner");
  if (banner) banner.hidden = true;
}

async function registerPwaUpdates(){
  if (!("serviceWorker" in navigator)) return;

  try {
    const reg = await navigator.serviceWorker.register("./sw.js");

    // Existing waiting worker means an update is already ready.
    if (reg.waiting) showUpdateBanner(reg.waiting);

    reg.addEventListener("updatefound", () => {
      const installing = reg.installing;
      if (!installing) return;

      installing.addEventListener("statechange", () => {
        if (installing.state === "installed" && navigator.serviceWorker.controller) {
          showUpdateBanner(installing);
        }
      });
    });

    // Check periodically while app is open.
    setInterval(() => reg.update().catch(() => {}), 15 * 60 * 1000);

    // Also re-check whenever the app returns to foreground.
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "visible") reg.update().catch(() => {});
    });

    navigator.serviceWorker.addEventListener("controllerchange", () => {
      window.location.reload();
    });

    const updateBtn = document.querySelector("#updateNowBtn");
    if (updateBtn) {
      updateBtn.addEventListener("click", () => {
        if (pendingServiceWorker) {
          pendingServiceWorker.postMessage({type:"SKIP_WAITING"});
          updateBtn.disabled = true;
          updateBtn.textContent = "Aktualisiere …";
        }
      });
    }
  } catch (err) {
    console.warn("Service-Worker-Update konnte nicht registriert werden:", err);
  }
}
registerPwaUpdates();


document.addEventListener("click",e=>{const b=e.target.closest("[data-price-store]");if(!b)return;const item=state.items.find(i=>i.id===b.dataset.priceItem);if(!item)return;const old=knownPrice(b.dataset.priceStore,item);const raw=prompt("Preis für "+item.name+" merken (z. B. 1,29)",old?String(old.price).replace(".",","):"");if(raw===null)return;const n=euro(raw);if(n===null||n<0){alert("Bitte gültigen Preis eingeben.");return}state.prices[priceKey(b.dataset.priceStore,item)]={price:n,date:new Date().toISOString().slice(0,10)};save();render()});
