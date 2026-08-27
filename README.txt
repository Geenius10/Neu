RETHINK.einkauf v30 – Bereinigung & Lernbasis

- Liste bleibt die Hauptansicht.
- Meine Filialen statt fest verdrahtetem Vollkatalog.
- Online-Suche über OpenStreetMap/Nominatim/Overpass.
- Neue Filialen starten mit Standardlaufweg.
- Abhak-Reihenfolge trainiert automatisch den Laufweg pro Filiale.
- Manuelle Laufwege haben Vorrang, können auf automatisches Lernen zurückgesetzt werden.
- Supermarkt und Drogerie nutzen unterschiedliche Abteilungen.
- Hauptfiliale + optionale zweite Filiale bleiben erhalten.
- Angebote und Preisvergleich bleiben getrennte Zusatzfunktionen.
- Backup enthält Filialen, Laufwege und Lerndaten.


v31 – intelligente Mehrfach-Eingabe
-----------------------------------
Eine Eingabe kann mehrere Einkaufsartikel erzeugen.

Beispiele:
- Milch, Brot, Butter, 2x Cola und Schinken
- Ich brauche Milch, Brot, Eier und zwei Flaschen Wasser
- Bananen; Äpfel; drei Packungen Nudeln

Erkannt werden:
- Komma, Semikolon und Zeilenumbrüche
- „und“, „sowie“, „plus“
- Mengen als 2x / 3 / zwei / drei usw.
- Einheiten wie Flaschen, Packungen, Dosen, Stück, kg, Liter
- typische Füllwörter wie „ich brauche“, „bitte“, „noch“

Doppelte vorhandene Artikel werden nicht erneut angelegt, sondern wieder als benötigt markiert.


v32 – Release-Audit & Stabilisierung
------------------------------------
- Bestehende Artikel aus Mehrfachtexteingabe werden bestätigt: kein Duplikat, Haken wird entfernt.
- Desktop-Drag & Drop bleibt erhalten.
- Echtes Pointer-Drag & Drop für Touchgeräte ergänzt.
- Angebote beider ausgewählten Filialen werden am Produkt gruppiert angezeigt.
- Angebotsabfrage sendet nur aktuell benötigte Produkte.
- Backend-Angebotsabfragen parallelisiert und externe Timeouts reduziert.
- Render/Gunicorn mit zwei Workern und 45 Sekunden Timeout konfiguriert.


v33 – filialspezifische Produktplatzierung
- Artikel können je Filiale in einer anderen Kategorie liegen.
- Kategorieänderung bietet „Nur diese Filiale“ oder „Globaler Standard“.
- Einkaufssortierung und Laufweglernen nutzen die filialspezifische Kategorie.
- Beispiel: Eier können bei Markt A bei Obst & Gemüse, bei Markt B bei Backen liegen.


v34 – automatische filialspezifische Produktplatzierung
-------------------------------------------------------
- Gilt generisch für alle Produkte.
- Die App beobachtet die tatsächliche Abhak-Reihenfolge und die Kategorien direkt davor/danach.
- Wiederholt sich dieselbe Nachbarschaft, wird nach mindestens 3 stützenden Beobachtungen eine filialspezifische Kategorie gelernt.
- Priorität: manuelle Filialplatzierung > automatisch gelernte Filialplatzierung > globaler Standard.
- Manuelle Filialplatzierungen können entfernt werden, danach lernt die App wieder automatisch.
