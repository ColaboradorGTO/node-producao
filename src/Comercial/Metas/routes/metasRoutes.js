import { Router } from 'express';
import MetasControllers from '../controller/metasController.js';

const ComercialMetas  = new Router();

ComercialMetas.get('/listaMetaVendas', MetasControllers.getListaMetasGrupo)

export default ComercialMetas;

