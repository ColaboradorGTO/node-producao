import { Router } from 'express';
import ParceriaControllers from '../controller/parceriaController.js';

const InformaticaParceria  = new Router();

InformaticaParceria.get('/lista-parceria-credsystem', ParceriaControllers.getListaParceriaCredSystem)

export default InformaticaParceria;

