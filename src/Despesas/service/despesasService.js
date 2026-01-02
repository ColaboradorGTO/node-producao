export class DespesaService {
    constructor(client) {
        this.client = client;
    }

    async createCadastrarDespesasLoja(
        DTDESPESA,
        IDEMPRESA,
        IDUSR,
        IDCATEGORIARECEITADESPESA,
        IDFUNCIONARIO,
        DTDESCONTOFUNCIONARIO,
        VRDESPESA,
        DSPAGOA,
        DSHISTORIO,
        TPNOTA,
        NUNOTAFISCAL,
        DSPATHDOCFISCAL,
        STATIVO,
        STCANCELADO,
        IDUSRCACELAMENTO,
        DSMOTIVOCANCELAMENTO
    ) {
        if (!IDEMPRESA) {
            throw new Error("IDEMPRESA is required, services");
        }

        if (!DTDESPESA) {
            throw new Error("DTDESPESA is required, services");
        }
        if (!IDCATEGORIARECEITADESPESA) {
            throw new Error("IDCATEGORIARECEITADESPESA is required, services");
        }
        if (!DSHISTORIO) {
            throw new Error("DSHISTORIO is required, services");
        }
        const result = await this.client.criarCadastrarDespesasLoja(
            DTDESPESA,
            IDEMPRESA,
            IDUSR,
            IDCATEGORIARECEITADESPESA,
            IDFUNCIONARIO,
            DTDESCONTOFUNCIONARIO,
            VRDESPESA,
            DSPAGOA,
            DSHISTORIO,
            TPNOTA,
            NUNOTAFISCAL,
            DSPATHDOCFISCAL,
            STATIVO,
            STCANCELADO,
            IDUSRCACELAMENTO,
            DSMOTIVOCANCELAMENTO
        )
        return result;
    }

    async updateCadastrarDespesasLoja(
        DTDESPESA,
        IDEMPRESA,
        IDUSR,
        IDCATEGORIARECEITADESPESA,
        IDFUNCIONARIO,
        DTDESCONTOFUNCIONARIO,
        VRDESPESA,
        DSPAGOA,
        DSHISTORIO,
        TPNOTA,
        NUNOTAFISCAL,
        DSPATHDOCFISCAL,
        STATIVO,
        STCANCELADO,
        IDUSRCACELAMENTO,
        DSMOTIVOCANCELAMENTO,
        IDDESPESASLOJA
    ) {
        if (!IDEMPRESA) {
            throw new Error("IDEMPRESA is required, services");
        }
        if (!DTDESPESA) {
            throw new Error("DTDESPESA is required, services");
        }
        if (!IDCATEGORIARECEITADESPESA) {
            throw new Error("IDCATEGORIARECEITADESPESA is required, services");
        }
        if (!DSHISTORIO) {
            throw new Error("DSHISTORIO is required, services");
        }
        if (!IDDESPESASLOJA) {
            throw new Error("IDDESPESASLOJA is required, services");
        }
        const result = await this.client.atualizarDespesasLoja(
            DTDESPESA,
            IDEMPRESA,
            IDUSR,
            IDCATEGORIARECEITADESPESA,
            IDFUNCIONARIO,
            DTDESCONTOFUNCIONARIO,
            VRDESPESA,
            DSPAGOA,
            DSHISTORIO,
            TPNOTA,
            NUNOTAFISCAL,
            DSPATHDOCFISCAL,
            STATIVO,
            STCANCELADO,
            IDUSRCACELAMENTO,
            DSMOTIVOCANCELAMENTO,
            IDDESPESASLOJA
        )
        return result;
    }
}

