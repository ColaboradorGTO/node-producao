import { Router } from 'express' ;
import CaixaControllers from '.././controllers/controllersCaixas.js'

const InformaticaCaixas = new Router();

InformaticaCaixas.post('/criar-caixas', CaixaControllers.postCaixaLojas)
InformaticaCaixas.put('/lista-caixas/:id', CaixaControllers.putCaixaLoja)
InformaticaCaixas.put('/atualiza-empresa-diario/:id', CaixaControllers.putAtualizaEmpresaDiario)
InformaticaCaixas.put('/atualizar-todos-caixa', CaixaControllers.putAtualizarTodosCaixas)
InformaticaCaixas.get('/lista-caixas', CaixaControllers.getListaCaixas)
InformaticaCaixas.get('/listaCaixasID', CaixaControllers.getListaCaixasID)

export default InformaticaCaixas
