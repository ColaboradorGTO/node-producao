import axios from 'axios';
import 'dotenv/config';
const url = process.env.API_URL;

export class DetalhesFaturasClient {
    constructor(baseURL) {
        this.api = axios.create({
            baseURL: baseURL || url,
            timeout: 80000
        });
    }

    async atualizarFatura(
        NUCODAUTORIZACAO,
        VRRECEBIDO,
        STCANCELADO,
        STPIX,
        NUAUTORIZACAO,
        IDDETALHEFATURA
    ) {
        const response = await this.api.put(`${url}/api/financeiro/atualizar-fatura.xsjs`, {
            NUCODAUTORIZACAO,
            VRRECEBIDO,
            STCANCELADO,
            STPIX,
            NUAUTORIZACAO,
            IDDETALHEFATURA
        });
        return response.data;
    }

    async criarDetalheFaturaLoja(
        IDEMPRESA,
        IDFUNCIONARIO,
        IDDETALHEFATURALOCAL,
        IDCAIXAWEB,
        IDCAIXALOCAL,
        NUESTABELECIMENTO,
        NUCARTAO,
        DTPROCESSAMENTO,
        HRPROCESSAMENTO,
        NUNSU,
        NUNSUHOST,
        NUCODAUTORIZACAO,
        VRRECEBIDO,
        DTHRMIGRACAO,
        STCANCELADO,
        IDUSRCACELAMENTO,
        IDMOVIMENTOCAIXAWEB,
        STPIX,
        NUAUTORIZACAO

    ) {
        const response = await this.api.post(`${url}/api/detalhe-fatura.xsjs`, [{
            IDEMPRESA,
            IDFUNCIONARIO,
            IDDETALHEFATURALOCAL,
            IDCAIXAWEB,
            IDCAIXALOCAL,
            NUESTABELECIMENTO,
            NUCARTAO,
            DTPROCESSAMENTO,
            HRPROCESSAMENTO,
            NUNSU,
            NUNSUHOST,
            NUCODAUTORIZACAO,
            VRRECEBIDO,
            DTHRMIGRACAO,
            STCANCELADO,
            IDUSRCACELAMENTO,
            IDMOVIMENTOCAIXAWEB,
            STPIX,
            NUAUTORIZACAO
        }]);
        return response.data;
    }

    async atualizarDetalheFaturaLoja(
        STCANCELADO,
        IDUSRCACELAMENTO,
        TXTMOTIVOCANCELAMENTO,
        IDDETALHEFATURA

    ) {
        const response = await this.api.put(`${url}/api/fatura-loja/detalhe-fatura.xsjs`, {
            STCANCELADO,
            IDUSRCACELAMENTO,
            TXTMOTIVOCANCELAMENTO,
            IDDETALHEFATURA
        });
        return response.data;
    }
}

