import axios from 'axios';
import 'dotenv/config';
const url = process.env.API_URL;

export class DivergenciaClient {
    constructor(baseURL) {
        this.api = axios.create({
            baseURL: baseURL || url,
            timeout: 80000
        });
    }

    async atualizarStatusDivergencia(
        DESCRICAODIVERGENCIA,
        STATIVO,
        IDSTATUSDIVERGENCIA
    ) {
        const response = await this.api.put(`${url}/api/conferencia-cega/status-divergencia.xsjs`, {
            DESCRICAODIVERGENCIA,
            STATIVO,
            IDSTATUSDIVERGENCIA
        });
        return response.data;
    }

    async criarStatusDivergencia(
        DESCRICAODIVERGENCIA,
        IDUSRCRIACAO,
        STATIVO
    ) {
        const response = await this.api.post(`${url}/api/conferencia-cega/status-divergencia.xsjs`, [{
            DESCRICAODIVERGENCIA,
            IDUSRCRIACAO,
            STATIVO
        }]);
        return response.data;
    }
}

