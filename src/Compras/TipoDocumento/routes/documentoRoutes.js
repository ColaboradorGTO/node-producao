import { Router } from 'express';
import TipoDocumentoControllers from '../controller/documentoController.js';

const ComprasTipoDocumento  = new Router();

ComprasTipoDocumento.get('/tipoDocumento', TipoDocumentoControllers.getListaTPDocumento)

export default ComprasTipoDocumento;

