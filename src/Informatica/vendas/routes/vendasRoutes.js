import { Router } from 'express';
import VendasControllers from '../controller/vendasController.js';

const InformaticaVendas  = new Router();

InformaticaVendas.get('/vendas-loja-informatica', VendasControllers.getListaVendasLojaInformatica)
InformaticaVendas.get('/vendas-alloc', VendasControllers.getListaVendasAlloc)
InformaticaVendas.get('/vendas-contigencia', VendasControllers.getListaVendasContigenciaIformatica)

export default InformaticaVendas;