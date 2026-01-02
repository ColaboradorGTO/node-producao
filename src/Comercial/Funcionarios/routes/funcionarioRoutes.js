import { Router } from 'express';
import FuncionariosControllers from '../controller/funcionarioController.js';

const ComercialFuncionarios  = new Router();

ComercialFuncionarios.get('/funcionarioRelatorio', FuncionariosControllers.getListaColaboradorRelatorio)
ComercialFuncionarios.get('/colaboradorProdutosVendidos', FuncionariosControllers.getListaColaboradorProdutosVendidos)

export default ComercialFuncionarios;

