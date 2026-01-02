import { Router } from "express";
import LinkRelatorioBiController from '../controllers/controllersLinkRelatorioBi.js'

const InformaticaLinkRelatorioBi = new Router();

InformaticaLinkRelatorioBi.post('/criarlinkRelatorioBI', LinkRelatorioBiController.postLinkRelatorioBi)
InformaticaLinkRelatorioBi.put('/linkRelatorioBI/:id', LinkRelatorioBiController.putLinkRelatorioBi)
InformaticaLinkRelatorioBi.get('/linkRelatorioBI', LinkRelatorioBiController.getListaLinkRelatorioBI)

export default InformaticaLinkRelatorioBi;