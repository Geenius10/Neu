Einkaufsweg v12 – Bayreuth Pilot

Status:
Keine Demo-Artikel und keine erfundenen Rabatte mehr.
Die App startet leer. Angebotsinformationen werden ausschließlich durch den Online-Abgleich erzeugt.

Projektstruktur:
Alle Dateien liegen absichtlich gemeinsam in EINEM Ordner:
- index.html
- styles.css
- app.js
- server.py
- requirements.txt
- manifest.webmanifest
- sw.js
- icon-192.png
- icon-512.png
- README.txt

Start:
pip install -r requirements.txt
python server.py
Danach http://localhost:8000 öffnen.

Die Filialliste enthält die aktuell recherchierten Bayreuther Standorte der großen Ketten
einschließlich EDEKA/E center, nah & gut, REWE, nahkauf, Lidl, ALDI SÜD, Netto, NORMA,
Kaufland sowie einige weitere lokale Lebensmittelmärkte.

Wichtig:
Dies ist eine Pilot-/MVP-Version, kein produktionsreifes Release. Für Produktion fehlen u.a.
dauerhaft belastbare Angebots-Datenvereinbarung/API, Hosting, Monitoring, Datenschutzkonzept,
Sicherheits-/Lasttests und echte Multi-Device-Synchronisierung.
