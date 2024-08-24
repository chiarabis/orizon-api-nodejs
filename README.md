# Orizon API: a Node.js project
Il progetto prevede la creazione di REST API utilizzando Node.js per gestire gli utenti, i pacchetti di viaggio e i relativi ordini di un'agenzia viaggi chiamata "Orizon".

---
## Sviluppo 💻
- Database in SQL con i dati riguardanti i prodotti (pacchetti di viaggio), gli utenti (i clienti) e gli ordini.
- API JSON per gestire le richieste http.
- Parte front end in HTML, CSS e Javascript.

---
## Librerie e tools 📚
- Beekeeper Studio per gestire il database relazionale
- Express.js, framework Node.js, per creare e manipolare le API
- Sequelize per semplificare l'interazione con il database
- Javascript
- HTML e CSS

---
## Cofigurazione 🛠️

---
## Struttura del progetto 🗂️
- **/config/db.js**: contiene la configurazione della connessione a MySQL tramite Sequelize.
- **/models**: contiene i modelli Sequelize che rappresentano le tabelle del database e le associazioni tra di essi.
- **/controllers**: contiene i file dove viene gestita la logica applicativa delle API RESTful per le diverse entità.
- **/public**: contiene il front-end dell'applicazione, come file HTML, CSS, immagini e JavaScript lato client.
- **/routes**: definisce le rotte per le API RESTful.
- **app.js**: file principale del'applicazione, dove viene configurata e avviata l'istanza di Express.

