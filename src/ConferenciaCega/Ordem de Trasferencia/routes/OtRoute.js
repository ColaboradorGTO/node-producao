import { Router } from 'express';
import OrdemTrasfereneciaControllers from '../controller/OtController.js';

const ConferenciaCegaOrdemTrasferenecia  = new Router();

ConferenciaCegaOrdemTrasferenecia.get('/listaOrdemTransferenciaConferenciaCega', OrdemTrasfereneciaControllers.getListaOrdemTransferenciaConferenciaCega)
ConferenciaCegaOrdemTrasferenecia.get('/detalhe-ordem-transferencia-cega', OrdemTrasfereneciaControllers.getDetalheOrdemTransferenciaConferenciaCega)
ConferenciaCegaOrdemTrasferenecia.put('/resumo-ordem-transferencia-cega/:id', OrdemTrasfereneciaControllers.putResumoOrdemTransferencia)

export default ConferenciaCegaOrdemTrasferenecia;

