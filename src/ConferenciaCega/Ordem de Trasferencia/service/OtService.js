export class OrdemTrasferenciaService {
    constructor(client) {
        this.client = client;
    }

    async updateResumoOrdemTransferencia(
        IDSTDIVERGENCIA,
        OBSDIVERGENCIA,
        IDUSRAJUSTE,
        IDSTATUSOT,
        IDRESUMOOT
    ) {
        if (!IDRESUMOOT) {
            throw new Error("IDRESUMOOT is required, services");
        }

        const result = await this.client.atualizarResumoOrdemTransferencia(
            IDSTDIVERGENCIA,
            OBSDIVERGENCIA,
            IDUSRAJUSTE,
            IDSTATUSOT,
            IDRESUMOOT
        )
        return result;
    }
}