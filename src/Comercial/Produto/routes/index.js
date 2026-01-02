import { Router } from 'express';
import ProdutoControllers from '../controllers/index.js';

const ComercialProduto = new Router();

ComercialProduto.get('/produtosPrecosEstoquesLojas', ProdutoControllers.getListaProdutosEstoquePrecoLoja)
ComercialProduto.get('/listaVendasPorProduto', ProdutoControllers.getListaVendasEstruturaProdutos)
ComercialProduto.get('/listaProdutoSap', ProdutoControllers.getListaProdutoSap)
ComercialProduto.get('/listaGrupoProduto', ProdutoControllers.getListaGrupoProduto)
ComercialProduto.get('/listaSubGrupoProduto', ProdutoControllers.getListaSubGrupoProduto)
ComercialProduto.get('/vendas-por-produtos', ProdutoControllers.getListaVendasPorProduto)
ComercialProduto.get('/lista-marca-produto', ProdutoControllers.getListaMarcaProduto)
ComercialProduto.get('/lista-fornecedor-produto', ProdutoControllers.getListaFornecedorProduto)

ComercialProduto.get('/vendas-vendedor-estrutura', ProdutoControllers.getListaVendasVendedorEstrutura)
ComercialProduto.get('/produtos-mais-vendidos', ProdutoControllers.getListaProdutosMaisVendidosEstrutura)
ComercialProduto.get('/vendas-por-estrutura', ProdutoControllers.getListaVendasIndicadoresEstrutura)


export default ComercialProduto;