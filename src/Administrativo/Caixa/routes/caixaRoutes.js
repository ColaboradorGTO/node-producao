import { Router } from 'express';
import ADMCaixasControllers from '../controllers/admCaixas.js';

const AdministrativoCaixa = new Router();

AdministrativoCaixa.get('/listaCaixasMovimento', ADMCaixasControllers.getListaCaixasMovimento)
AdministrativoCaixa.get('/quebra-caixa-loja-resumo', ADMCaixasControllers.getListaQuebraCaixaResumoADM)
AdministrativoCaixa.get('/listaCaixasFechados', ADMCaixasControllers.getretornoListaCaixasFechados)
AdministrativoCaixa.get('/pesquisa-movimento-caixa', ADMCaixasControllers.getpesquisaMovimentoDeCaixa)

export default AdministrativoCaixa;

