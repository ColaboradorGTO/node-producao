import { Router } from 'express';
import EmpresaControllers from '../controller/empresaController.js';

const ComercialEmpresa  = new Router();

ComercialEmpresa.get('/listaEmpresaComercial', EmpresaControllers.getListaEmpresaComercial)

export default ComercialEmpresa;

