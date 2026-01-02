import { Router } from 'express';
import FabricanteControllers from '../controller/fabricanteController.js';

const ComprasFabricante  = new Router();

ComprasFabricante.get('/fabricantes', FabricanteControllers.getListaFabricantes)
ComprasFabricante.get('/fornecedorFabricante', FabricanteControllers.getListaFornecedorFabricante)
ComprasFabricante.get('/fabricante-fornecedor', FabricanteControllers.getListaFabricanteCadastro)
ComprasFabricante.get('/vincularFabricanteFornecedor', FabricanteControllers.getListaVinculoFornecedorFabricante)
ComprasFabricante.get('/vincularFabricanteFornecedor', FabricanteControllers.getListaVinculoFornecedorFabricante)

ComprasFabricante.put('/fabricante/:id', FabricanteControllers.putFabricante)
ComprasFabricante.put('/fabricante-fornecedor/:id', FabricanteControllers.putFabricanteFornecedor)
ComprasFabricante.post('/cadastrar-fabricante', FabricanteControllers.postFabricante)
ComprasFabricante.post('/migrar-fabricante', FabricanteControllers.postMigrarFabricanteSap)
ComprasFabricante.post('/cadastrar-fabricante-fornecedor', FabricanteControllers.postFabricanteFornecedor)



export default ComprasFabricante;

