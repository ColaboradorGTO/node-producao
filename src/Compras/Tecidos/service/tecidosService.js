export class TecidosService {
    constructor(client) {
        this.client = client;
    }

    async updateTipoTecidos(
        IDTPTECIDO,
        DSTIPOTECIDO,
        STATIVO
    ) {
        if (!IDTPTECIDO) {
            throw new Error("IDTPTECIDO is required, services");
        }
        const result = await this.client.atualizarTipoTecidos(
            IDTPTECIDO,
            DSTIPOTECIDO,
            STATIVO
        )
        return result;
    }

    async createTipoTecidos(
        DSTIPOTECIDO,
        STATIVO
    ) {

        const result = await this.client.criarTipoTecidos(
            DSTIPOTECIDO,
            STATIVO
        )
        return result;
    }
}