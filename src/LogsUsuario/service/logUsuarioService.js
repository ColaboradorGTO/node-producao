export class LogsUsuariosService {
    constructor(client) {
        this.client = client;
    }

    async createLogUsuario(
        IDFUNCIONARIO,
        PATHFUNCAO,
        DADOS,
        IP
    ) {
        const result = await this.client.criarLogUsuario(
            IDFUNCIONARIO,
            PATHFUNCAO,
            DADOS,
            IP
        )
        return result;
    }

}