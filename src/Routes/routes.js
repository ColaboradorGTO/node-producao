import { Router } from 'express';
import admEstoqueRoutes from '../Administrativo/Estoque/routes/index.js';
import admPagamentosRoutes from '../Administrativo/Pagamentos/routes/index.js';
import admRecebimentosRoutes from '../Administrativo/Recebimentos/routes/index.js';
import admVendasRoutes from '../Administrativo/Vendas/routes/index.js';
import AdministrativoBalanco from '../Administrativo/Balanco/routes/index.js';

import authRoutes from '../Auth/routes/auth.js';

import AdmVendasControllers from '../Administrativo/Vendas/controllers/admVendas.js';

// import GerenciaMovimentoCaixa from '../Gerencia/MovimentoCaixa/routes/moimentoCaixaRoutes.js';
// import GerenciaAlteracaoPreco from '../Gerencia/AlteracaoPreco/routes/gerenciaRoutes.js';
// import GerenciaMalote from '../Gerencia/Malote/routes/maloteRoutes.js';
// import GerenciaClientes from '../Gerencia/cliente/routes/clienteRoutes.js';

const routes = Router();


routes.get('/', (req, res) => {
    res.send('Hello World! Myltiane');
});

// Adiministrativo

routes.get('/venda-total-forma-pagamento', AdmVendasControllers.getRecebimentosFormaPagamento)
routes.get('/venda-total-recebido-periodo-adm', AdmVendasControllers.getListaVendaTotalRecebido)
routes.get('/venda-vendedor-adm', AdmVendasControllers.getVendaVendedorAction);
routes.get('/venda-ativa', AdmVendasControllers.getListaVendaAtiva);
routes.get('/lista-venda/:id', AdmVendasControllers.getListaVendasById)
routes.get('/lista-venda-cliente', AdmVendasControllers.getListaVendaCliente);
routes.get('/vendaConvenio', AdmVendasControllers.getVendaConvenio)
routes.get('/vendaAtiva', AdmVendasControllers.getVendaAtiva)
routes.get('/vendaContigencia', AdmVendasControllers.getListaVendasContigenciaPorEmpresa)
routes.get('/vendaCanceladaEmpresa', AdmVendasControllers.getVendaCancelada30Minutos)
routes.get('/vendaCanceladaWeb', AdmVendasControllers.getVendaCanceladaWeb)
routes.get('/vendaCanceladaEmitidaPDV', AdmVendasControllers.getVendaCanceladaEmitidaPDV)
routes.get('/vendaAtivaCliente', AdmVendasControllers.getListaClientesVendas)
routes.get('/vendaAtivaResumo', AdmVendasControllers.getVendaAtivaResumo)
routes.get('/vendaAtivaAction', AdmVendasControllers.getVendaAtivaAction)
routes.get('/vendaCancelada', AdmVendasControllers.getVendaCancelada)
routes.get('/vendaCanceladaResumo', AdmVendasControllers.getVendaCanceladaResumo)
routes.get('/vendaCanceladaResumo', AdmVendasControllers.getListaVendasDetalheAlterar)
routes.get('/resumoVendaConvenio', AdmVendasControllers.getResumoVendaConvenio)
routes.get('/resumoVendaConveniodesconto', AdmVendasControllers.getResumoVendaConvenioDesconto)
routes.get('/resumoVenda', AdmVendasControllers.getResumoVenda)
routes.get('/recebimento-resumo', AdmVendasControllers.getRetornoListaPagamentoVenda)
routes.get('/pagamentoTef', AdmVendasControllers.getRetornoListaPagamentoTEFSelect)
routes.get('/pagamentoPos', AdmVendasControllers.getRetornoListaPagamentoPOSSelect)
routes.get('/vendaTotalFormaPagamento', AdmVendasControllers.getRetornoListaRecebimentosFormaPagamento)
routes.get('/listaAlteracaoPreco', AdmVendasControllers.getListaAlteracaoPreco)
routes.get('/formaPagamentos', AdmVendasControllers.getListaFormaPagamento)

routes.put('/alterar-venda-pagamento/:id', AdmVendasControllers.putAlterarVendasPagamento);
routes.put('/venda-vendedor/:id', AdmVendasControllers.putVendaVendedor);


//Gerencia
// routes.use(GerenciaAlteracaoPreco);
// routes.use(GerenciaMovimentoCaixa);
// routes.use(GerenciaMalote);
// routes.use(GerenciaClientes);

export default routes;

