import { Router } from 'express';
import TrasportadorControllers from '../controller/trasportadorController.js';

const ComprasTrasportador  = new Router();

ComprasTrasportador.get('/listaTransportador', TrasportadorControllers.getListaTransportador)
ComprasTrasportador.get('/transportadoras', TrasportadorControllers.getListaTransportadora)
ComprasTrasportador.get('/transportadorID', TrasportadorControllers.getListaByIdTransportador)
ComprasTrasportador.put('/transportador/:id', TrasportadorControllers.putCadastroTransportador)
ComprasTrasportador.post('/cadastrar-transportador', TrasportadorControllers.postCadastroTransportador)

export default ComprasTrasportador;

