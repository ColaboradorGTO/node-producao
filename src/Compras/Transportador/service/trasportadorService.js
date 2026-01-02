export class TrasportadorService {
    constructor(client) {
        this.client = client;
    }

    async updateCadastroTrasportador(
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
        if (!IDTRANSPORTADORA) {
            throw new Error("IDTRANSPORTADORA is required, services");
        }
        const result = await this.client.atualizarCadastroTrasportador(
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
        )
        return result;
    }

    async createCadastroTrasportador(
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

        const result = await this.client.criarCadastroTrasportador(
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
        )
        return result;
    }
}