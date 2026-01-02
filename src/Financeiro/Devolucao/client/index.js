import axios from 'axios';
import 'dotenv/config';
//const url = process.env.API_URL;
const url = 'http://164.152.245.77:8000/quality/concentrador_node';

export class MotivoDevolucaoClient {
    constructor(baseURL) {
        this.client = axios.create({
            baseURL: baseURL || url,
            timeout: 80000
        });
    }

    async criarMotivo(
        IDUSUARIO,
        DSMOTIVO
    ) {

        const response = await this.client.post(`${url}/api/financeiro/motivo-devolucao.xsjs`, {
            IDUSUARIO,
            DSMOTIVO
        });
        return response.data;

    }

    async atualizarMotivoDevolucao(
        DSMOTIVO,
        STATIVO,
        IDUSUARIO,
        IDMOTIVODEVOLUCAO
    ) {
        const response = await this.client.put(`${url}/api/financeiro/motivo-devolucao.xsjs`, {
            DSMOTIVO,
            STATIVO,
            IDUSUARIO,
            IDMOTIVODEVOLUCAO,
        });

        return response.data;
    }
}