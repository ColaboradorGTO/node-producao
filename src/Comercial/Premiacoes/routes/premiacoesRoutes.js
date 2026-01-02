import { Router } from 'express';
import PremiacoesControllers from '../controller/premiacoesController.js';

const ComercialPremiacoes  = new Router();

ComercialPremiacoes.get('/listaPremiacoes', PremiacoesControllers.getListaPremiacoesPeriodo)

export default ComercialPremiacoes;

