import { Router } from 'express';
import EstiloControllers from '../controller/estiloController.js';

const ComprasEstilo  = new Router();

ComprasEstilo.get('/listaEstilos', EstiloControllers.getListaEstilos)
ComprasEstilo.put('/listaEstilos/:id', EstiloControllers.putEstilos)
ComprasEstilo.post('/criarlistaEstilos', EstiloControllers.postEstilos)
 
export default ComprasEstilo;

