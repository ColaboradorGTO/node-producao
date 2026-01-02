import { Router } from 'express';
import DevolucaoControllers from '../controllers/devolucao.js';

const FinanceiroDevolucao = new Router();

FinanceiroDevolucao.get('/motivo-devolucao', DevolucaoControllers.getListaMotivosDevolucao)
FinanceiroDevolucao.put('/atualizar-motivo-devolucao', DevolucaoControllers.putMotivoDevolucao)
FinanceiroDevolucao.post('/criar-motivo-devolucao', DevolucaoControllers.postMotivoDevolucao)



export default FinanceiroDevolucao;

