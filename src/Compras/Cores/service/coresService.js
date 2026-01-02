export class CoresService {
    constructor(client) {
        this.client = client;
    }

    async updateCores(
        IDCOR,
        IDGRUPOCOR,
        DSCOR,
        STATIVO
    ) {
        if (!IDCOR) {
            throw new Error("IDCOR is required, services");
        }
        const result = await this.client.atualizarCores(
            IDCOR,
            IDGRUPOCOR,
            DSCOR,
            STATIVO
        )
        return result;
    }

    async createCores(
        IDGRUPOCOR,
        DSCOR,
        STATIVO
    ) {

        const result = await this.client.criarCores(
            IDGRUPOCOR,
            DSCOR,
            STATIVO
        )
        return result;
    }
}

