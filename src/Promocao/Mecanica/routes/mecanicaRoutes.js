import { Router } from 'express';
import MecanicaControllers from '../controller/mecanicaController.js';

const PromocaoMecanica  = new Router();

PromocaoMecanica.get('/mecanicas-ativas', MecanicaControllers.getListaMecanicaAtivas)
PromocaoMecanica.post('/criar-mecanica', MecanicaControllers.postMecanicaAtivas)


export default PromocaoMecanica;

