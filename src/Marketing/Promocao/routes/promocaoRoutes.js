import { Router } from 'express';
import PromocaoControllers from '../controller/promocaoController.js';

const MarketingPromocao  = new Router();

MarketingPromocao.get('/produto-promocao', PromocaoControllers.getListaProdutosPromocao)
MarketingPromocao.get('/listaPromocao', PromocaoControllers.getListaPromocao)

MarketingPromocao.put('/ajuste-extrato/:id', PromocaoControllers.putProdutoPromocao)
MarketingPromocao.post('/ajuste-extrato/:id', PromocaoControllers.postProdutoPromocao)

export default MarketingPromocao;

