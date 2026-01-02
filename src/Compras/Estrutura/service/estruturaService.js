export class EstruturaService {
    constructor(client) {
        this.client = client;
    }

    async updateSubGrupoEstrutura(
        IDGRUPOESTRUTURAANTIGA,
        IDGRUPOESTRUTURA,
        DSSUBGRUPOESTRUTURA,
        DSSUBGRUPOESTRUTURAFIM,
        CODSUBGRUPOESTRUTURA,
        IDSUBGRUPOESTRUTURA,
        STATIVO
    ) {
        if (!IDGRUPOESTRUTURAANTIGA) {
            throw new Error("IDGRUPOESTRUTURAANTIGA is required, services");
        }
        const result = await this.client.atualizarSubGrupoEstrutura(
            IDGRUPOESTRUTURAANTIGA,
            IDGRUPOESTRUTURA,
            DSSUBGRUPOESTRUTURA,
            DSSUBGRUPOESTRUTURAFIM,
            CODSUBGRUPOESTRUTURA,
            IDSUBGRUPOESTRUTURA,
            STATIVO
        )
        return result;
    }

    async updateGrupoEstrutura(
        IDGRUPOESTRUTURA,
        IDGRUPOEMPRESARIAL,
        DSGRUPOESTRUTURA,
        STATIVO
    ) {
        if (!IDGRUPOESTRUTURA) {
            throw new Error("IDGRUPOESTRUTURA is required, services");
        }
        const result = await this.client.atualizarGrupoEstrutura(
            IDGRUPOESTRUTURA,
            IDGRUPOEMPRESARIAL,
            DSGRUPOESTRUTURA,
            STATIVO
        )
        return result;
    }

    async createSubGrupoEstrutura(
        IDGRUPOESTRUTURA,
        DSSUBGRUPOESTRUTURA,
        DSSUBGRUPOESTRUTURAFIM,
        CODSUBGRUPOESTRUTURA,
        IDSUBGRUPOESTRUTURA,
        STATIVO
    ) {
        const result = await this.client.criarSubGrupoEstrutura(
            IDGRUPOESTRUTURA,
            DSSUBGRUPOESTRUTURA,
            DSSUBGRUPOESTRUTURAFIM,
            CODSUBGRUPOESTRUTURA,
            IDSUBGRUPOESTRUTURA,
            STATIVO
        )
        return result;
    }

    async createGrupoEstrutura(
        IDGRUPOEMPRESARIAL,
        DSGRUPOESTRUTURA,
        STATIVO
    ) {
        const result = await this.client.criarGrupoEstrutura(
            IDGRUPOEMPRESARIAL,
            DSGRUPOESTRUTURA,
            STATIVO
        )
        return result;
    }
}