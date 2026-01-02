import { Router } from 'express';
import RelatorioBIController from '../controller/controllerRelatorioBi.js';

const InformaticaRelatorioBI = new Router();

InformaticaRelatorioBI.post('/createRelatorioInformaticaBI', RelatorioBIController.postRelatorioBi)
InformaticaRelatorioBI.put('/relatorioInformaticaBI/:id',  RelatorioBIController.putRelatorioBi)
InformaticaRelatorioBI.get('/relatorioInformaticaBI',  RelatorioBIController.getListaRelatorioBI)


export default InformaticaRelatorioBI
