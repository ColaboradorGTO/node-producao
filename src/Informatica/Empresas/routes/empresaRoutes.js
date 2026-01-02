import { Router } from 'express';
import EmpresaControllers from '../controller/empresaController.js';

const InformaticaEmpresa  = new Router();

InformaticaEmpresa.get('/listaEmpresasControleTransferencia', EmpresaControllers.getListaEmpresas)
InformaticaEmpresa.get('/listaEmpresasIformatica', EmpresaControllers.getListaEmpresasInformatica)
InformaticaEmpresa.get('/listaGrupoEmpresas', EmpresaControllers.getListaGrupoEmpresas)
InformaticaEmpresa.get('/atualiza-empresa-diario', EmpresaControllers.getListaAtualizaEmpresaDiario)

export default InformaticaEmpresa;

