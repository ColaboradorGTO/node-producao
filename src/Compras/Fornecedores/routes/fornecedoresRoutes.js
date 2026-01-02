import { Router } from 'express';
import FornecedoresControllers from '../controller/fornecedoresController.js';

const ComprasFornecedores  = new Router();

ComprasFornecedores.get('/fornecedores', FornecedoresControllers.getListaFornecedores)
ComprasFornecedores.get('/fornecedor-produto', FornecedoresControllers.getListaFornecedorProduto)
ComprasFornecedores.get('/consulta-fornecedor-sap', FornecedoresControllers.getListaFornecedorSap)

ComprasFornecedores.put('/fornecedor/:id', FornecedoresControllers.putFornecedor)
ComprasFornecedores.put('/excluir-vinculo-fornecedor', FornecedoresControllers.putExcluirVinculoFornecedorFabricante)
ComprasFornecedores.post('/cadastrar-fornecedor', FornecedoresControllers.postFornecedor)

export default ComprasFornecedores;

