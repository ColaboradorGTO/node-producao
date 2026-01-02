import { Router } from 'express';
import PagamentoControllers from '../controller/pagamentoController.js';

const InformaticaPagamento  = new Router();

InformaticaPagamento.get('/pagamento-tef-informatica', PagamentoControllers.getListaPagamentoTEFInformatica)
InformaticaPagamento.get('/pagamento-pos-informatica', PagamentoControllers.getListaPagamentoPOSInformatica)
InformaticaPagamento.get('/lista-meio-pagamento-credsystem', PagamentoControllers.getListaMeioPagamentoCredSystem)

export default InformaticaPagamento;

