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

    async criarProdutoPromocao(
        DSPROMO,
        VRPERCDESCONTO,
        VRPRECODESCONTO,
        VRAPARTIRDE,
        VRLIMITEDE,
        QTDAPARTIRDE,
        QTDLIMITEDE,
        DTINICIOPROMO,
        DTFIMPROMO,
        STATIVO,
        PRODUTOS,
        EMPRESAS,
        IDGRUPO
    ) {
        const response = await this.api.post(`${url}/api/produto-promocao.xsjs`, {
            DSPROMO,
            VRPERCDESCONTO,
            VRPRECODESCONTO,
            VRAPARTIRDE,
            VRLIMITEDE,
            QTDAPARTIRDE,
            QTDLIMITEDE,
            DTINICIOPROMO,
            DTFIMPROMO,
            STATIVO,
            PRODUTOS,
            EMPRESAS,
            IDGRUPO
        });
        return response.data;
    }

}

