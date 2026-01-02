import axios from 'axios';
import 'dotenv/config';
const url = process.env.API_URL;

export class EstiloClient {
    constructor(baseURL) {
        this.api = axios.create({
            baseURL: baseURL || url,
            timeout: 80000
        });
    }

    async criarAjusteExtrato(
        IDGRUPOESTRUTURAANTIGA,
        IDESTILO,
        DSESTILO,
        IDGRUPOESTRUTURA,
        STATIVO,
    ) {
        const response = await this.api.post(`${url}/api/compras/estilos.xsjs`, {
            IDGRUPOESTRUTURAANTIGA,
            IDESTILO,
            DSESTILO,
            IDGRUPOESTRUTURA,
            STATIVO,
        });
        return response.data;
    }

    async atualizarEstilo(
        IDVINCESTILOSESTRUTURA,
        IDGRUPOESTRUTURAANTIGA,
        IDESTILO,
        DSESTILO,
        IDGRUPOESTRUTURA,
        STATIVO,
    ) {
        const response = await this.api.put(`${url}/api/compras/estilos.xsjs`, {
            IDVINCESTILOSESTRUTURA,
            IDGRUPOESTRUTURAANTIGA,
            IDESTILO,
            DSESTILO,
            IDGRUPOESTRUTURA,
            STATIVO,
        });
        return response.data;
    }
}

