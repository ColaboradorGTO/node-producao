import { Router } from 'express';
import CadastroControllers from '../controllers/Cadastro.js';

const CadastroRoutes = new Router();

CadastroRoutes.get('/listaProdutoCriadoPedidoCompra', CadastroControllers.getListaProdutoCriadoPedidoCompra)
CadastroRoutes.get('/categoriasProdutos', CadastroControllers.getListaCategoriasProduto)
CadastroRoutes.get('/produtoAvulso', CadastroControllers.getListaProdutosAvulso)
CadastroRoutes.get('/tipoProduto', CadastroControllers.getListaTipoProdutos)
CadastroRoutes.get('/tipoFiscalProduto', CadastroControllers.getListaTipoFiscalProdutos)
CadastroRoutes.get('/consultaProdutos', CadastroControllers.getConsultaProdutos)
CadastroRoutes.get('/nfPedido', CadastroControllers.getListaNFPedido)

export default CadastroRoutes;