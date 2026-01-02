import { Router } from 'express';
import TecidosControllers from '../controller/tecidosController.js';

const ComprasTecidos  = new Router();

ComprasTecidos.get('/tipoTecidos', TecidosControllers.getListaTipoTecidos)
ComprasTecidos.get('/tipo-tecido', TecidosControllers.getListaTipoTecidoSelect)
ComprasTecidos.put('/tipo-tecido/:id', TecidosControllers.putTipoTecidos)
ComprasTecidos.post('/cadastrar-tipo-tecido', TecidosControllers.postTipoTecidos)

export default ComprasTecidos;

