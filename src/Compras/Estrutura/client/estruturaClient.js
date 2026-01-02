import axios from 'axios';
import 'dotenv/config';
const url = process.env.API_URL;

export class EstruturaClient {
    constructor(baseURL) {
        this.api = axios.create({
            baseURL: baseURL || url,
            timeout: 80000
        });
    }

    async atualizarSubGrupoEstrutura(
        IDGRUPOESTRUTURAANTIGA,
        IDGRUPOESTRUTURA,
        DSSUBGRUPOESTRUTURA,
        DSSUBGRUPOESTRUTURAFIM,
        CODSUBGRUPOESTRUTURA,
        IDSUBGRUPOESTRUTURA,
        STATIVO
    ) {
        const response = await this.api.put(`${url}/api/compras/subgrupoestrutura.xsjs`, {
            IDGRUPOESTRUTURAANTIGA,
            IDGRUPOESTRUTURA,
            DSSUBGRUPOESTRUTURA,
            DSSUBGRUPOESTRUTURAFIM,
            CODSUBGRUPOESTRUTURA,
            IDSUBGRUPOESTRUTURA,
            STATIVO
        });
        return response.data;
    }

    async atualizarGrupoEstrutura(
        IDGRUPOESTRUTURA,
        IDGRUPOEMPRESARIAL,
        DSGRUPOESTRUTURA,
        STATIVO  
    ) {
        const response = await this.api.put(`${url}/api/compras/grupoextrutura.xsjs`, {
            IDGRUPOESTRUTURA,
            IDGRUPOEMPRESARIAL,
            DSGRUPOESTRUTURA,
            STATIVO
        });
        return response.data;
    }

    async criarSubGrupoEstrutura(
        IDGRUPOESTRUTURA,
        DSSUBGRUPOESTRUTURA,
        DSSUBGRUPOESTRUTURAFIM,
        CODSUBGRUPOESTRUTURA,
        IDSUBGRUPOESTRUTURA,
        STATIVO
    ) {
        const response = await this.api.post(`${url}/api/compras/subgrupoestrutura.xsjs`, {
            IDGRUPOESTRUTURA,
            DSSUBGRUPOESTRUTURA,
            DSSUBGRUPOESTRUTURAFIM,
            CODSUBGRUPOESTRUTURA,
            IDSUBGRUPOESTRUTURA,
            STATIVO
        });
        return response.data;
    }

    async criarGrupoEstrutura(
        IDGRUPOEMPRESARIAL,
        DSGRUPOESTRUTURA,
        STATIVO
    ) {
        const response = await this.api.post(`${url}/api/compras/grupoextrutura.xsjs`, {
            IDGRUPOEMPRESARIAL,
            DSGRUPOESTRUTURA,
            STATIVO
        });
        return response.data;
    }
}

