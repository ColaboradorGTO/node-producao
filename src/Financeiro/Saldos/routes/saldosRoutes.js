import { Router } from 'express';
import SaldosControllers from '../controllers/saldos.js'; 

const FianceiroSaldos = new Router();

FianceiroSaldos.get('/movimento-saldo-bonificacao', SaldosControllers.getListaExtratoBonificacaoById)
FianceiroSaldos.get('/saldo-loja-por-grupo', SaldosControllers.getListaSaldoExtratoLoja)
FianceiroSaldos.post('/criar-movimento-saldo-bonificacao', SaldosControllers.postMovimentoSaldoBonificacao)


export default FianceiroSaldos;

