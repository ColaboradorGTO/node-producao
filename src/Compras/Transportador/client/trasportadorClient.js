import axios from 'axios';
import 'dotenv/config';
const url = process.env.API_URL;

export class TransportadorClient {
    constructor(baseURL) {
        this.api = axios.create({
            baseURL: baseURL || url,
            timeout: 80000
        });
    }

    async atualizarCadastroTrasportador(
        IDTRANSPORTADORA,
        IDGRUPOEMPRESARIAL,
        IDSUBGRUPOEMPRESARIAL,
        NORAZAOSOCIAL,
        NOFANTASIA,
        NUCNPJ,
        NUINSCESTADUAL,
        NUINSCMUNICIPAL,
        NUIBGE,
        EENDERECO,
        ENUMERO,
        ECOMPLEMENTO,
        EBAIRRO,
        ECIDADE,
        SGUF,
        NUCEP,
        EEMAIL,
        NUTELEFONE1,
        NUTELEFONE2,
        NUTELEFONE3,
        NOREPRESENTANTE,
        DTCADASTRO,
        DTULTATUALIZACAO,
        STATIVO
    ) {
        const response = await this.api.put(`${url}/api/compras/transportador.xsjs`, {
            IDTRANSPORTADORA,
            IDGRUPOEMPRESARIAL,
            IDSUBGRUPOEMPRESARIAL,
            NORAZAOSOCIAL,
            NOFANTASIA,
            NUCNPJ,
            NUINSCESTADUAL,
            NUINSCMUNICIPAL,
            NUIBGE,
            EENDERECO,
            ENUMERO,
            ECOMPLEMENTO,
            EBAIRRO,
            ECIDADE,
            SGUF,
            NUCEP,
            EEMAIL,
            NUTELEFONE1,
            NUTELEFONE2,
            NUTELEFONE3,
            NOREPRESENTANTE,
            DTCADASTRO,
            DTULTATUALIZACAO,
            STATIVO
        });
        return response.data;
    }

        async criarCadastroTrasportador(
        IDGRUPOEMPRESARIAL,
        IDSUBGRUPOEMPRESARIAL,
        NORAZAOSOCIAL,
        NOFANTASIA,
        NUCNPJ,
        NUINSCESTADUAL,
        NUINSCMUNICIPAL,
        NUIBGE,
        EENDERECO,
        ENUMERO,
        ECOMPLEMENTO,
        EBAIRRO,
        ECIDADE,
        SGUF,
        NUCEP,
        EEMAIL,
        NUTELEFONE1,
        NUTELEFONE2,
        NUTELEFONE3,
        NOREPRESENTANTE,
        DTCADASTRO,
        DTULTATUALIZACAO,
        STATIVO
    ) {
        const response = await this.api.post(`${url}/api/compras/transportador.xsjs`, {
            IDGRUPOEMPRESARIAL,
            IDSUBGRUPOEMPRESARIAL,
            NORAZAOSOCIAL,
            NOFANTASIA,
            NUCNPJ,
            NUINSCESTADUAL,
            NUINSCMUNICIPAL,
            NUIBGE,
            EENDERECO,
            ENUMERO,
            ECOMPLEMENTO,
            EBAIRRO,
            ECIDADE,
            SGUF,
            NUCEP,
            EEMAIL,
            NUTELEFONE1,
            NUTELEFONE2,
            NUTELEFONE3,
            NOREPRESENTANTE,
            DTCADASTRO,
            DTULTATUALIZACAO,
            STATIVO
        });
        return response.data;
    }
}

