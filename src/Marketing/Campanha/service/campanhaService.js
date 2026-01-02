export class CampanhaService {
    constructor(client) {
        this.client = client;
    }

    async updateCampanhaCliente(
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
        if (!ID) {
            throw new Error("ID is required, services");
        }
        const result = await this.client.atualizarCampanhaClient(
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
        )
        return result;
    }

    async createCampanhaCliente(
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

        const result = await this.client.criarCampanhaClient(
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
        )
        return result;
    }

    async createCampanhaEmpresa(
        DSCAMPANHA,
        IDOPERADOR,
        DTINICIO,
        DTFINAL,
        VRPERCDESCONTO,
        EMPRESAS
    ) {

        const result = await this.client.criarCampanhaEmpresa(
            DSCAMPANHA,
            IDOPERADOR,
            DTINICIO,
            DTFINAL,
            VRPERCDESCONTO,
            EMPRESAS
        )
        return result;
    }

    async updateCampanhaEmpresa(
        DSCAMPANHA,
        IDOPERADOR,
        DTINICIO,
        DTFINAL,
        VRPERCDESCONTO,
        IDCAMPANHA
    ) {

        const result = await this.client.atualizarCampanhaEmpresa(
            DSCAMPANHA,
            IDOPERADOR,
            DTINICIO,
            DTFINAL,
            VRPERCDESCONTO,
            IDCAMPANHA
        )
        return result;
    }
}
