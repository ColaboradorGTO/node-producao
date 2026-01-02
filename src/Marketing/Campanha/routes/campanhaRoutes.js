import { Router } from 'express';
import CampanhaControllers from '../controller/campanhaController.js';

const MarketingCampanha = new Router();

MarketingCampanha.get('/campanha', CampanhaControllers.getListaCampanha)
MarketingCampanha.get('/campanha-cliente', CampanhaControllers.getListaCampanhaCliente)
MarketingCampanha.put('/campanha-cliente/:id', CampanhaControllers.putCampanhaCliente)
MarketingCampanha.post('/cadastrar-campanha-cliente', CampanhaControllers.postCampanhaCliente)
MarketingCampanha.post('/cadastra-campanha', CampanhaControllers.postCampanhaEmpresa)
MarketingCampanha.put('/campanha/:id', CampanhaControllers.putCampanhaEmpresa)

export default MarketingCampanha;

