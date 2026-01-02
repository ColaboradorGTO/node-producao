import axios from 'axios';
import 'dotenv/config';
const url = process.env.API_URL;

export class OrdemTrasferenciaClient {
    constructor(baseURL) {
        this.api = axios.create({
            baseURL: baseURL || url,
            timeout: 80000
        });
    }

    async atualizarResumoOrdemTransferencia(
        IDSTDIVERGENCIA,
        OBSDIVERGENCIA,
        IDUSRAJUSTE,
        IDSTATUSOT,
        IDRESUMOOT
    ) {
        const response = await this.api.put(`${url}/api/conferencia-cega/resumo-ordem-transferencia.xsjs`, [{
            IDSTDIVERGENCIA,
            OBSDIVERGENCIA,
            IDUSRAJUSTE,
            IDSTATUSOT,
            IDRESUMOOT
        }]);
        return response.data;
    }
}

