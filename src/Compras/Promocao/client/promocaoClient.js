import axios from 'axios';
import 'dotenv/config';
const url = process.env.API_URL;

export class PromocaoClient {
    constructor(baseURL) {
        this.api = axios.create({
            baseURL: baseURL || url,
            timeout: 80000
        });
    }

    async criarAjusteExtrato(
        DADOS
    ) {
        const response = await this.api.post(`rota-da-api`, {
            DADOS
        });
        return response.data;
    }
}

