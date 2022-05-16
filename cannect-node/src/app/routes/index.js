const routes = require('express').Router();
//const routes = require('../../config/express');
const rotaPadrao = require('../controllers/rotaPadrao');
const cliente = require('../controllers/cliente')
const autentica = require('../controllers/autenticacao')

routes.get('/', rotaPadrao)
routes.post('/cadastrarCliente', cliente.GravarCliente);
routes.get('/visualizarCliente', cliente.SelectCliente);
routes.patch('/atualizarCliente/:id', cliente.UpdateCliente);
routes.delete('/deletarCliente/:id', cliente.DeleteCliente);


routes.get('/verificaLogin',autentica.verifyToken, autentica.auth);

module.exports = routes