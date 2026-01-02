import { Router } from 'express';
import ExposicaoControllers from '../controller/exposicaoController.js';

const ComprasExposicao = new Router();

ComprasExposicao.get('/localExposicao', ExposicaoControllers.getListaLocalExposicao)

export default ComprasExposicao;

