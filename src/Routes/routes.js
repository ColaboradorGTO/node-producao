import { Router } from 'express';
import admEstoqueRoutes from '../Administrativo/Estoque/routes/index.js';
import admPagamentosRoutes from '../Administrativo/Pagamentos/routes/index.js';
import admRecebimentosRoutes from '../Administrativo/Recebimentos/routes/index.js';
import admVendasRoutes from '../Administrativo/Vendas/routes/index.js';
import AdministrativoBalanco from '../Administrativo/Balanco/routes/index.js';

import authRoutes from '../Auth/routes/auth.js';

import AdmVendasControllers from '../Administrativo/Vendas/controllers/admVendas.js';

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

// import GerenciaMovimentoCaixa from '../Gerencia/MovimentoCaixa/routes/moimentoCaixaRoutes.js';
// import GerenciaAlteracaoPreco from '../Gerencia/AlteracaoPreco/routes/gerenciaRoutes.js';
// import GerenciaMalote from '../Gerencia/Malote/routes/maloteRoutes.js';
// import GerenciaClientes from '../Gerencia/cliente/routes/clienteRoutes.js';

const routes = Router();


routes.get('/', (req, res) => {
    res.send('Hello World! Myltiane');
});

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

// Adiministrativo


//Gerencia
// routes.use(GerenciaAlteracaoPreco);
// routes.use(GerenciaMovimentoCaixa);
// routes.use(GerenciaMalote);
// routes.use(GerenciaClientes);

export default routes;

