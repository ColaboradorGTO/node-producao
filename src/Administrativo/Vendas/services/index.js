export class VendasServices {
    constructor(client) {
        this.client = client;
    }

    async updateVendaPagamento(
        STCANCELADO,
        DTULTIMAALTERACAO,
        IDFUNCIONARIOCANCELA,
        TXTMOTIVOCANCELA,
        IDVENDA
    ) {
        if (!IDVENDA) {
            throw new Error('ID da venda é obrigatório.');
        }

        const result = await this.client.atualizarVendaPagamento(
            STCANCELADO,
            DTULTIMAALTERACAO,
            IDFUNCIONARIOCANCELA,
            TXTMOTIVOCANCELA,
            IDVENDA
        );

        return result;
    }

    async updateVendaVendedor(
        IDVENDEDOR,
        IDVENDADETALHE,
    ) {
        if (!IDVENDEDOR) {
            throw new Error('IDVENDEDOR é obrigatório.');
        }
        if (!IDVENDADETALHE) {
            throw new Error('IDVENDADETALHE é obrigatório.');
        }

        const result = await this.client.atualizarVendaVendedor(
            IDVENDEDOR,
            IDVENDADETALHE,
        );

        return result;
    }
}