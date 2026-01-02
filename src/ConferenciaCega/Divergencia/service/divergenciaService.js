export class DivergenciaService {
    constructor(client) {
        this.client = client;
    }

    async updateStatusDivergencia(
        DESCRICAODIVERGENCIA,
        STATIVO,
        IDSTATUSDIVERGENCIA
    ) {
        if (!IDSTATUSDIVERGENCIA) {
            throw new Error("IDSTATUSDIVERGENCIA is required, services");
        }
        const result = await this.client.atualizarStatusDivergencia(
            DESCRICAODIVERGENCIA,
            STATIVO,
            IDSTATUSDIVERGENCIA
        )
        return result;
    }

    async createStatusDivergencia(
        DESCRICAODIVERGENCIA,
        IDUSRCRIACAO,
        STATIVO
    ) {
        if (!DESCRICAODIVERGENCIA) {
            throw new Error("DESCRICAODIVERGENCIA is required, services");
        }
        if (!STATIVO) {
            throw new Error("STATIVO is required, services");
        }
        if (!IDUSRCRIACAO) {
            throw new Error("IDUSRCRIACAO is required, services");
        }
        const result = await this.client.criarStatusDivergencia(
            DESCRICAODIVERGENCIA,
            IDUSRCRIACAO,
            STATIVO
        )
        return result;
    }
}