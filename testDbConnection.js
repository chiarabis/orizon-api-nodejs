const sequelize = require('./config/db');

async function testDbConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connessione al database riuscita.');
  } catch (error) {
    console.error('Impossibile connettersi al database:', error);
  } finally {
    await sequelize.close();
  }
}

testDbConnection();
