import axios from 'axios';
import 'dotenv/config';
const url = process.env.API_URL;


export class MecanicaClient {
    constructor(baseURL) {
        this.api = axios.create({
            baseURL: baseURL || url,
            timeout: 80000
        });
    }

    async criarMecanicaAtivar(
        DESCRICAO,
        APLICACAODESTINO,
        MECANICA,
        TIPODESCONTO
    ) {
        const response = await this.api.post(`${url}/api/promocoes-ativas/select-mecanica.xsjs`, {
            DESCRICAO,
            APLICACAODESTINO,
            MECANICA,
            TIPODESCONTO
        });
        return response.data;
    }
}

