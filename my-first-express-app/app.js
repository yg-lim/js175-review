const express = require('express');
const pug = require('pug');

const app = express();
const PORT = 3000;

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index');
  res.end();
});

app.listen(PORT, () => {
  console.log(`listening on port number ${PORT}`)
});