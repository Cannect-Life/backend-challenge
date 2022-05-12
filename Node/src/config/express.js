const express = require('express');
const app = express();
const routes = require('../app/routes')
const bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: '50mb' }));
//acessando as rotas declaradas.
app.use('/', routes)

module.exports = app;