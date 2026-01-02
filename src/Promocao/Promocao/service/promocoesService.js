export class PromocaoService {
    constructor(client) {
        this.client = client;
    }

    async updatePromocao(
        IDRESUMOPROMOCAOMARKETING,
        IDMECANICARESUMOPROMOCAOMARKETING,
        TPAPARTIRDE,
        TPAPLICADOA,
        TPFATORPROMO,
        APARTIRDEQTD,
        APARTIRDOVLR,
        FATORPROMOVLR,
        FATORPROMOPERC,
        VLPRECOPRODUTO,
        DTHORAINICIO,
        DTHORAFIM,
        DSPROMOCAOMARKETING,
        IDPRODUTO,
        STATIVO,
        STEMPRESAPROMO,
        STDETPROMOORIGEM,
        STDETPROMODESTINO,
        IDEMPRESA,
        IDGRUPOEMDESTINO,
        IDSUBGRUPOEMDESTINO,
        IDMARCAEMDESTINO,
        IDFORNECEDOREMDESTINO,
        IDPRODUTODESTINO,
        IDGRUPOEMORIGEM,
        IDSUBGRUPOEMORIGEM,
        IDMARCAEMORIGEM,
        IDFORNECEDOREMORIGEM,
        IDPRODUTOORIGEM
    ) {
        if (!IDRESUMOPROMOCAOMARKETING) {
            throw new Error("IDRESUMOPROMOCAOMARKETING is required, services");
        }
        const result = await this.client.AtualizarPromocao(
            IDRESUMOPROMOCAOMARKETING,
            IDMECANICARESUMOPROMOCAOMARKETING,
            TPAPARTIRDE,
            TPAPLICADOA,
            TPFATORPROMO,
            APARTIRDEQTD,
            APARTIRDOVLR,
            FATORPROMOVLR,
            FATORPROMOPERC,
            VLPRECOPRODUTO,
            DTHORAINICIO,
            DTHORAFIM,
            DSPROMOCAOMARKETING,
            IDPRODUTO,
            STATIVO,
            STEMPRESAPROMO,
            STDETPROMOORIGEM,
            STDETPROMODESTINO,
            IDEMPRESA,
            IDGRUPOEMDESTINO,
            IDSUBGRUPOEMDESTINO,
            IDMARCAEMDESTINO,
            IDFORNECEDOREMDESTINO,
            IDPRODUTODESTINO,
            IDGRUPOEMORIGEM,
            IDSUBGRUPOEMORIGEM,
            IDMARCAEMORIGEM,
            IDFORNECEDOREMORIGEM,
            IDPRODUTOORIGEM
        )
        return result;
    }

    async updateProdutoDestinoPromocao(
        IDRESUMOPROMOCAOMARKETING,
        STATIVO,
        IDPRODUTODESTINO,
    ) {
        if (!IDRESUMOPROMOCAOMARKETING) {
            throw new Error("IDRESUMOPROMOCAOMARKETING is required, services");
        }
        if (!STATIVO) {
            throw new Error("STATIVO is required, services");
        }
        if (!IDPRODUTODESTINO) {
            throw new Error("IDPRODUTODESTINO is required, services");
        }
        const result = await this.client.AtualizarProdutoDestinoPromocao(
            IDRESUMOPROMOCAOMARKETING,
            STATIVO,
            IDPRODUTODESTINO,
        )
        return result;
    }

    async updateProdutoOrigemPromocao(
        IDRESUMOPROMOCAOMARKETING,
        STATIVO,
        IDPRODUTOORIGEM,
    ) {
        if (!IDRESUMOPROMOCAOMARKETING) {
            throw new Error("IDRESUMOPROMOCAOMARKETING is required, services");
        }
        if (!STATIVO) {
            throw new Error("STATIVO is required, services");
        }
        if (!IDPRODUTOORIGEM) {
            throw new Error("IDPRODUTOORIGEM is required, services");
        }
        const result = await this.client.AtualizarProdutoOrigemPromocao(
            IDRESUMOPROMOCAOMARKETING,
            STATIVO,
            IDPRODUTOORIGEM,
        )
        return result;
    }

    async updateEmpresaPromocao(
        STATIVO,
        IDRESUMOPROMOCAOMARKETING,
        IDEMPRESA,
        IDEMPRESAPROMOCAOMARKETING
    ) {
        if (!IDRESUMOPROMOCAOMARKETING) {
            throw new Error("IDRESUMOPROMOCAOMARKETING is required, services");
        }
        if (!STATIVO) {
            throw new Error("STATIVO is required, services");
        }
        if (!IDEMPRESA) {
            throw new Error("IDEMPRESA is required, services");
        }
        if (!IDEMPRESAPROMOCAOMARKETING) {
            throw new Error("IDEMPRESAPROMOCAOMARKETING is required, services");
        }
        const result = await this.client.AtualizarEmpresaPromocao(
            STATIVO,
            IDRESUMOPROMOCAOMARKETING,
            IDEMPRESA,
            IDEMPRESAPROMOCAOMARKETING
        )
        return result;
    }

    async createPromocao(
        DSPROMOCAOMARKETING,
        DTHORAINICIO,
        DTHORAFIM,
        TPAPLICADOA,
        APARTIRDEQTD,
        APARTIRDOVLR,
        TPFATORPROMO,
        FATORPROMOVLR,
        FATORPROMOPERC,
        TPAPARTIRDE,
        VLPRECOPRODUTO,
        STEMPRESAPROMO,
        STDETPROMOORIGEM,
        STDETPROMODESTINO
    ) {
        if (!DSPROMOCAOMARKETING) {
            throw new Error("DSPROMOCAOMARKETING is required, services");
        }
        if (!DTHORAINICIO) {
            throw new Error("DTHORAINICIO is required, services");
        }
        if (!DTHORAFIM) {
            throw new Error("DTHORAFIM is required, services");
        }

        const result = await this.client.CriarPromocao(
            DSPROMOCAOMARKETING,
            DTHORAINICIO,
            DTHORAFIM,
            TPAPLICADOA,
            APARTIRDEQTD,
            APARTIRDOVLR,
            TPFATORPROMO,
            FATORPROMOVLR,
            FATORPROMOPERC,
            TPAPARTIRDE,
            VLPRECOPRODUTO,
            STEMPRESAPROMO,
            STDETPROMOORIGEM,
            STDETPROMODESTINO
        )
        return result;
    }
}

