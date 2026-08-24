RETHINK.einkauf v14 – Deployment-ready

Lokaler Start
-------------
pip install -r requirements.txt
python server.py
Dann http://localhost:8000 öffnen.

Deployment mit GitHub + Render
-------------------------------
1. Alle Dateien dieses Ordners in ein neues GitHub-Repository hochladen.
2. Render öffnen und GitHub verbinden.
3. New + > Web Service wählen.
4. Repository auswählen.
5. Render kann die beiliegende render.yaml verwenden.

Build Command:
pip install -r requirements.txt

Start Command:
gunicorn server:app

Health Check:
 /health

Nach dem Deployment erhältst du eine öffentliche HTTPS-Adresse.
Diese auf iPhone oder Android öffnen und zum Homescreen hinzufügen.

Hinweis zu Angeboten
--------------------
Die PWA und das Backend sind online-fähig vorbereitet. Für dauerhaft produktive
Angebotsdaten sollte zusätzlich geprüft werden, ob die verwendete Datenquelle
automatisierte Abrufe dauerhaft technisch und rechtlich erlaubt.


v15 – präzise Angebotszuordnung
--------------------------------
- Suchbegriff muss tatsächlich im Produktnamen bzw. in der Marke vorkommen.
- Beispiel: "Schinken" akzeptiert Kochschinken, Rohschinken, Hinterschinken usw.
- "Kasseler" wird bei einer Suche nach "Schinken" nicht mehr als Treffer angezeigt.
- Pro Einkaufsartikel werden bis zu 12 echte relevante Angebote angezeigt.
- Mehrere Angebote erscheinen als Liste direkt unter dem Einkaufsartikel.
- Der Filial-Hinweis nennt jetzt Anzahl Angebote und Anzahl betroffener Einkaufsartikel.


v16 – automatisches PWA-Update
------------------------------
- Installierte Homescreen-App muss bei neuen Releases nicht neu hinzugefügt werden.
- Neuer Service Worker wird im Hintergrund erkannt.
- Hinweis "Neue Version verfügbar" erscheint automatisch.
- "Jetzt aktualisieren" aktiviert die neue Version und lädt die App neu.
- Alte Caches werden beim Aktivieren der neuen Version entfernt.
- Zusätzlich wird beim Zurückkehren in die App und alle 15 Minuten nach Updates gesucht.


v17 – Mehrfachangebote zuverlässig sichtbar
- Backend-Parser liest jeden Angebotsblock einzeln.
- Bis zu 20 streng relevante Treffer pro Einkaufsartikel.
- Erstes Angebot direkt sichtbar.
- Bei mehreren Treffern: „Weitere N Angebote anzeigen“.
- Klick auf den Artikelnamen klappt weitere Angebote auf/zu.
- Jedes Angebot öffnet die passende Marktguru-Händler/Kategorie-Seite.


v18 – optionaler Zwei-Filialen-Preisvergleich
- Hauptfiliale plus optionale Vergleichsfiliale.
- Angebote beider Märkte parallel.
- Gelernte Normalpreise pro Produkt/Filiale über + €.
- Klare Trennung: Angebot vs. zuletzt bekannter Preis.
- Günstiger-Hinweis nur wenn beide Seiten einen Preiswert haben.
