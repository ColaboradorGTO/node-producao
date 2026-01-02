import { Router } from 'express';
import FuncionarioController from "../controller/index.js"

const InformaticaFuncionarios = new Router();

InformaticaFuncionarios.put('/funcionarios-loja/:id', FuncionarioController.putFuncionarioLoja)
InformaticaFuncionarios.post('/criar-funcionarios-loja', FuncionarioController.postFuncionarioLoja)
InformaticaFuncionarios.put('/inativar-funcionario', FuncionarioController.putInativarFuncionario)

InformaticaFuncionarios.get('/atualizarFuncionario', FuncionarioController.getListaAtualizarFuncionario)
InformaticaFuncionarios.get('/funcionarios-loja', FuncionarioController.getListaFuncionariosLoja)
InformaticaFuncionarios.put('/funcionarios-desconto/:id', FuncionarioController.putFuncionarioDesconto)

export default InformaticaFuncionarios;