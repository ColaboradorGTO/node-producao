import { Router } from 'express';
import admEstoqueRoutes from '../Administrativo/Estoque/routes/index.js';
import admPagamentosRoutes from '../Administrativo/Pagamentos/routes/index.js';
import admRecebimentosRoutes from '../Administrativo/Recebimentos/routes/index.js';
import admVendasRoutes from '../Administrativo/Vendas/routes/index.js';
import AdministrativoBalanco from '../Administrativo/Balanco/routes/index.js';

import authRoutes from '../Auth/routes/auth.js';

import cadastroRoutes from '../Cadastro/routes/cadastro.js';

import categoriaRoutes from '../CategoriaReceita/routes/index.js';

//import comercialRoutes from '../Comercial/routes/comercialRoutes.js';
import comercialProdutoRoutes from '../Comercial/Produto/routes/index.js';

import FianceiroAdiantamentos from '../Financeiro/Adiantamentos/routes/routesAdiantamento.js';
import FinanFinanceiroCaixas from '../Financeiro/Caixas/routes/routesCaixa.js';
import FinanceiroDepositos from '../Financeiro/Depositos/routes/DepositosRoutes.js';
import FinanceiroDesconto from '../Financeiro/Desconto/routes/descontoRoutes.js';
import FinanceiroDespesas from '../Financeiro/Despesas/routes/despesasRoutes.js';
import FinanceiroDevolucao from '../Financeiro/Devolucao/routes/devolucaoRoutes.js';
import FinanceiroEstabelecimentos from '../Financeiro/Estabelecimentos/routes/estabeecimentosRoutes.js';
import FinanceiroExtrato from '../Financeiro/Extrato/routes/extratoRoutes.js';
import FinanceiroFaturas from '../Financeiro/Faturas/routes/faturasRoutes.js';
import FinanceiroMalotes from '../Financeiro/Malotes/routes/maloteLojaSchema.js';
import FinanceiroPedidos from '../Financeiro/Pedidos/routes/pedidosRoutes.js';
import FianceiroSaldos from '../Financeiro/Saldos/routes/saldosRoutes.js';
import FinanceiroVendas from '../Financeiro/Vendas/routes/Vendasroutes.js';
import FianceiroVoucher from '../Financeiro/Voucher/routes/voucherRoutes.js';
import FinanceiroDetalhes from '../Financeiro/Detalhes/routes/detalhesRoutes.js';
import FinanceiroBanco from '../Financeiro/Banco/routes/bancoRoutes.js';

import GerenciaMovimentoCaixa from '../Gerencia/MovimentoCaixa/routes/moimentoCaixaRoutes.js';
import GerenciaAlteracaoPreco from '../Gerencia/AlteracaoPreco/routes/gerenciaRoutes.js';
import GerenciaMalote from '../Gerencia/Malote/routes/maloteRoutes.js';
import GerenciaClientes from '../Gerencia/cliente/routes/clienteRoutes.js';

import AdministrativoCaixa from '../Administrativo/Caixa/routes/caixaRoutes.js';
import AdministrativoDesconto from '../Administrativo/Desconto/routes/descontoRoutes.js';
import AdministrativoEstoque from '../Administrativo/Estoque/routes/index.js';
import AdministrativoPagamentos from '../Administrativo/Pagamentos/routes/index.js';
import AdministrativoRecebimentos from '../Administrativo/Recebimentos/routes/index.js';
import AdministrativoVendas from '../Administrativo/Vendas/routes/index.js';
import AdministrativoVouchers from '../Administrativo/Vouchers/routes/routes.js';
import AdministrativoExtrato from '../Administrativo/Extrato/routes/extratoRoutes.js';
import AdministrativoDespesas from '../Administrativo/Despesa/routes/despesasRoutes.js';
import AdministrativoConta from '../Administrativo/Conta/routes/contaRoutes.js';

