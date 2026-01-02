import axios from 'axios';
import 'dotenv/config';
const url = process.env.API_URL;

export class PagamentoClient {
    constructor(baseURL) {
        this.api = axios.create({
            baseURL: baseURL || url,
            timeout: 80000
        });
    }
    async atualizarCondicaoPagamento(
        IDCONDICAOPAGAMENTO,
        IDGRUPOEMPRESARIAL,
        DSCONDICAOPAG,
        STPARCELADO,
        NUPARCELAS,
        NUNDIA1PAG,
        NUNDIA2PAG,
        NUNDIA3PAG,
        NUNDIA4PAG,
        NUNDIA5PAG,
        NUNDIA6PAG,
        NUNDIA7PAG,
        NUNDIA8PAG,
        NUNDIA9PAG,
        NUNDIA10PAG,
        NUNDIA11PAG,
        NUNDIA12PAG,
        DTULTALTERACAO,
        QTDDIAS,
        STATIVO,
        IDTPDOCUMENTO
    ) {
        const response = await this.api.put(`${url}/api/compras/condicaopagamento.xsjs`, {
            IDCONDICAOPAGAMENTO,
            IDGRUPOEMPRESARIAL,
            DSCONDICAOPAG,
            STPARCELADO,
            NUPARCELAS,
            NUNDIA1PAG,
            NUNDIA2PAG,
            NUNDIA3PAG,
            NUNDIA4PAG,
            NUNDIA5PAG,
            NUNDIA6PAG,
            NUNDIA7PAG,
            NUNDIA8PAG,
            NUNDIA9PAG,
            NUNDIA10PAG,
            NUNDIA11PAG,
            NUNDIA12PAG,
            DTULTALTERACAO,
            QTDDIAS,
            STATIVO,
            IDTPDOCUMENTO
        });

        return response.data;
    }

     async criarCondicaoPagamento(
        IDGRUPOEMPRESARIAL,
        DSCONDICAOPAG,
        STPARCELADO,
        NUPARCELAS,
        NUNDIA1PAG,
        NUNDIA2PAG,
        NUNDIA3PAG,
        NUNDIA4PAG,
        NUNDIA5PAG,
        NUNDIA6PAG,
        NUNDIA7PAG,
        NUNDIA8PAG,
        NUNDIA9PAG,
        NUNDIA10PAG,
        NUNDIA11PAG,
        NUNDIA12PAG,
        DTULTALTERACAO,
        QTDDIAS,
        STATIVO,
        IDTPDOCUMENTO
    ) {
        const response = await this.api.post(`${url}/api/compras/condicaopagamento.xsjs`, {
            IDGRUPOEMPRESARIAL,
            DSCONDICAOPAG,
            STPARCELADO,
            NUPARCELAS,
            NUNDIA1PAG,
            NUNDIA2PAG,
            NUNDIA3PAG,
            NUNDIA4PAG,
            NUNDIA5PAG,
            NUNDIA6PAG,
            NUNDIA7PAG,
            NUNDIA8PAG,
            NUNDIA9PAG,
            NUNDIA10PAG,
            NUNDIA11PAG,
            NUNDIA12PAG,
            DTULTALTERACAO,
            QTDDIAS,
            STATIVO,
            IDTPDOCUMENTO
        });

        return response.data;
    }
}

