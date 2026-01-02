import axios from 'axios';
import 'dotenv/config';
const url = process.env.API_URL;

export class MedidasClient {
    constructor(baseURL) {
        this.api = axios.create({
            baseURL: baseURL || url,
            timeout: 80000
        });
    }

    async atualizarUnidadeMedida(
        IDUNIDADEMEDIDA,
        DSUNIDADE,
        DSSIGLA,
        DTULTATUALIZACAO,
        STATIVO
    ) {
        const response = await this.api.put(`${url}/api/compras/unidadesdemedidas.xsjs`, {
            IDUNIDADEMEDIDA,
            DSUNIDADE,
            DSSIGLA,
            DTULTATUALIZACAO,
            STATIVO
        });
        return response.data;
    }

    async criarUnidadeMedida(
        DSUNIDADE,
        DSSIGLA,
        DTCADASTRO,
        DTULTATUALIZACAO,
        STATIVO
    ) {
        const response = await this.api.post(`${url}/api/compras/unidadesdemedidas.xsjs`, {
            DSUNIDADE,
            DSSIGLA,
            DTCADASTRO,
            DTULTATUALIZACAO,
            STATIVO
        });
        return response.data;
    }
}

