import { Router } from 'express';
import VendasControllers from '../controllers/Vendas.js';

const VendasRoutes = new Router();

VendasRoutes.get('/listaVendas', VendasControllers.getListaVendas)
VendasRoutes.get('/listaVendaId', VendasControllers.getListaVendaId)
//VendasRoutes.get('/listaVendaCliente', VendasControllers.getListaVendaCliente)
VendasRoutes.get('/movimentacaoSaldo', VendasControllers.getListaVendasSaldo)
VendasRoutes.get('/rotatividadeVendas', VendasControllers.getListaRotatividade)
VendasRoutes.get('/listaDetalheVendaCliente', VendasControllers.getListaDetalheVendaCliente)
VendasRoutes.get('/venda-xml', VendasControllers.getListaVendaXML)
VendasRoutes.get('/venda-cliente', VendasControllers.getListaVendaClienteGerencia)

export default VendasRoutes;