export class PagamentoService {
    constructor(client) {
        this.client = client;
    }

    async updateCondicaoPagamento(
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
        if (!IDCONDICAOPAGAMENTO) {
            throw new Error("IDCONDICAOPAGAMENTO is required, services");
        }
        const result = await this.client.atualizarCondicaoPagamento(
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
        )
        
        return result;
    }

        async createCondicaoPagamento(
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
       
        const result = await this.client.criarCondicaoPagamento(
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
        )
        
        return result;
    }
}