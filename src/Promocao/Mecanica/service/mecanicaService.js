export class MecanicaService {
    constructor(client) {
        this.client = client;
    }

    async createMecanicaAtivar(
        DESCRICAO,
        APLICACAODESTINO,
        MECANICA,
        TIPODESCONTO
    ) {
        if (!DESCRICAO) {
            throw new Error("DESCRICAO is required, services");
        }
        if (!APLICACAODESTINO) {
            throw new Error("APLICACAODESTINO is required, services");
        }
        const result = await this.client.criarMecanicaAtivar(
            DESCRICAO,
            APLICACAODESTINO,
            MECANICA,
            TIPODESCONTO
        )
        return result;
    }
}