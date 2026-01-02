import axios from 'axios';
import 'dotenv/config';
const url = process.env.API_URL;

export class CampanhaClient {
    constructor(baseURL) {
        this.api = axios.create({
            baseURL: baseURL || url,
            timeout: 80000
        });
    }

    async atualizarCampanhaClient(
        IDCAMPANHA,
        NUCPFCNPJ,
        EENDERECO,
        NUENDERECO,
        ECOMPLEMENTO,
        EBAIRRO,
        ECIDADE,
        SGUF,
        NUCEP,
        EEMAIL,
        NUTELEFONE,
        NOME,
        ID
    ) {
        const response = await this.api.put(`${url}/api/campanha/campanha-cliente.xsjs`, {
            IDCAMPANHA,
            NUCPFCNPJ,
            EENDERECO,
            NUENDERECO,
            ECOMPLEMENTO,
            EBAIRRO,
            ECIDADE,
            SGUF,
            NUCEP,
            EEMAIL,
            NUTELEFONE,
            NOME,
            ID
        });
        return response.data;
    }

    async criarCampanhaClient(
        IDCAMPANHA,
        NUCPFCNPJ,
        EENDERECO,
        NUENDERECO,
        ECOMPLEMENTO,
        EBAIRRO,
        ECIDADE,
        SGUF,
        NUCEP,
        EEMAIL,
        NUTELEFONE,
        NOME
    ) {
        const response = await this.api.post(`${url}/api/campanha/campanha-cliente.xsjs`, {
            IDCAMPANHA,
            NUCPFCNPJ,
            EENDERECO,
            NUENDERECO,
            ECOMPLEMENTO,
            EBAIRRO,
            ECIDADE,
            SGUF,
            NUCEP,
            EEMAIL,
            NUTELEFONE,
            NOME
        });
        return response.data;
    }

    async criarCampanhaEmpresa(
        DSCAMPANHA,
        IDOPERADOR,
        DTINICIO,
        DTFINAL,
        VRPERCDESCONTO,
        EMPRESAS
    ) {
        const response = await this.api.post(`${url}/api/campanha/todos.xsjs`, [{
            DSCAMPANHA,
            IDOPERADOR,
            DTINICIO,
            DTFINAL,
            VRPERCDESCONTO,
            EMPRESAS
        }]);
        return response.data;
    }

     async atualizarCampanhaEmpresa(
        DSCAMPANHA,
        IDOPERADOR,
        DTINICIO,
        DTFINAL,
        VRPERCDESCONTO,
        IDCAMPANHA
    ) {
        const response = await this.api.put(`${url}/api/campanha/todos.xsjs`, [{
            DSCAMPANHA,
            IDOPERADOR,
            DTINICIO,
            DTFINAL,
            VRPERCDESCONTO,
            IDCAMPANHA
        }]);
        return response.data;
    }
}

