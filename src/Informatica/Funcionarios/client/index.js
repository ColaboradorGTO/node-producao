import axios from 'axios';
import 'dotenv/config';
const url = process.env.API_URL;

export class FuncionarioClient {
    constructor(baseURL) {
        this.api = axios.create({
            baseURL: baseURL || url,
            timeout: 80000
        });
    }

    async atualizarFuncionario(
        NOFUNCIONARIO,
        NUCPF,
        NOLOGIN,
        PWSENHA,
        DSFUNCAO,
        DSTIPO,
        PERC,
        VALORSALARIO,
        VALORDISPONIVEL,
        MOTIVODESC,
        STCONVENIO,
        STDESCONTOFOLHA,
        STLOJA,
        DATA_ADMISSAO,
        ID
    ) {
        const response = await this.api.put(`/api/informatica/funcionario-loja.xsjs`, {
            NOFUNCIONARIO,
            NUCPF,
            NOLOGIN,
            PWSENHA,
            DSFUNCAO,
            DSTIPO,
            PERC,
            VALORSALARIO,
            VALORDISPONIVEL,
            MOTIVODESC,
            STCONVENIO,
            STDESCONTOFOLHA,
            STLOJA,
            DATA_ADMISSAO,
            ID
        })
        return response.data;
    }

    async criarFuncionario(
        IDSUBGRUPOEMPRESARIAL,
        IDEMPRESA,
        NOFUNCIONARIO,
        NUCPF,
        PWSENHA,
        DSFUNCAO,
        VALORSALARIO,
        PERC,
        STATIVO,
        DSTIPO,
        VALORDISPONIVEL,
        STCONVENIO,
        STLOJA,
        DATA_ADMISSAO
    ) {
        const response = await this.api.post(`/api/informatica/funcionario-loja.xsjs`, [{
            IDSUBGRUPOEMPRESARIAL,
            IDEMPRESA,
            NOFUNCIONARIO,
            NUCPF,
            PWSENHA,
            DSFUNCAO,
            VALORSALARIO,
            PERC,
            STATIVO,
            DSTIPO,
            VALORDISPONIVEL,
            STCONVENIO,
            STLOJA,
            DATA_ADMISSAO
        }]);
        return response.data;
    }

    async inativarFuncionario(
        DATAULTIMAALTERACAO,
        DATA_DEMISSAO,
        STATIVO,
        ID
    ) {
        const response = await this.api.put('/api/informatica/funcionario-inativa.xsjs', {
            DATAULTIMAALTERACAO,
            DATA_DEMISSAO,
            STATIVO,
            ID
        });
        return response.data;
    }

    async atualizarDescontoFuncionario(
        DTINICIODESC,
        DTFIMDESC,
        PERCDESCUSUAUTORIZADO,
        MOTIVODESC,
        IDFUNCALTERACAO,
        ID
    ) {
        const response = await this.api.put('/api/informatica/funcionario-desconto.xsjs', {
            DTINICIODESC,
            DTFIMDESC,
            PERCDESCUSUAUTORIZADO,
            MOTIVODESC,
            IDFUNCALTERACAO,
            ID
        });
        return response.data;
    }
}

