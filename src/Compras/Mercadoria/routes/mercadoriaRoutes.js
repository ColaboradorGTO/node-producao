import { Router } from 'express';
import MercadoriaControllers from '../controller/mercadoriaController.js';

const ComprasMercadoria  = new Router();

ComprasMercadoria.get('/subGrupoEstrutura', MercadoriaControllers.getListaEstruturaMercadoria)

export default ComprasMercadoria;

