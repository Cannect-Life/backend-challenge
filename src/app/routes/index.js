const routes = require('express').Router();
//const routes = require('../../config/express');
const rotaPadrao = require('../controllers/rotaPadrao');
const cliente = require('../controllers/cliente')

routes.get('/', rotaPadrao)
routes.post('/creatClient', cliente.GravarCliente);

module.exports = routes