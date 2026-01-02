import { Router } from 'express';
import FinanceiroVendasControllers from '../controllers/vendas.js';

const FinanceiroVendas  = new Router();

FinanceiroVendas.get('/venda-periodo-loja', FinanceiroVendasControllers.getListaVendasLojaPeriodo)
FinanceiroVendas.get('/venda-digital', FinanceiroVendasControllers.getListaVendasDigital)
FinanceiroVendas.get('/venda-digital-marca', FinanceiroVendasControllers.getListaVendasDigitalMarca)
FinanceiroVendas.get('/venda-conciliacao', FinanceiroVendasControllers.getListaVendasConciliar)
FinanceiroVendas.get('/venda-total', FinanceiroVendasControllers.getListaVendasTotal)
FinanceiroVendas.get('/remessa-vendas', FinanceiroVendasControllers.getListaRemessaVendas)
FinanceiroVendas.get('/venda-pagamentos', FinanceiroVendasControllers.getListaVendasPagamentos)
FinanceiroVendas.get('/venda-pix-consolidado', FinanceiroVendasControllers.getListaVendasPixConsolidado)
FinanceiroVendas.get('/venda-pix-consolidado-loja', FinanceiroVendasControllers.getListaVendasPixConsolidadoLojas)
FinanceiroVendas.get('/venda-pix-periodo', FinanceiroVendasControllers.getListaVendasPixPeriodo)
FinanceiroVendas.get('/venda-total-empresa', FinanceiroVendasControllers.getListaVendasEmpresa)
FinanceiroVendas.get('/vendas-marca-periodo', FinanceiroVendasControllers.getListaVendasMarca)
FinanceiroVendas.get('/venda-recebido-eletronico', FinanceiroVendasControllers.getListaRecebimentosEletronico)
FinanceiroVendas.get('/vendas-total-mes', FinanceiroVendasControllers.getListaVendasTotalMes)
FinanceiroVendas.get('/vendas-total-loja-hora', FinanceiroVendasControllers.getListaVendasTotalLojaHora)
FinanceiroVendas.get('/vendas-total-loja-hora-ano-passado', FinanceiroVendasControllers.getListaVendasTotalLojaHoraAnoPassado)
FinanceiroVendas.get('/vendas-total-to', FinanceiroVendasControllers.getListaVendasTotalTO)
FinanceiroVendas.get('/vendaMarcaRob', FinanceiroVendasControllers.getListaVendasMarcaROB)
FinanceiroVendas.get('/vendaMarcaMarckup', FinanceiroVendasControllers.getListaVendasMarcaMarckup)
FinanceiroVendas.get('/venda-detalhe-recebimento-eletronico', FinanceiroVendasControllers.getListaDetalheRecebimentosEletronico)
FinanceiroVendas.get('/resumoVendaFinanceiro', FinanceiroVendasControllers.getListaVendasResumidaFinanceiro)
FinanceiroVendas.get('/vendaMarcaPeriodoFinanceiro', FinanceiroVendasControllers.getListaVendasMarcaFinanceiro)
FinanceiroVendas.put('/venda-pix-status-conferido', FinanceiroVendasControllers.putListaVendaPixStatusConferido) 

export default FinanceiroVendas;

