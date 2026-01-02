export class EstiloService {
    constructor(client) {
        this.client = client;
    }

    async createEstilo(
        IDGRUPOESTRUTURAANTIGA,
        IDESTILO,
        DSESTILO,
        IDGRUPOESTRUTURA,
        STATIVO,
    ) {
        const result = await this.client.criarAjusteExtrato(
            IDGRUPOESTRUTURAANTIGA,
            IDESTILO,
            DSESTILO,
            IDGRUPOESTRUTURA,
            STATIVO,
        )
        return result;
    }

    async updateEstilo(
        IDVINCESTILOSESTRUTURA,
        IDGRUPOESTRUTURAANTIGA,
        IDESTILO,
        DSESTILO,
        IDGRUPOESTRUTURA,
        STATIVO,
    ) {
        if (!IDVINCESTILOSESTRUTURA) {
            throw new Error("IDVINCESTILOSESTRUTURA is required, services");
        }

        const result = await this.client.atualizarEstilo(
            IDVINCESTILOSESTRUTURA,
            IDGRUPOESTRUTURAANTIGA,
            IDESTILO,
            DSESTILO,
            IDGRUPOESTRUTURA,
            STATIVO,
        )
        return result;
    }
}