//flusso di lavoro: client -> rotta -> controller -> server
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const { initModels } = require('./models');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/orizon', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});
/*
app.get('/', (req, res) => {
  res.send('Localhost 3000 funziona');
});
app.get('/orizon', (req, res) => {
  res.send('Benevenuto all\'API dell\'agenzia di viaggi Orizon!')
});
*/
app.use('/orizon/api', routes);


initModels().then(() => {
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}/orizon`);
  });
});