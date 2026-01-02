import axios from 'axios';
import 'dotenv/config';
const url = process.env.API_URL;

export class PedidosClient {
    constructor(baseURL) {
        this.api = axios.create({
            baseURL: baseURL || url,
            timeout: 80000
        });
    }
    async atualizarCategoriaPedidos(
        IDCATEGORIAPEDIDO,
        DSCATEGORIAPEDIDO,
        TIPOPEDIDO,
        STATIVO
    ) {

        const response = await this.api.put(`${url}/api/compras/categoriapedidos.xsjs`, {
            IDCATEGORIAPEDIDO,
            DSCATEGORIAPEDIDO,
            TIPOPEDIDO,
            STATIVO
        });
        return response.data;
    }

    async atualizarFinalizarPedidos(
        IDRESUMOPEDIDO,
        IDGRUPOEMPRESARIAL,
        IDSUBGRUPOEMPRESARIAL,
        IDCOMPRADOR,
        IDCONDICAOPAGAMENTO,
        IDFORNECEDOR,
        IDTRANSPORTADORA,
        IDANDAMENTO,
        MODPEDIDO,
        NOVENDEDOR,
        EEMAILVENDEDOR,
        DTPEDIDO,
        DTPREVENTREGA,
        TPFRETE,
        DESCPERC01,
        DESCPERC02,
        DESCPERC03,
        PERCCOMISSAO,
        VRTOTALLIQUIDO,
        OBSPEDIDO,
        OBSPEDIDO2,
        DTFECHAMENTOPEDIDO,
        DTCADASTRO,
        TPARQUIVO,
        STDISTRIBUIDO,
        STAGRUPAPRODUTO,
        STCANCELADO,
        TPFISCAL,
        STRASCUNHO
    ) {
        const response = await this.api.put(`${url}/api/compras/finalizar-pedido.xsjs`, {
            IDRESUMOPEDIDO,
            IDGRUPOEMPRESARIAL,
            IDSUBGRUPOEMPRESARIAL,
            IDCOMPRADOR,
            IDCONDICAOPAGAMENTO,
            IDFORNECEDOR,
            IDTRANSPORTADORA,
            IDANDAMENTO,
            MODPEDIDO,
            NOVENDEDOR,
            EEMAILVENDEDOR,
            DTPEDIDO,
            DTPREVENTREGA,
            TPFRETE,
            DESCPERC01,
            DESCPERC02,
            DESCPERC03,
            PERCCOMISSAO,
            VRTOTALLIQUIDO,
            OBSPEDIDO,
            OBSPEDIDO2,
            DTFECHAMENTOPEDIDO,
            DTCADASTRO,
            TPARQUIVO,
            STDISTRIBUIDO,
            STAGRUPAPRODUTO,
            STCANCELADO,
            TPFISCAL,
            STRASCUNHO
        });
        return response.data;
    }

    async criarCategoriaPedidos(
        DSCATEGORIAPEDIDO,
        TIPOPEDIDO,
        STATIVO
    ) {
        const response = await this.api.post(`${url}/api/compras/categoriapedidos.xsjs`, {
            DSCATEGORIAPEDIDO,
            TIPOPEDIDO,
            STATIVO
        });
        return response.data;
    }

    async criarVinculoTamanhoCategoria(
        IDCATEGORIAPEDIDO,
        IDTAMANHO,
        STATIVO
    ) {
        const response = await this.api.post(`${url}/api/compras/vinctamcat.xsjs`, {
            IDCATEGORIAPEDIDO,
            IDTAMANHO,
            STATIVO
        });
        return response.data;
    }

    async criarFinalizarPedido(
        IDRESUMOPEDIDO,
        IDGRUPOEMPRESARIAL,
        IDSUBGRUPOEMPRESARIAL,
        IDCOMPRADOR,
        IDCONDICAOPAGAMENTO,
        IDFORNECEDOR,
        IDTRANSPORTADORA,
        IDANDAMENTO,
        MODPEDIDO,
        NOVENDEDOR,
        EEMAILVENDEDOR,
        DTPEDIDO,
        DTPREVENTREGA,
        TPFRETE,
        DESCPERC01,
        DESCPERC02,
        DESCPERC03,
        PERCCOMISSAO,
        VRTOTALLIQUIDO,
        OBSPEDIDO,
        OBSPEDIDO2,
        DTFECHAMENTOPEDIDO,
        DTCADASTRO,
        TPARQUIVO,
        STDISTRIBUIDO,
        STAGRUPAPRODUTO,
        STCANCELADO,
        TPFISCAL,
        STRASCUNHO
    ) {
        const response = await this.api.post(`${url}/api/compras/finalizar-pedido.xsjs`, {
            IDRESUMOPEDIDO,
            IDGRUPOEMPRESARIAL,
            IDSUBGRUPOEMPRESARIAL,
            IDCOMPRADOR,
            IDCONDICAOPAGAMENTO,
            IDFORNECEDOR,
            IDTRANSPORTADORA,
            IDANDAMENTO,
            MODPEDIDO,
            NOVENDEDOR,
            EEMAILVENDEDOR,
            DTPEDIDO,
            DTPREVENTREGA,
            TPFRETE,
            DESCPERC01,
            DESCPERC02,
            DESCPERC03,
            PERCCOMISSAO,
            VRTOTALLIQUIDO,
            OBSPEDIDO,
            OBSPEDIDO2,
            DTFECHAMENTOPEDIDO,
            DTCADASTRO,
            TPARQUIVO,
            STDISTRIBUIDO,
            STAGRUPAPRODUTO,
            STCANCELADO,
            TPFISCAL,
            STRASCUNHO
        });
        return response.data;
    }

    async criarPedido(
        IDGRUPOEMPRESARIAL,
        IDSUBGRUPOEMPRESARIAL,
        IDCOMPRADOR,
        IDCONDICAOPAGAMENTO,
        IDFORNECEDOR,
        IDTRANSPORTADORA,
        IDANDAMENTO,
        MODPEDIDO,
        NOVENDEDOR,
        EEMAILVENDEDOR,
        DTPEDIDO,
        DTPREVENTREGA,
        TPFRETE,
        DESCPERC01,
        DESCPERC02,
        DESCPERC03,
        PERCCOMISSAO,
        VRTOTALLIQUIDO,
        OBSPEDIDO,
        OBSPEDIDO2,
        DTFECHAMENTOPEDIDO,
        DTCADASTRO,
        TPARQUIVO,
        STDISTRIBUIDO,
        STAGRUPAPRODUTO,
        STCANCELADO,
        TPFISCAL,
        STRASCUNHO
    ) {
        const response = await this.api.post(`${url}/api/compras/lista_pedidos.xsjs`, {
            IDGRUPOEMPRESARIAL,
            IDSUBGRUPOEMPRESARIAL,
            IDCOMPRADOR,
            IDCONDICAOPAGAMENTO,
            IDFORNECEDOR,
            IDTRANSPORTADORA,
            IDANDAMENTO,
            MODPEDIDO,
            NOVENDEDOR,
            EEMAILVENDEDOR,
            DTPEDIDO,
            DTPREVENTREGA,
            TPFRETE,
            DESCPERC01,
            DESCPERC02,
            DESCPERC03,
            PERCCOMISSAO,
            VRTOTALLIQUIDO,
            OBSPEDIDO,
            OBSPEDIDO2,
            DTFECHAMENTOPEDIDO,
            DTCADASTRO,
            TPARQUIVO,
            STDISTRIBUIDO,
            STAGRUPAPRODUTO,
            STCANCELADO,
            TPFISCAL,
            STRASCUNHO
        });
        return response.data;
    }

}

