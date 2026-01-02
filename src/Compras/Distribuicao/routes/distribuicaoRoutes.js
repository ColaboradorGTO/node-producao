import { Router } from 'express';
import DistribuicaoControllers from '../controller/distribuicaoController.js';

const ComprasDistribuicao  = new Router();

ComprasDistribuicao.get('/distribuicaoComprasHistorico', DistribuicaoControllers.getListaDistribuicaoHistorico)
ComprasDistribuicao.get('/detalheDistribuicaoCompras', DistribuicaoControllers.getListaDetalheDistribuicao)
ComprasDistribuicao.get('/distribuicaoSugestoesHistorico', DistribuicaoControllers.getListaDistribuicaoSugestoesHistorico)

export default ComprasDistribuicao;

