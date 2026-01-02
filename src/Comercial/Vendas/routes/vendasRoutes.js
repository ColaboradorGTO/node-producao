import { Router } from 'express';
import VendasControllers from '../controller/vendasController.js';

const ComercialVendas  = new Router();

ComercialVendas.get('/vendaMarcaPeriodoFinanceiro', VendasControllers.getListaVendasMarcaPorPeriodoComercial)
ComercialVendas.get('/vendasEstoqueGrupoSubGrupo', VendasControllers.getListaVendasEstoqueGrupoSubGrupoComercial)
ComercialVendas.get('/vendasEstoqueProduto', VendasControllers.getListaVendasPosicionamentoEstoquePeriodos)
ComercialVendas.get('/custoPorLoja', VendasControllers.getListaVendasCustoLojas)
ComercialVendas.get('/vendasPosicionamentoEstoque', VendasControllers.getListaVendasPosicionamentoEstoque)

export default ComercialVendas;