import InformaticaCaixas from '../Informatica/caixas/routes/caixas.js';
import InformaticaCliente from '../Informatica/cliente/routes/clienteRoutes.js';
import InformaticaEmpresa from '../Informatica/Empresas/routes/empresaRoutes.js';
import InformaticaFuncionarios from '../Informatica/Funcionarios/routes/funcionarios.js';
import InformaticaMarcas from '../Informatica/Marcas/routes/marcasRoutes.js';
import InformaticaPagamento from '../Informatica/pagamento/routes/pagamentoRoutes.js';
import InformaticaProdutos from '../Informatica/Produtos/routes/produtoRoutes.js';
import InformaticaLinkRelatorioBi from '../Informatica/relatorio/linkRelatorioBI/routes/index.js';
import InformaticaRelatorioBI from '../Informatica/relatorio/ralatoriaBI/routes/index.js';
import InformaticaVendas from '../Informatica/vendas/routes/vendasRoutes.js';
import InformaticaParceria from '../Informatica/parceria/routes/parceriaRoutes.js';
import ContabilidadeVendas from '../Contabilidade/Vendas/routes/vendaRoutes.js';
import ComercialEmpresa from '../Comercial/Empresa/routes/empresaRoutes.js';
import ComercialFuncionarios from '../Comercial/Funcionarios/routes/funcionarioRoutes.js';
import ComercialMetas from '../Comercial/Metas/routes/metasRoutes.js';
import ComercialPremiacoes from '../Comercial/Premiacoes/routes/premiacoesRoutes.js';
import PromocaoRoutes from '../Promocao/Promocao/routes/promocoesRoutes.js';
import PromocaoMecanica from '../Promocao/Mecanica/routes/mecanicaRoutes.js';
import ComprasPedidos from '../Compras/Pedidos/routes/pedidosRoutes.js';
import ComprasPromocao from '../Compras/Promocao/routes/promocaoRoutes.js';
import ComprasProdutos from '../Compras/produto/routes/produtoRoutes.js';
import ComprasFornecedores from '../Compras/Fornecedores/routes/fornecedoresRoutes.js';
import ComprasFabricante from '../Compras/Fabricante/routes/fabricanteRoutes.js';
import ComprasComprador from '../Compras/comprador/routes/compradorRoutes.js';
import ComprasPagamento from '../Compras/Pagamento/routes/pagamentoRoutes.js';
import ComprasTrasportador from '../Compras/Transportador/routes/trasportadorRoutes.js';
import ComprasMercadoria from '../Compras/Mercadoria/routes/mercadoriaRoutes.js';
import ComprasTipoDocumento from '../Compras/TipoDocumento/routes/documentoRoutes.js';
import ComprasEstrutura from '../Compras/Estrutura/routes/estruturaRoutes.js';
import ComprasMedidas from '../Compras/Medidas/routes/medidasRoutes.js';
import ComprasTecidos from '../Compras/Tecidos/routes/tecidosRoutes.js';
import ComprasCores from '../Compras/Cores/routes/coresRoutes.js';
import ComprasEstilo from '../Compras/Estilo/routes/estiloRoutes.js';
import ComprasExposicao from '../Compras/Exposicao/routes/exposicaoRoutes.js';
import ComprasDistribuicao from '../Compras/Distribuicao/routes/distribuicaoRoutes.js';
import ComprasTamanho from '../Compras/Tamanho/routes/tamanhoRoutes.js';
import ConferenciaCegaOrdemTrasferenecia from '../ConferenciaCega/Ordem de Trasferencia/routes/OtRoute.js';
import ConferenciaCegaDivergencia from '../ConferenciaCega/Divergencia/routes/divergenciaRoutes.js';
import MarketingCampanha from '../Marketing/Campanha/routes/campanhaRoutes.js';
import MarketingPromocao from '../Marketing/Promocao/routes/promocaoRoutes.js';
import CadastroRoutes from '../Cadastro/routes/cadastro.js';
import ConfiguracaoPIXRoutes from '../ConfiguracaoPIX/routes/configuracaoPIXRoutes.js';
import ContaBancoRoutes from '../ContaBanco/routes/index.js';
import categoriaReceitaRoutes from '../CategoriaReceita/routes/index.js';
import DespesasRoutes from '../Despesas/routes/index.js';
import DespesasFaturasRoutes from '../DetalheFaturas/routes/index.js';
import FuncionariosRoutes from '../Funcionarios/routes/funcionario.js';
import LogsUsuariosRoutes from '../LogsUsuario/routes/logsUsuariosRoutes.js';
import ProdutosRoutes from '../Produtos/routes/produto.js';
import ModulosRoutes from '../Modulos/routes/index.js';
import ResumoVoucherRoutes from '../ResumoVoucher/routes/resumoVoucher.js';
import VendasRoutes from '../Vendas/routes/vendas.js';


