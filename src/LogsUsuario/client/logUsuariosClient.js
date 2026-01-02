import axios from 'axios';
import 'dotenv/config';
const url = process.env.API_URL;

export class LogsUsuariosClient {
    constructor(baseURL) {
        this.api = axios.create({
            baseURL: baseURL || url,
            timeout: 80000
        });
    }

    async criarLogUsuario(
        IDFUNCIONARIO,
        PATHFUNCAO,
        DADOS,
        IP
    ) {
        const response = await this.api.post(`${url}/api/log-web.xsjs`, {
            IDFUNCIONARIO,
            PATHFUNCAO,
            DADOS,
            IP
        });
        return response.data;
    }
}

