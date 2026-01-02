import axios from 'axios';
import 'dotenv/config';
const url = process.env.API_URL;

export class ProdutoClient {
    constructor(baseURL) {
        this.api = axios.create({
            baseURL: baseURL || url,
            timeout: 80000
        });
    }

    async atualizarProdutoImagem(
        IDIMAGEMPRODUTO,
        STATIVO,

    ) {
        const response = await this.api.put(`${url}/api/compras/atualiza_produtosimagem.xsjs`, {
            IDIMAGEMPRODUTO,
            STATIVO,
        });
        return response.data;
    }

    async criarImagemProduto(
        IDRESUMOPEDIDO,
        NUREF,
        IMAGEM,
        STATIVO,
        IDPRODIMAGEM

    ) {
        const response = await this.api.post(`${url}/api/compras/imagemproduto.xsjs`, {
            IDRESUMOPEDIDO,
            NUREF,
            IMAGEM,
            STATIVO,
            IDPRODIMAGEM
        });
        return response.data;
    }
}

