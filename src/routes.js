import { Router } from 'express';
import EmpresaControllers from './Informatica/Empresas/controller/empresaController.js';

const routes  = new Router();

routes.get('/', (req, res) => {
    res.send('Hello World! Myltiane');
});

routes.get('/listaEmpresasControleTransferencia', EmpresaControllers.getListaEmpresas)
routes.get('/listaEmpresasIformatica', EmpresaControllers.getListaEmpresasInformatica)
routes.get('/listaGrupoEmpresas', EmpresaControllers.getListaGrupoEmpresas)
routes.get('/atualiza-empresa-diario', EmpresaControllers.getListaAtualizaEmpresaDiario)


export default routes;