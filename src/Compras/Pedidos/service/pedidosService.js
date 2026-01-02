export class PedidosService {
    constructor(client) {
        this.client = client;
    }

    async updateCategoriaPedidos(
        IDCATEGORIAPEDIDO,
        DSCATEGORIAPEDIDO,
        TIPOPEDIDO,
        STATIVO
    ) {
        if (!IDCATEGORIAPEDIDO) {
            throw new Error("IDCATEGORIAPEDIDO is required, services");
        }
        const result = await this.client.atualizarCategoriaPedidos(
            IDCATEGORIAPEDIDO,
            DSCATEGORIAPEDIDO,
            TIPOPEDIDO,
            STATIVO
        )
        return result;
    }

    async updateFinalizarPedido(
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
        if (!IDRESUMOPEDIDO) {
            throw new Error("IDRESUMOPEDIDO is required, services");
        }
        const result = await this.client.atualizarFinalizarPedidos(
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
        )
        return result;
    }

    async createCategoriaPedidos(
        DSCATEGORIAPEDIDO,
        TIPOPEDIDO,
        STATIVO
    ) {
        if (!DSCATEGORIAPEDIDO) {
            throw new Error("DSCATEGORIAPEDIDO is required, services");
        }
        const result = await this.client.criarCategoriaPedidos(
            DSCATEGORIAPEDIDO,
            TIPOPEDIDO,
            STATIVO
        )
        return result;
    }

    async createCategoriaPedidos(
        IDCATEGORIAPEDIDO,
        IDTAMANHO,
        STATIVO
    ) {
        if (!IDCATEGORIAPEDIDO) {
            throw new Error("IDCATEGORIAPEDIDO is required, services");
        }
        const result = await this.client.criarCategoriaPedidos(
            IDCATEGORIAPEDIDO,
            IDTAMANHO,
            STATIVO
        )
        return result;
    }

    async createVinculotamanhoCategoria(
        IDCATEGORIAPEDIDO,
        IDTAMANHO,
        STATIVO
    ) {
        if (!IDCATEGORIAPEDIDO) {
            throw new Error("IDCATEGORIAPEDIDO is required, services");
        }
        const result = await this.client.criarVinculoTamanhoCategoria(
            IDCATEGORIAPEDIDO,
            IDTAMANHO,
            STATIVO
        )
        return result;
    }

    async createFinalizarPedido(
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
        if (!IDRESUMOPEDIDO) {
            throw new Error("IDRESUMOPEDIDO is required, services");
        }
        const result = await this.client.criarFinalizarPedido(
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
        )
        return result;
    }

    async createPedido(
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
        if (!IDRESUMOPEDIDO) {
            throw new Error("IDRESUMOPEDIDO is required, services");
        }
        const result = await this.client.criarPedido(
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
        )
        return result;
    }
}

