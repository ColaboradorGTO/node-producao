import { Router } from 'express';
import MedidasControllers from '../controller/medidasController.js';

const ComprasMedidas  = new Router();

ComprasMedidas.get('/unidades-de-Medidas', MedidasControllers.getListaUnidadesMedidas)
ComprasMedidas.get('/unidadeMedida', MedidasControllers.getListaUnidadeMedida)
ComprasMedidas.put('/unidadeMedida/:id', MedidasControllers.putUnidadeMedida)
ComprasMedidas.post('/cadastrarUnidadeMedida', MedidasControllers.postUnidadeMedida)

export default ComprasMedidas;

