import { Router } from 'express';
import ConfiguracaoPixPDVControllers from '../controllers/ConfiguracaoPixPDV.js';

const ConfiguracaoPIXRoutes = new Router();

ConfiguracaoPIXRoutes.get('/configuracao-pix-pdv', ConfiguracaoPixPDVControllers.getListaConfiguracaoPixPDV)

export default ConfiguracaoPIXRoutes;