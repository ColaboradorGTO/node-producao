export class DetalhesFaturasService {
    constructor(client) {
        this.client = client;
    }

    async updateFatura(
        NUCODAUTORIZACAO,
        VRRECEBIDO,
        STCANCELADO,
        STPIX,
        NUAUTORIZACAO,
        IDDETALHEFATURA
    ) {

        if (!IDDETALHEFATURA) {
            throw new Error("IDDETALHEFATURA is required, services");
        }
        const result = await this.client.atualizarFatura(
            NUCODAUTORIZACAO,
            VRRECEBIDO,
            STCANCELADO,
            STPIX,
            NUAUTORIZACAO,
            IDDETALHEFATURA
        )
        return result;
    }

    async createDetalheFaturaLoja(
        IDEMPRESA,
        IDFUNCIONARIO,
        IDDETALHEFATURALOCAL,
        IDCAIXAWEB,
        IDCAIXALOCAL,
        NUESTABELECIMENTO,
        NUCARTAO,
        DTPROCESSAMENTO,
        HRPROCESSAMENTO,
        NUNSU,
        NUNSUHOST,
        NUCODAUTORIZACAO,
        VRRECEBIDO,
        DTHRMIGRACAO,
        STCANCELADO,
        IDUSRCACELAMENTO,
        IDMOVIMENTOCAIXAWEB,
        STPIX,
        NUAUTORIZACAO
    ) {

        const result = await this.client.criarDetalheFaturaLoja(
            IDEMPRESA,
            IDFUNCIONARIO,
            IDDETALHEFATURALOCAL,
            IDCAIXAWEB,
            IDCAIXALOCAL,
            NUESTABELECIMENTO,
            NUCARTAO,
            DTPROCESSAMENTO,
            HRPROCESSAMENTO,
            NUNSU,
            NUNSUHOST,
            NUCODAUTORIZACAO,
            VRRECEBIDO,
            DTHRMIGRACAO,
            STCANCELADO,
            IDUSRCACELAMENTO,
            IDMOVIMENTOCAIXAWEB,
            STPIX,
            NUAUTORIZACAO
        )
        return result;
    }

    async updateDetalheFaturaLoja(
        STCANCELADO,
        IDUSRCACELAMENTO,
        TXTMOTIVOCANCELAMENTO,
        IDDETALHEFATURA
    ) {

        if (!IDDETALHEFATURA) {
            throw new Error("IDDETALHEFATURA is required, services");
        }
        if (!IDUSRCACELAMENTO) {
            throw new Error("IDUSRCACELAMENTO is required, services");
        }
        if (!TXTMOTIVOCANCELAMENTO) {
            throw new Error("TXTMOTIVOCANCELAMENTO is required, services");
        }
        if (!STCANCELADO) {
            throw new Error("STCANCELADO is required, services");
        }
        const result = await this.client.atualizarDetalheFaturaLoja(
            STCANCELADO,
            IDUSRCACELAMENTO,
            TXTMOTIVOCANCELAMENTO,
            IDDETALHEFATURA
        )
        return result;
    }

}

