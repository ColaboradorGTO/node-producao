export class PromocaoService {
    constructor(client) {
        this.client = client;
    }

    async createProdutoPromocao(
        DSPROMO,
        VRPERCDESCONTO,
        VRPRECODESCONTO,
        VRAPARTIRDE,
        VRLIMITEDE,
        QTDAPARTIRDE,
        QTDLIMITEDE,
        DTINICIOPROMO,
        DTFIMPROMO,
        STATIVO,
        PRODUTOS,
        EMPRESAS,
        IDGRUPO
    ) {

        const result = await this.client.criarProdutoPromocao(
            DSPROMO,
            VRPERCDESCONTO,
            VRPRECODESCONTO,
            VRAPARTIRDE,
            VRLIMITEDE,
            QTDAPARTIRDE,
            QTDLIMITEDE,
            DTINICIOPROMO,
            DTFIMPROMO,
            STATIVO,
            PRODUTOS,
            EMPRESAS,
            IDGRUPO
        )
        return result;
    }
}