import { Router } from 'express';
import LogsControllers from '../controllers/log.js';

const LogsUsuariosRoutes = new Router();

LogsUsuariosRoutes.get('/lista-log-web', LogsControllers.getListaLogsUsuario)
LogsUsuariosRoutes.post('/log-web', LogsControllers.postLogsUsuario)

export default LogsUsuariosRoutes;

