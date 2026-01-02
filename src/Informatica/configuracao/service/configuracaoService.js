export class ConfiguracaoService {
    constructor(client) {
        this.client = client;
    }

    async createAjusteExtrato(
        DADOS
    ) {
        if (!DADOS) {
            throw new Error("DADOS is required, services");
        }
        const result = await this.client.nomeClient(
            DADOS
        )
        return result;
    }
}