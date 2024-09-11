require('dotenv').config();

//configurazione del database
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT
});

//test della connessione al database
sequelize.authenticate()
  .then(() => {
    console.log('Connessione al database riuscita.');
})
  .catch(err => {
    console.error('Impossibile connettersi al database:', err);
});

module.exports = sequelize;