const routes = Router();
// Adiministrativo
routes.use(AdministrativoBalanco);
routes.use(admEstoqueRoutes);
routes.use(admPagamentosRoutes);
routes.use(admRecebimentosRoutes);
routes.use(admVendasRoutes);

//Auth
routes.use(authRoutes);

//Cadastro
routes.use(cadastroRoutes);

//Categoria
routes.use(categoriaRoutes);

//Comercial
//routes.use(comercialRoutes);
routes.use(comercialProdutoRoutes);

//Financeiro
routes.use(FianceiroAdiantamentos);
routes.use(FinanFinanceiroCaixas);
routes.use(FinanceiroDepositos);
routes.use(FinanceiroDesconto);
routes.use(FinanceiroDespesas);
routes.use(FinanceiroDevolucao);
routes.use(FinanceiroEstabelecimentos);
routes.use(FinanceiroExtrato);
routes.use(FinanceiroFaturas);
routes.use(FinanceiroMalotes);
routes.use(FinanceiroPedidos);
routes.use(FianceiroSaldos);
routes.use(FinanceiroVendas);
routes.use(FianceiroVoucher);
routes.use(FinanceiroDetalhes);
routes.use(FinanceiroBanco);

//Gerencia
routes.use(GerenciaAlteracaoPreco);
routes.use(GerenciaMovimentoCaixa);
routes.use(GerenciaMalote);
routes.use(GerenciaClientes);


//Administrativo
routes.use(AdministrativoBalanco);
routes.use(AdministrativoCaixa);
routes.use(AdministrativoDesconto);
routes.use(AdministrativoEstoque);
routes.use(AdministrativoPagamentos);
routes.use(AdministrativoRecebimentos);
routes.use(AdministrativoVendas)
routes.use(AdministrativoVouchers)
routes.use(AdministrativoExtrato)
routes.use(AdministrativoDespesas)
routes.use(AdministrativoConta)

//Informatica
routes.use(InformaticaCaixas)
routes.use(InformaticaCliente)
routes.use(InformaticaEmpresa)
routes.use(InformaticaFuncionarios)
routes.use(InformaticaMarcas)
routes.use(InformaticaPagamento)
routes.use(InformaticaProdutos)
routes.use(InformaticaLinkRelatorioBi)
routes.use(InformaticaRelatorioBI)
routes.use(InformaticaVendas)
routes.use(InformaticaParceria)

//Contabilidade
routes.use(ContabilidadeVendas);

//Comercial
routes.use(ComercialEmpresa);
routes.use(ComercialFuncionarios);
routes.use(ComercialMetas);
routes.use(ComercialPremiacoes);

//Promocao
routes.use(PromocaoRoutes);
routes.use(PromocaoMecanica);

//Compras
routes.use(ComprasPedidos);
routes.use(ComprasPromocao);
routes.use(ComprasProdutos);
routes.use(ComprasFornecedores);
routes.use(ComprasFabricante);
routes.use(ComprasComprador);
routes.use(ComprasPagamento);
routes.use(ComprasTrasportador);
routes.use(ComprasMercadoria);
routes.use(ComprasTipoDocumento);
routes.use(ComprasEstrutura);
routes.use(ComprasMedidas);
routes.use(ComprasTecidos);
routes.use(ComprasCores);
routes.use(ComprasEstilo);
routes.use(ComprasExposicao);
routes.use(ComprasDistribuicao);
routes.use(ComprasTamanho);

//Conferencia Cega
routes.use(ConferenciaCegaOrdemTrasferenecia)
routes.use(ConferenciaCegaDivergencia)

//Marketing
routes.use(MarketingCampanha)
routes.use(MarketingPromocao)

//Cadastro
routes.use(CadastroRoutes);

//Configuracao PIX
routes.use(ConfiguracaoPIXRoutes);

//Conta Banco
routes.use(ContaBancoRoutes)

// Cateegoria Receita
routes.use(categoriaReceitaRoutes);

//Despesas
routes.use(DespesasRoutes);

// Detalhes Faturas
routes.use(DespesasFaturasRoutes);

//Funcionarios
routes.use(FuncionariosRoutes);

//Logs Usuarios
routes.use(LogsUsuariosRoutes);

//Produtos 
routes.use(ProdutosRoutes);

//Modulos
routes.use(ModulosRoutes);

//Resumo Voucher
routes.use(ResumoVoucherRoutes)

//Vendas
routes.use(VendasRoutes);
export default routes;

