import { Router } from 'express';
import ProdutosControllers from '../controllers/produtosController.js';

const InformaticaProdutos  = new Router();

InformaticaProdutos.get('/listaProdutoPreco', ProdutosControllers.getListaProdutoPreco)
InformaticaProdutos.get('/listaProdutoPrecoInformatica', ProdutosControllers.getListaProdutoPrecoInformatica)

export default InformaticaProdutos;

