export class MedidasService {
    constructor(client) {
        this.client = client;
    }

    async updateUnidadeMedida(
        IDUNIDADEMEDIDA,
        DSUNIDADE,
        DSSIGLA,
        DTULTATUALIZACAO,
        STATIVO
    ) {
        if (!IDUNIDADEMEDIDA) {
            throw new Error("IDUNIDADEMEDIDA is required, services");
        }
        const result = await this.client.atualizarUnidadeMedida(
            IDUNIDADEMEDIDA,
            DSUNIDADE,
            DSSIGLA,
            DTULTATUALIZACAO,
            STATIVO
        )

        return result;
    }

    async createUnidadeMedida(
        DSUNIDADE,
        DSSIGLA,
        DTCADASTRO,
        DTULTATUALIZACAO,
        STATIVO
    ) {
        const result = await this.client.criarUnidadeMedida(
            DSUNIDADE,
            DSSIGLA,
            DTCADASTRO,
            DTULTATUALIZACAO,
            STATIVO
        )

        return result;
    }
}

