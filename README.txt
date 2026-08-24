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
