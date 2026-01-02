import { Router } from 'express';
import PedidosControllers from '../controller/pedidosController.js';

const ComprasPedidos = new Router();

ComprasPedidos.get('/listaTodosPedidos', PedidosControllers.getListaTodosPedidos)
ComprasPedidos.get('/listaPedidosDetalhado', PedidosControllers.getListaPedidosDetalhado)
ComprasPedidos.get('/listaDetalhePedidos', PedidosControllers.getListaDetalhePedidosGrade)
ComprasPedidos.get('/lista-detalhe-pedidos', PedidosControllers.getListaDetalhePedidos)
ComprasPedidos.get('/pedido-compras', PedidosControllers.getListaPedidos)
ComprasPedidos.get('/ultimo-pedido', PedidosControllers.getListaUltimoPedido)
ComprasPedidos.get('/produtos-pedido', PedidosControllers.getListaProdutoPedido)
ComprasPedidos.get('/categoriaPedidos', PedidosControllers.getListaCategoriaPedidos)
ComprasPedidos.get('/categoria-pedido', PedidosControllers.getListaCategoriaPedido)
ComprasPedidos.get('/tamanhosPedidos', PedidosControllers.getListaTamanhosPedidos)
ComprasPedidos.get('/vinculo-tamanho-categoria', PedidosControllers.getListaTamanhosCategoriaPedidos)
ComprasPedidos.put('/categoriaPedidos/:id', PedidosControllers.putCategoriaPedidos)
ComprasPedidos.put('/finalizar-pedido/:id', PedidosControllers.putFinalizarPedido)
ComprasPedidos.put('/atualizar-pedido/:id', PedidosControllers.putPedido)
ComprasPedidos.post('/criar-categoria-pedidos', PedidosControllers.postCategoriaPedidos)
ComprasPedidos.post('/cadastro-vinculo-tamanho-categoria', PedidosControllers.postVinculoCategoriaPedido)
ComprasPedidos.post('/finalizar-pedido', PedidosControllers.postFinalizarPedido)
ComprasPedidos.post('/pedido', PedidosControllers.postPedido)

export default ComprasPedidos;

