import { Router } from 'express';
import PromocaoControllers from '../controller/promocoesController.js';

const PromocaoRoutes  = new Router();

PromocaoRoutes.get('/promocoes-ativas', PromocaoControllers.getListaPromocoesAtivas)
PromocaoRoutes.get('/detalhe-promocoes-ativas', PromocaoControllers.getListaDetalhesPromocoesAtivas)
PromocaoRoutes.get('/produto-promocao-ativa', PromocaoControllers.getListaProdutosPromocoesAtiva)
PromocaoRoutes.get('/produto-promocao-destino', PromocaoControllers.getListaProdutosDestinoPromocoesAtiva)
PromocaoRoutes.get('/produto-promocao-origem', PromocaoControllers.getListaProdutosOrigemPromocoesAtiva)
PromocaoRoutes.get('/empresa-promocoes-ativas', PromocaoControllers.getListaEmpresasPromocoesAtiva)
//PromocaoRoutes.get('/empresa-promocoes-ativas', PromocaoControllers.getListaEmpresasPromocoesAtiva)

PromocaoRoutes.post('/criar-promocoes-ativas', PromocaoControllers.postPromocao)
PromocaoRoutes.put('/promocoes-ativas/:id', PromocaoControllers.putPromocao)
PromocaoRoutes.put('/desativar-produto-promocao-destino', PromocaoControllers.putProdutoDestinoPromocao)
PromocaoRoutes.put('/desativar-produto-promocao-origem', PromocaoControllers.putProdutoOrigemPromocao)
PromocaoRoutes.put('/desativar-empresa-promocao', PromocaoControllers.putEmpresaPromocao)
//PromocaoRoutes.put('/desativar-empresa-promocao', PromocaoControllers.putEmpresaPromocao)*/
export default PromocaoRoutes;

