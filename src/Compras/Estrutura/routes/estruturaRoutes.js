import { Router } from 'express';
import EstruturaControllers from '../controller/estruturaController.js';

const ComprasEstrutura = new Router();

ComprasEstrutura.get('/grupoEstrutura', EstruturaControllers.getListaGrupoEstrutura)

ComprasEstrutura.put('/sub-grupo-estrutura/:id', EstruturaControllers.putSubGrupoEstrutura)
ComprasEstrutura.put('/grupo-estrutura/:id', EstruturaControllers.putGrupoEstrutura)
ComprasEstrutura.post('/cadastro-sub-grupo-estrutura', EstruturaControllers.postSubGrupoEstrutura)
ComprasEstrutura.post('/cadastro-grupoEstrutura', EstruturaControllers.postGrupoEstrutura)

export default ComprasEstrutura;

