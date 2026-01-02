import { Router } from 'express';
import PagamentoControllers from '../controller/pagamentoController.js';

const ComprasPagamento  = new Router();

ComprasPagamento.get('/condicaoPagamento', PagamentoControllers.getListaCondicoesPagamento)
ComprasPagamento.put('/condicaoPagamento/:id', PagamentoControllers.putCondicaoPagamento)
ComprasPagamento.post('/cadastrarCondicaoPagamento', PagamentoControllers.postCondicaoPagamento)

export default ComprasPagamento;