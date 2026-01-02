import axios from 'axios';
import 'dotenv/config';
const url = process.env.API_URL;

export class FabricanteClient {
    constructor(baseURL) {
        this.api = axios.create({
            baseURL: baseURL || url,
            timeout: 80000
        });
    }

    async atualizarFabricante(
        IDFABRICANTE,
        DSFABRICANTE,
        DTULTATUALIZACAO,
        DTCADASTRO,
        STATIVO,
    ) {
        const response = await this.api.put(`${url}/api/compras/fabricante.xsjs`, {
            IDFABRICANTE,
            DSFABRICANTE,
            DTULTATUALIZACAO,
            DTCADASTRO,
            STATIVO,
        });
        return response.data;
    }

    async atualizarFabricanteFornecedor(
        IDFABRICANTEFORN,
        IDFABRICANTE,
        IDFORNECEDOR,
        STATIVO,
    ) {
        const response = await this.api.put(`${url}/api/compras/fabricante-fornecedor.xsjs`, {
            IDFABRICANTEFORN,
            IDFABRICANTE,
            IDFORNECEDOR,
            STATIVO,
        });
        return response.data;
    }

    async criarFabricante(
        DSFABRICANTE,
        DTCADASTRO,
        DTULTATUALIZACAO,
        STATIVO,
    ) {
        const response = await this.api.post(`${url}/api/compras/fabricante.xsjs`, {

            DSFABRICANTE,
            DTCADASTRO,
            DTULTATUALIZACAO,
            STATIVO,
        });
        return response.data;
    }

    async criarFabricanteFornecedor(
        IDFABFORN,
        IDFABRICANTE,
        IDFORNECEDOR,
        STATIVO,
    ) {
        const response = await this.api.post(`${url}/api/compras/fabricante-fornecedor.xsjs`, {
            IDFABFORN,
            IDFABRICANTE,
            IDFORNECEDOR,
            STATIVO,
        });
        return response.data;
    }
}

