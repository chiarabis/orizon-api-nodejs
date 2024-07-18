//configurazione del database
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('orizon', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
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