import axios from 'axios';
import 'dotenv/config';
const url = process.env.API_URL;

export class TecidosClient {
    constructor(baseURL) {
        this.api = axios.create({
            baseURL: baseURL || url,
            timeout: 80000
        });
    }

    async atualizarTipoTecidos(
        IDTPTECIDO,
        DSTIPOTECIDO,
        STATIVO
    ) {
        const response = await this.api.put(`${url}/api/compras/tipotecidos.xsjs`, {
            IDTPTECIDO,
            DSTIPOTECIDO,
            STATIVO
        });
        return response.data;
    }

    async criarTipoTecidos(
        DSTIPOTECIDO,
        STATIVO
    ) {
        const response = await this.api.post(`${url}/api/compras/tipotecidos.xsjs`, {
            DSTIPOTECIDO,
            STATIVO
        });
        return response.data;
    }
}

