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
## Configurazione 🛠️
1. Installazione di Node.js: visitare il [sito ufficiale](https://nodejs.org/en) con la guida passo passo.
2. Dopo aver eseguito il comando per creare un file *package.json* potrete installare Express: ```npm i express --save``` (per Windows). Anche qui vi rimando al [sito ufficiale](https://expressjs.com/en/starter/installing.html) per l'installazione.
3. Se si intende creare un database in MySQL, è necessario scaricare prima MySQL, o nel mio caso Beekeeper Studio, e da lì costruirvi le tabelle con i dati. Dopodichè installate il pacchetto ```npm i mysql2 --save``` e ```npm i sequelize --save```. Inoltre utilizzando un database dovrete raccogliere le credenziali e le password in un file *.env*, perciò è necessario scaricare ```dotenv``` per gestire le variabili d'ambiente.

---
## Struttura del progetto 🗂️
- **/config/db.js**: contiene la configurazione della connessione a MySQL tramite Sequelize.
- **/models**: contiene i modelli Sequelize che rappresentano le tabelle del database e le associazioni tra di essi.
- **/controllers**: contiene i file dove viene gestita la logica applicativa delle API RESTful per le diverse entità.
- **/public**: contiene il front-end dell'applicazione, come file HTML, CSS, immagini e JavaScript lato client.
- **/routes**: definisce le rotte per le API RESTful.
- **app.js**: file principale del'applicazione, dove viene configurata e avviata l'istanza di Express.

