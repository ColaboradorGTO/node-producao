import { Router } from 'express';
import CompradorControllers from '../controller/compradorController.js';

const ComprasComprador  = new Router();

ComprasComprador.get('/compradores', CompradorControllers.getListaCompradores)

export default ComprasComprador;

