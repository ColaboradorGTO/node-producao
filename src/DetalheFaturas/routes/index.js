import { Router } from 'express';
import DetalheFaturasControllers from '../controllers/Detalhes.js';

const DespesasFaturasRoutes = new Router();

DespesasFaturasRoutes.get('/detalheFaturaGerencia', DetalheFaturasControllers.getDetalheFatura)
DespesasFaturasRoutes.get('/detalhe-faturas', DetalheFaturasControllers.getDetalheFaturaFinanceiro)
DespesasFaturasRoutes.get('/detalhe-Fatura-id', DetalheFaturasControllers.getDetalheFaturaById)
DespesasFaturasRoutes.put('/atualizar-fatura', DetalheFaturasControllers.putFatura)
DespesasFaturasRoutes.post('/criar-detalhe-fatura', DetalheFaturasControllers.postDetalheFaturaLoja)
DespesasFaturasRoutes.put('/atualizar-detalhe-fatura-loja', DetalheFaturasControllers.putDetalheFaturaLoja)

export default DespesasFaturasRoutes;