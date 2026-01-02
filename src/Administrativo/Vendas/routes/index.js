import { Router } from 'express';
import AdmVendasControllers from '../controllers/admVendas.js';

const AdministrativoVendas = new Router();

AdministrativoVendas.get('/venda-total-forma-pagamento', AdmVendasControllers.getRecebimentosFormaPagamento)
AdministrativoVendas.get('/venda-total-recebido-periodo-adm', AdmVendasControllers.getListaVendaTotalRecebido)
AdministrativoVendas.get('/venda-vendedor-adm', AdmVendasControllers.getVendaVendedorAction);
AdministrativoVendas.get('/venda-ativa', AdmVendasControllers.getListaVendaAtiva);
AdministrativoVendas.get('/lista-venda/:id', AdmVendasControllers.getListaVendasById)
AdministrativoVendas.get('/lista-venda-cliente', AdmVendasControllers.getListaVendaCliente);
AdministrativoVendas.get('/vendaConvenio', AdmVendasControllers.getVendaConvenio)
AdministrativoVendas.get('/vendaAtiva', AdmVendasControllers.getVendaAtiva)
AdministrativoVendas.get('/vendaContigencia', AdmVendasControllers.getListaVendasContigenciaPorEmpresa)
AdministrativoVendas.get('/vendaCanceladaEmpresa', AdmVendasControllers.getVendaCancelada30Minutos)
AdministrativoVendas.get('/vendaCanceladaWeb', AdmVendasControllers.getVendaCanceladaWeb)
AdministrativoVendas.get('/vendaCanceladaEmitidaPDV', AdmVendasControllers.getVendaCanceladaEmitidaPDV)
AdministrativoVendas.get('/vendaAtivaCliente', AdmVendasControllers.getListaClientesVendas)
AdministrativoVendas.get('/vendaAtivaResumo', AdmVendasControllers.getVendaAtivaResumo)
AdministrativoVendas.get('/vendaAtivaAction', AdmVendasControllers.getVendaAtivaAction)
AdministrativoVendas.get('/vendaCancelada', AdmVendasControllers.getVendaCancelada)
AdministrativoVendas.get('/vendaCanceladaResumo', AdmVendasControllers.getVendaCanceladaResumo)
AdministrativoVendas.get('/vendaCanceladaResumo', AdmVendasControllers.getListaVendasDetalheAlterar)
AdministrativoVendas.get('/resumoVendaConvenio', AdmVendasControllers.getResumoVendaConvenio)
AdministrativoVendas.get('/resumoVendaConveniodesconto', AdmVendasControllers.getResumoVendaConvenioDesconto)
AdministrativoVendas.get('/resumoVenda', AdmVendasControllers.getResumoVenda)
AdministrativoVendas.get('/recebimento-resumo', AdmVendasControllers.getRetornoListaPagamentoVenda)
AdministrativoVendas.get('/pagamentoTef', AdmVendasControllers.getRetornoListaPagamentoTEFSelect)
AdministrativoVendas.get('/pagamentoPos', AdmVendasControllers.getRetornoListaPagamentoPOSSelect)
AdministrativoVendas.get('/vendaTotalFormaPagamento', AdmVendasControllers.getRetornoListaRecebimentosFormaPagamento)
AdministrativoVendas.get('/listaAlteracaoPreco', AdmVendasControllers.getListaAlteracaoPreco)
AdministrativoVendas.get('/formaPagamentos', AdmVendasControllers.getListaFormaPagamento)

AdministrativoVendas.put('/alterar-venda-pagamento/:id', AdmVendasControllers.putAlterarVendasPagamento);
AdministrativoVendas.put('/venda-vendedor/:id', AdmVendasControllers.putVendaVendedor);

export default AdministrativoVendas;