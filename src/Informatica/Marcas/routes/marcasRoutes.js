import { Router } from 'express';
import MarcasControllers from '../controller/marcasController.js';

const InformaticaMarcas  = new Router();

InformaticaMarcas.get('/venda-periodo-loja', MarcasControllers.getListaMarcas)

export default InformaticaMarcas;

