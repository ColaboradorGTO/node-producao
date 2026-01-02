import axios from 'axios';
import 'dotenv/config';
const url = process.env.API_URL;
export class VendasClient {
    constructor(baseURL) {
        this.api = axios.create({
            baseURL: baseURL || url,
            timeout: 80000
        });
    }

    async atualizarVendaPagamento(
        STCANCELADO,
        DTULTIMAALTERACAO,
        IDFUNCIONARIOCANCELA,
        TXTMOTIVOCANCELA,
        IDVENDA
    ) {
        const response = await this.api.put(`${url}/api/administrativo/altera-venda-pagamento.xsjs`, [{
            STCANCELADO,
            DTULTIMAALTERACAO,
            IDFUNCIONARIOCANCELA,
            TXTMOTIVOCANCELA,
            IDVENDA
        }]);
        return response.data;
    }

    async atualizarVendaVendedor(
        IDVENDEDOR,
        IDVENDADETALHE
    ) {
        const response = await this.api.put(`${url}/api/administrativo/venda-vendedor.xsjs`, [{
            IDVENDEDOR,
            IDVENDADETALHE
        }]);
        return response.data;
    }
}
