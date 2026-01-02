export class ProdutoService {
    constructor(client) {
        this.client = client;
    }

    async updateProdutoImagem(
        IDIMAGEMPRODUTO,
        STATIVO,
    ) {
        if (!IDIMAGEMPRODUTO) {
            throw new Error("IDIMAGEMPRODUTO is required, services");
        }
        if (!STATIVO) {
            throw new Error("STATIVO is required, services");
        }
        const result = await this.client.atualizarProdutoImagem(
            IDIMAGEMPRODUTO,
            STATIVO,
        )
        return result;
    }

    async createImagemProduto(
        IDRESUMOPEDIDO,
        NUREF,
        IMAGEM,
        STATIVO,
        IDPRODIMAGEM
    ) {
     
        if (!IDPRODIMAGEM) {
            throw new Error("IDPRODIMAGEM is required, services");
        }
        const result = await this.client.criarImagemProduto(
            IDRESUMOPEDIDO,
            NUREF,
            IMAGEM,
            STATIVO,
            IDPRODIMAGEM
        )
        return result;
    }
}