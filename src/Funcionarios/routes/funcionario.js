import { Router } from 'express';
import FuncionariosControllers from '../controllers/index.js';

const FuncionariosRoutes = new Router();

FuncionariosRoutes.get('/todos-funcionario', FuncionariosControllers.getListaTodosFuncionarios)
FuncionariosRoutes.get('/funcionario-ativo-por-empresa', FuncionariosControllers.getListaFuncionariosAtivos)
FuncionariosRoutes.get('/autorizarVoucher', FuncionariosControllers.getAutorizacaoVoucherFuncionarios)
FuncionariosRoutes.get('/adiantamento-salarial-gerencia', FuncionariosControllers.getAdiantamentoFuncionario)

export default FuncionariosRoutes;