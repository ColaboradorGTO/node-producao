import { Router } from 'express';
import VendasControllers from '../controller/vendaContabilidade.js';

const ContabilidadeVendas  = new Router();

ContabilidadeVendas.get('/vendaContigencia', VendasControllers.getListaVendasContigencia)
ContabilidadeVendas.get('/vendasDetalheContigencia', VendasControllers.getListaDetalheVendasContigencia)
ContabilidadeVendas.get('/vendasPagamentoContigencia', VendasControllers.getListaPagamentoVendasContigencia)
ContabilidadeVendas.get('/vendasEstoqueComercial', VendasControllers.getListaVendasEstoqueComercial)
ContabilidadeVendas.get('/vendasProdutos', VendasControllers.getListaVendasPeriodo)
ContabilidadeVendas.get('/vendasProdutosConsolidado', VendasControllers.getListaVendasPeriodoConsolidado)

export default ContabilidadeVendas;

