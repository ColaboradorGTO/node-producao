import { Router } from 'express';
import admEstoqueRoutes from '../Administrativo/Estoque/routes/index.js';
import admPagamentosRoutes from '../Administrativo/Pagamentos/routes/index.js';
import admRecebimentosRoutes from '../Administrativo/Recebimentos/routes/index.js';
import admVendasRoutes from '../Administrativo/Vendas/routes/index.js';
import AdministrativoBalanco from '../Administrativo/Balanco/routes/index.js';

import authRoutes from '../Auth/routes/auth.js';


// import GerenciaMovimentoCaixa from '../Gerencia/MovimentoCaixa/routes/moimentoCaixaRoutes.js';
// import GerenciaAlteracaoPreco from '../Gerencia/AlteracaoPreco/routes/gerenciaRoutes.js';
// import GerenciaMalote from '../Gerencia/Malote/routes/maloteRoutes.js';
// import GerenciaClientes from '../Gerencia/cliente/routes/clienteRoutes.js';

const routes = Router();


routes.get('/', (req, res) => {
    res.send('Hello World! Myltiane');
});

// Adiministrativo
routes.use(AdministrativoBalanco);
routes.use(admEstoqueRoutes);
routes.use(admPagamentosRoutes);
routes.use(admRecebimentosRoutes);
routes.use(admVendasRoutes);

//Gerencia
// routes.use(GerenciaAlteracaoPreco);
// routes.use(GerenciaMovimentoCaixa);
// routes.use(GerenciaMalote);
// routes.use(GerenciaClientes);

export default routes;

