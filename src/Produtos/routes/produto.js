import { Router } from 'express';
import ProdutoControllers from '../controllers/Produtos.js';

const ProdutosRoutes = new Router();

ProdutosRoutes.get('/alteracoes-de-precos-detalhes', ProdutoControllers.getListaAlteracaoPrecoDetalhe)
ProdutosRoutes.get('/alteracoes-de-precos-resumo', ProdutoControllers.getListaAlteracaoPrecoResumo)
ProdutosRoutes.get('/lista-pedidos', ProdutoControllers.getListaPedidos)
ProdutosRoutes.get('/produtoQuality', ProdutoControllers.getListaProdutosLojaQuality)
ProdutosRoutes.get('/produtoSap', ProdutoControllers.getListaProdutosLojaSap)
ProdutosRoutes.get('/produto-preco', ProdutoControllers.getListaProdutosPrecoInformatica)
ProdutosRoutes.get('/grupoProdutoSap', ProdutoControllers.getListaGrupoProdutoSap)
ProdutosRoutes.get('/produtoInformatica', ProdutoControllers.getListaProdutosInformaticaQuality)
ProdutosRoutes.get('/listaProdutos', ProdutoControllers.getListaProdutos)
ProdutosRoutes.get('/listaGrade', ProdutoControllers.getListaGrade)
ProdutosRoutes.get('/listas-de-precos-sap', ProdutoControllers.ListaProdutosEtiqueta)
ProdutosRoutes.get('/responsaveisAlteracaoPrecos', ProdutoControllers.getListaResponsavelAlteracaoPreco)
ProdutosRoutes.get('/lista-produtos-etiqueta-sap', ProdutoControllers.ListaProdutosEtiquetagem)

export default ProdutosRoutes;