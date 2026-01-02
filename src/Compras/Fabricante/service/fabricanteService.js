export class FabricanteService {
    constructor(client) {
        this.client = client;
    }

    async updateFabricante(
        IDFABRICANTE,
        DSFABRICANTE,
        DTULTATUALIZACAO,
        DTCADASTRO,
        STATIVO,
    ) {
        if (!IDFABRICANTE) {
            throw new Error("IDFABRICANTE is required, services");
        }
        const result = await this.client.atualizarFabricante(
            IDFABRICANTE,
            DSFABRICANTE,
            DTULTATUALIZACAO,
            DTCADASTRO,
            STATIVO,
        )
        return result;
    }

    async updateFabricanteFornecedor(
        IDFABRICANTEFORN,
        IDFABRICANTE,
        IDFORNECEDOR,
        STATIVO,
    ) {
        if (!IDFABRICANTEFORN) {
            throw new Error("IDFABRICANTEFORN is required, services");
        }
        if (!IDFABRICANTE) {
            throw new Error("IDFABRICANTE is required, services");
        }
        const result = await this.client.atualizarFabricanteFornecedor(
            IDFABRICANTEFORN,
            IDFABRICANTE,
            IDFORNECEDOR,
            STATIVO,
        )
        return result;
    }

    async createFabricante(
        DSFABRICANTE,
        DTCADASTRO,
        DTULTATUALIZACAO,
        STATIVO,
    ) {

        const result = await this.client.criarFabricante(
            DSFABRICANTE,
            DTCADASTRO,
            DTULTATUALIZACAO,
            STATIVO,
        )
        return result;
    }

    async createFabricanteFornecedor(
        IDFABFORN,
        IDFABRICANTE,
        IDFORNECEDOR,
        STATIVO,
    ) {

        const result = await this.client.criarFabricanteFornecedor(
            IDFABFORN,
            IDFABRICANTE,
            IDFORNECEDOR,
            STATIVO,
        )
        return result;
    }

}