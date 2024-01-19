const express = require('express');
const routes = require('./routes');
const manipuladorDeErros = require('./middlewares/manipuladorDeErros.js');
const manipulador404 = require('./middlewares/manipulador404.js');

const app = express();

routes(app);


app.use(manipuladorDeErros);

module.exports = app;
