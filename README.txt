Einkaufsweg v9 – automatische Marktguru-Angebote

Start:
1) Python 3 installieren
2) Im Projektordner:
   pip install -r requirements.txt
   python server.py
3) Browser: http://localhost:8000

Neu:
- KEIN Angebots-Button mehr
- nach Hinzufügen von Artikeln und nach Wechsel der Filiale lädt das Backend automatisch passende Marktguru-Angebote
- Treffer erscheinen direkt am Artikel
- Marktwechsel löscht nur alte Angebots-Treffer und lädt neue; die Einkaufsliste bleibt unverändert
- Backend umgeht Browser-CORS, cached Marktguru-Seiten 30 Minuten und liefert nur die passenden Daten an die PWA
- Offline bleiben Liste, Haken und Laufwege funktionsfähig; nur neue Angebote können dann nicht geladen werden

Hinweis:
Dies ist ein technischer Prototyp. Für produktiven Einsatz sollten Abrufhäufigkeit, Nutzungsbedingungen,
Fehlerbehandlung und ggf. eine offizielle Datenvereinbarung mit dem Datenanbieter geprüft werden.


v10:
- Homescreen-App-Icon ergänzt
- Einkaufswagen + Plus als App-Symbol
- Android maskable icon
- Apple Touch Icon für iPhone


v11:
- ZIP enthält jetzt einen echten Top-Level-Ordner einkaufsweg-pwa-v11/
- Struktur: server.py + requirements.txt im Root, PWA unter static/, Icons unter static/icons/
- UI deutlich modernisiert, Kernfluss unverändert
