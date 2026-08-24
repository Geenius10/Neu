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


v19 – Preisvergleich optional
- On/Off in Einstellungen.
- Gespeicherte Preise bleiben erhalten.
- Keine Günstiger-Tipps.
- Angebote nur per Pfeil ein-/ausklappbar.
- Deutlich feinere Abteilungen für optimale Filialwege.


v20 – Kategorien verwalten + Produkt-Hinzufügen repariert
----------------------------------------------------------
- Produkt-Hinzufügen per Button und Enter neu verdrahtet.
- Laufweg-Kategorien können pro Filiale mit × ausgeblendet werden.
- Ausgeblendete Kategorien bleiben gespeichert.
- Einstellungen: „Kategorien zurücksetzen“ stellt den vollständigen Standard-Laufweg wieder her.
- Weniger relevante Kategorien können so dauerhaft entfernt werden, ohne die globale Standardliste zu verlieren.


v21 – stabile Button-Verdrahtung
- app.js zentral neu aufgebaut statt weiterer Einzelpatches.
- Hinzufügen, Filiale wählen, Einkauf starten, Einstellungen, Laufweg, Backup und Preisvergleich neu verdrahtet.
- Kategorien pro Filiale weiterhin ausblendbar und zurücksetzbar.


v22 – robuste automatische Kategorisierung
------------------------------------------
- Großer Keyword-/Synonympool für jede Laufweg-Kategorie.
- Singular, Plural und Wortstämme werden berücksichtigt.
- Beispiel: Zigarette, Zigaretten, Kippen, Tabak, Filter, Blättchen, Feuerzeug → Tabak & Raucherbedarf.
- Jeder Artikel hat zusätzlich direkt eine manuell änderbare Kategorie.
- Manuelle Änderung wird gespeichert und überschreibt die Automatik für diesen Artikel.


v23 – Koch-/Backbereiche getrennt
---------------------------------
- „Gewürze, Öl & Backzutaten“ ersetzt durch:
  1. Gewürze
  2. Essig & Öl
  3. Backen
- Jeweils eigener automatischer Begriffspool.
- Bestehende Artikel der alten Sammelkategorie werden anhand ihres Namens neu zugeordnet.
- Bereits gelernte Filialrouten werden auf die drei neuen Kategorien migriert.


v24 – dezente Kategorieänderung
-------------------------------
- Kategorie ist wieder ein normaler Tag in derselben Zeile wie „einmalig/dauerhaft“.
- Keine Dropdown-Pfeile oder dauerhafte Auswahlbox.
- Tippen auf den Kategorie-Tag öffnet erst dann die Kategorienauswahl.
- Auswahl erscheint mobilfreundlich als kompakte Bottom-Sheet-Auswahl.


v25 – Drag & Drop und sauberer Kategorien-Reset
------------------------------------------------
- Standard-Kategorien alphabetisch sortiert.
- Artikel innerhalb einer Kategorie alphabetisch nach Namen sortiert.
- Laufweg-Kategorien per Drag & Drop sortierbar.
- Touch-Fallback: Griff antippen, dann Zielposition antippen.
- Kategorien zurücksetzen verändert die vorhandene Reihenfolge nicht.
- Fehlende Kategorien werden nur unten an den bestehenden Laufweg angehängt.
