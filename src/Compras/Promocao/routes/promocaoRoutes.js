import { Router } from 'express';
import PromocaoControllers from '../controller/promocaoController.js';

const ComprasPromocao  = new Router();

ComprasPromocao.get('/listaPromocoes', PromocaoControllers.getListaPromocoes)
ComprasPromocao.get('/listaEmpresaPromocoes', PromocaoControllers.getListaEmpresaPromocoes)
ComprasPromocao.get('/listaProdutosOrigemPromocoes', PromocaoControllers.getListaProdutoOrigemPromocoes)
ComprasPromocao.get('/listaProdutoDestinoPromocoes', PromocaoControllers.getListaProdutoDestinoPromocoes)

export default ComprasPromocao;

