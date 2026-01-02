import axios from 'axios';
import 'dotenv/config';
const url = process.env.API_URL;

export class DespesaClient {
    constructor(baseURL) {
        this.api = axios.create({
            baseURL: baseURL || url,
            timeout: 80000
        });
    }

    async criarCadastrarDespesasLoja(
        DTDESPESA,
        IDEMPRESA,
        IDUSR,
        IDCATEGORIARECEITADESPESA,
        IDFUNCIONARIO,
        DTDESCONTOFUNCIONARIO,
        VRDESPESA,
        DSPAGOA,
        DSHISTORIO,
        TPNOTA,
        NUNOTAFISCAL,
        DSPATHDOCFISCAL,
        STATIVO,
        STCANCELADO,
        IDUSRCACELAMENTO,
        DSMOTIVOCANCELAMENTO
    ) {
        const response = await this.api.post(`${url}/api/despesa-loja/todos.xsjs`, [{
            DTDESPESA,
            IDEMPRESA,
            IDUSR,
            IDCATEGORIARECEITADESPESA,
            IDFUNCIONARIO,
            DTDESCONTOFUNCIONARIO,
            VRDESPESA,
            DSPAGOA,
            DSHISTORIO,
            TPNOTA,
            NUNOTAFISCAL,
            DSPATHDOCFISCAL,
            STATIVO,
            STCANCELADO,
            IDUSRCACELAMENTO,
            DSMOTIVOCANCELAMENTO
        }]);
        return response.data;
    }

    async atualizarDespesasLoja(
        DTDESPESA,
        IDEMPRESA,
        IDUSR,
        IDCATEGORIARECEITADESPESA,
        IDFUNCIONARIO,
        DTDESCONTOFUNCIONARIO,
        VRDESPESA,
        DSPAGOA,
        DSHISTORIO,
        TPNOTA,
        NUNOTAFISCAL,
        DSPATHDOCFISCAL,
        STATIVO,
        STCANCELADO,
        IDUSRCACELAMENTO,
        DSMOTIVOCANCELAMENTO,
        IDDESPESASLOJA
    ) {
        const response = await this.api.put(`${url}/api/despesa-loja/todos.xsjs`, [{
            DTDESPESA,
            IDEMPRESA,
            IDUSR,
            IDCATEGORIARECEITADESPESA,
            IDFUNCIONARIO,
            DTDESCONTOFUNCIONARIO,
            VRDESPESA,
            DSPAGOA,
            DSHISTORIO,
            TPNOTA,
            NUNOTAFISCAL,
            DSPATHDOCFISCAL,
            STATIVO,
            STCANCELADO,
            IDUSRCACELAMENTO,
            DSMOTIVOCANCELAMENTO,
            IDDESPESASLOJA
        }]);
        return response.data;
    }
}

