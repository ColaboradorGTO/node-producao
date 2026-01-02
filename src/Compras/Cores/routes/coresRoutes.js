import { Router } from 'express';
import CoresControllers from '../controller/coresController.js';

const ComprasCores  = new Router();

ComprasCores.get('/listaCores', CoresControllers.getListaCores)
ComprasCores.get('/grupoCores', CoresControllers.getListaGrupoCores)
ComprasCores.put('/cores/:id', CoresControllers.putCores)
ComprasCores.post('/cadastrar-cores', CoresControllers.PostCores)

export default ComprasCores;

