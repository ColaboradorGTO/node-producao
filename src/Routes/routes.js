import { Router } from 'express';
import admEstoqueRoutes from '../Administrativo/Estoque/routes/index.js';
import admPagamentosRoutes from '../Administrativo/Pagamentos/routes/index.js';
import admRecebimentosRoutes from '../Administrativo/Recebimentos/routes/index.js';
import admVendasRoutes from '../Administrativo/Vendas/routes/index.js';
import AdministrativoBalanco from '../Administrativo/Balanco/routes/index.js';

import authRoutes from '../Auth/routes/auth.js';



const routes = Router();
// Adiministrativo
routes.use(AdministrativoBalanco);
routes.use(admEstoqueRoutes);
routes.use(admPagamentosRoutes);
routes.use(admRecebimentosRoutes);
routes.use(admVendasRoutes);

export default routes;

