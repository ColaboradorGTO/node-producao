import { Router } from 'express';
import TamanhoControllers from '../controller/tamanhoController.js';

const ComprasTamanho  = new Router();

ComprasTamanho.get('/lista-extrato-periodo', TamanhoControllers.updateVinculoTamanhoCategoria)

export default ComprasTamanho;

