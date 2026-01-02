import { Router } from 'express';
import ResumoVoucherControllers from '../controllers/index.js';

const ResumoVoucherRoutes = new Router();

ResumoVoucherRoutes.get('/resumoDetalheVoucher', ResumoVoucherControllers.getResumoDetalheVoucher)
ResumoVoucherRoutes.get('/detalhe-voucher', ResumoVoucherControllers.getListaVoucherGerencia)
ResumoVoucherRoutes.get('/detalheVoucherDados', ResumoVoucherControllers.getListaDetalheVoucherDados)
ResumoVoucherRoutes.get('/detalheNumeroVoucherDados', ResumoVoucherControllers.getDetalheNumeroVoucherDados)
ResumoVoucherRoutes.get('/empresasVoucher', ResumoVoucherControllers.getListaEmpresasVoucher)
ResumoVoucherRoutes.get('/detalhesVouchersId', ResumoVoucherControllers.getDetalheIDVoucherDadosModal)
ResumoVoucherRoutes.get('/detalheIDVoucherDados', ResumoVoucherControllers.getDetalheIDVoucherDados)
ResumoVoucherRoutes.get('/cliente-todos', ResumoVoucherControllers.getListaTodosClientes)

//ResumoVoucherRoutes.get('/detalheNumeroVoucherDados', ResumoVoucherControllers.getListaVoucherCompleto)
ResumoVoucherRoutes.post('/auth-funcionario-status', ResumoVoucherControllers.autorizacaoEditarStatusVoucher)
ResumoVoucherRoutes.post('/auth-funcionario-create-voucher', ResumoVoucherControllers.postAuthFuncionarioCreateVoucher)
ResumoVoucherRoutes.post('/auth-funcionario-print-voucher', ResumoVoucherControllers.postAuthFuncionarioPrintVoucher)
ResumoVoucherRoutes.post('/auth-funcionario-update-voucher', ResumoVoucherControllers.postAuthFuncionarioUpdateVoucher)
ResumoVoucherRoutes.post('/todos-cliente/:id', ResumoVoucherControllers.putCliente)
ResumoVoucherRoutes.post('/criar-cliente', ResumoVoucherControllers.postCliente)
ResumoVoucherRoutes.post('/todos-web', ResumoVoucherControllers.postResumoVoucher)
ResumoVoucherRoutes.post('/todos-web/:id', ResumoVoucherControllers.putResumoVoucher)

export default ResumoVoucherRoutes;