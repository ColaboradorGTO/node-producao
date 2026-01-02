import { Router } from 'express';
import DivergenciaControllers from '../controller/divergenciaController.js'

const ConferenciaCegaDivergencia  = new Router();

ConferenciaCegaDivergencia.get('/status-divergencia', DivergenciaControllers.getListaStatusOTConfrecencia)
ConferenciaCegaDivergencia.put('/status-divergencia/:id', DivergenciaControllers.putStatusDivergencia)
ConferenciaCegaDivergencia.post('/inserir-status-divergencia', DivergenciaControllers.postStatusDivergencia)

export default ConferenciaCegaDivergencia;

