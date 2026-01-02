import axios from 'axios';
import 'dotenv/config';
const url = process.env.API_URL;

export class CoresClient {
    constructor(baseURL) {
        this.api = axios.create({
            baseURL: baseURL || url,
            timeout: 80000
        });
    }

    async atualizarCores(
        IDCOR,
        IDGRUPOCOR,
        DSCOR,
        STATIVO
    ) {
        const response = await this.api.put(`${url}/api/compras/cores.xsjs`, {
            IDCOR,
            IDGRUPOCOR,
            DSCOR,
            STATIVO
        });
        return response.data;
    }

    async criarCores(
        IDGRUPOCOR,
        DSCOR,
        STATIVO
    ) {
        const response = await this.api.post(`${url}/api/compras/cores.xsjs`, {
            IDGRUPOCOR,
            DSCOR,
            STATIVO
        });
        return response.data;
    }
}

