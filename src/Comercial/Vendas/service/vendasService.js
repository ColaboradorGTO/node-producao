export class VendasService {
    constructor(client) {
        this.client = client;
    }

    async nomeSchema(
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