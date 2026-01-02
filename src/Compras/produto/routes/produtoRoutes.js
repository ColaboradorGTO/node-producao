import { Router } from 'express';
import ProdutosControllers from '../controller/produtoController.js';

const ComprasProdutos  = new Router();

ComprasProdutos.get('/produtos-imagens', ProdutosControllers.getListaProdutosImagens)
ComprasProdutos.get('/listaProdutosImagem', ProdutosControllers.getListaDetalheImagemProduto)
ComprasProdutos.get('/produtos-entre-filiais', ProdutosControllers.getListaProdutosEntreFiliais)
ComprasProdutos.get('/produtos-por-pedido', ProdutosControllers.getListaProdutosPorPedido)
ComprasProdutos.get('/imagemProdutos', ProdutosControllers.getListaImagemProduto)

ComprasProdutos.put('/atualizarProdutoImagem', ProdutosControllers.putProdutoImagem)
ComprasProdutos.post('/cadastrar-imagem-produto', ProdutosControllers.postImagemProduto)

export default ComprasProdutos;
