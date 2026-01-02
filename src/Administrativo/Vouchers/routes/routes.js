import { Router } from 'express';
import AdmVouchersControllers from '../controllers/index.js';

const AdministrativoVouchers = new Router();

AdministrativoVouchers.get('/detalheVoucher', AdmVouchersControllers.getDetalheVoucher);
AdministrativoVouchers.get('/detalheProdutoVoucher', AdmVouchersControllers.getDetalheProdutoVoucher);
AdministrativoVouchers.get('/detalhe-voucher-dados-adm', AdmVouchersControllers.getListaDetalheVoucherDados);
AdministrativoVouchers.post('/editar-voucher/:id', AdmVouchersControllers.putEditarVoucher);

export default AdministrativoVouchers;