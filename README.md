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
- `/node_modules`: Contiene tutte le dipendenze installate tramite npm.
- /config: La cartella dove si gestiscono le configurazioni dell'applicazione. Il file db.js contiene probabilmente la configurazione della connessione a MySQL tramite Sequelize.
- /models: Contiene i modelli Sequelize che rappresentano le tabelle del database. Ogni file corrisponde a una tabella:
  - user.js: Modello per la tabella utenti.
  - product.js: Modello per la tabella prodotti.
  - order.js: Modello per la tabella ordini.
  - orderProduct.js: Modello per la tabella di relazione molti-a-molti ordiniProdotti.
- index.js: File che centralizza la creazione dei modelli e le associazioni tra di essi.
- /controllers: Contiene i controller per le diverse entità. Questi gestiscono la logica applicativa delle tue API RESTful:
  - orderController.js: Gestisce le operazioni relative agli ordini.
  - productController.js: Gestisce le operazioni relative ai prodotti.
  - userController.js: Gestisce le operazioni relative agli utenti.
- /public: Contiene il front-end dell'applicazione, come file HTML, CSS, immagini e JavaScript lato client.
- /routes: Definisce le rotte per le tue API RESTful:
  - index.js: Probabilmente definisce le rotte principali o importa e unisce tutte le altre rotte.
  - orderRoutes.js: Gestisce le rotte API per gli ordini.
  - productRoutes.js: Gestisce le rotte API per i prodotti.
  - userRoutes.js: Gestisce le rotte API per gli utenti.
- package.json e package-lock.json: Contengono le informazioni sulle dipendenze del progetto e altre configurazioni npm.
- app.js: file principale del'applicazione, dove viene configurata e avviata l'istanza di Express.
- .env: contiene variabili d'ambiente.
