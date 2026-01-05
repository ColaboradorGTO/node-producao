export class ResumoVoucherService {
    constructor(client) {
        this.client = client;
    }

    async createAtorizacaoEditarVoucher(
        MATRICULA,
        SENHA

    ) {
        if (!MATRICULA) {
            throw new Error("MATRICULA is required, services");
        }
        if (!SENHA) {
            throw new Error("SENHA is required, services");
        }
        const result = await this.client.criarAtorizacaoEditarVoucher(
            MATRICULA,
            SENHA
        )
        return result;
    }

    async createAuthFuncionarioCreateVoucher(
        MATRICULA,
        SENHA,
        IDEMPRESALOGADA,
        IDGRUPOEMPRESARIAL,
        IDVENDA,
        STTIPOTROCA

    ) {
        if (!MATRICULA) {
            throw new Error("MATRICULA is required, services");
        }
        if (!SENHA) {
            throw new Error("SENHA is required, services");
        }
        if (!IDEMPRESALOGADA) {
            throw new Error("IDEMPRESALOGADA is required, services");
        }
        if (!IDGRUPOEMPRESARIAL) {
            throw new Error("IDGRUPOEMPRESARIAL is required, services");
        }
        if (!IDVENDA) {
            throw new Error("IDVENDA is required, services");
        }

        const result = await this.client.criarAuthFuncionarioCreateVoucher(
            MATRICULA,
            SENHA,
            IDEMPRESALOGADA,
            IDGRUPOEMPRESARIAL,
            IDVENDA,
            STTIPOTROCA
        )
        return result;
    }

    async createAuthFuncionarioPrintVoucher(
        MATRICULA,
        SENHA,
        IDEMPRESALOGADA,
        IDGRUPOEMPRESARIAL,
        IDVOUCHER

    ) {
        if (!MATRICULA) {
            throw new Error("MATRICULA is required, services");
        }
        if (!SENHA) {
            throw new Error("SENHA is required, services");
        }
        if (!IDEMPRESALOGADA) {
            throw new Error("IDEMPRESALOGADA is required, services");
        }
        if (!IDGRUPOEMPRESARIAL) {
            throw new Error("IDGRUPOEMPRESARIAL is required, services");
        }
        if (!IDVOUCHER) {
            throw new Error("IDVOUCHER is required, services");
        }
        const result = await this.client.criarAuthFuncionarioPrintVoucher(
            MATRICULA,
            SENHA,
            IDEMPRESALOGADA,
            IDGRUPOEMPRESARIAL,
            IDVOUCHER
        )
        return result;
    }

    async createAuthFuncionarioUpdateVoucher(
        MATRICULA,
        SENHA,
        IDEMPRESALOGADA,
        IDGRUPOEMPRESARIAL,
        IDVOUCHER

    ) {
        if (!MATRICULA) {
            throw new Error("MATRICULA is required, services");
        }
        if (!SENHA) {
            throw new Error("SENHA is required, services");
        }
        if (!IDEMPRESALOGADA) {
            throw new Error("IDEMPRESALOGADA is required, services");
        }
        if (!IDGRUPOEMPRESARIAL) {
            throw new Error("IDGRUPOEMPRESARIAL is required, services");
        }
        if (!IDVOUCHER) {
            throw new Error("IDVOUCHER is required, services");
        }
        const result = await this.client.criarAuthFuncionarioUpdateVoucher(
            MATRICULA,
            SENHA,
            IDEMPRESALOGADA,
            IDGRUPOEMPRESARIAL,
            IDVOUCHER
        )
        return result;
    }

    async updateCliente(
        IDCLIENTE,
        IDEMPRESA,
        DSNOMERAZAOSOCIAL,
        DSAPELIDONOMEFANTASIA,
        TPCLIENTE,
        NUCPFCNPJ,
        NURGINSCESTADUAL,
        NUINSCMUNICIPAL,
        NUCEP,
        NUIBGE,
        EENDERECO,
        NUENDERECO,
        ECOMPLEMENTO,
        EBAIRRO,
        ECIDADE,
        SGUF,
        EEMAIL,
        NUTELCOMERCIAL,
        NUTELCELULAR,
        DTNASCFUNDACAO,
        IDINDICACAOIE,
        DSINDICACAOIE,
        IDFUNCIONARIO
    ) {
        if (!IDCLIENTE) {
            throw new Error("IDCLIENTE is required, services");
        }
        if (!IDEMPRESA) {
            throw new Error("IDEMPRESA is required, services");
        }

        const result = await this.client.atualizarCliente(
            IDCLIENTE,
            IDEMPRESA,
            DSNOMERAZAOSOCIAL,
            DSAPELIDONOMEFANTASIA,
            TPCLIENTE,
            NUCPFCNPJ,
            NURGINSCESTADUAL,
            NUINSCMUNICIPAL,
            NUCEP,
            NUIBGE,
            EENDERECO,
            NUENDERECO,
            ECOMPLEMENTO,
            EBAIRRO,
            ECIDADE,
            SGUF,
            EEMAIL,
            NUTELCOMERCIAL,
            NUTELCELULAR,
            DTNASCFUNDACAO,
            IDINDICACAOIE,
            DSINDICACAOIE,
            IDFUNCIONARIO
        )
        return result;
    }

    async createCliente(
        IDCLIENTE,
        IDEMPRESA,
        DSNOMERAZAOSOCIAL,
        DSAPELIDONOMEFANTASIA,
        TPCLIENTE,
        NUCPFCNPJ,
        NURGINSCESTADUAL,
        NUINSCMUNICIPAL,
        NUCEP,
        NUIBGE,
        EENDERECO,
        NUENDERECO,
        ECOMPLEMENTO,
        EBAIRRO,
        ECIDADE,
        SGUF,
        EEMAIL,
        NUTELCOMERCIAL,
        NUTELCELULAR,
        DTNASCFUNDACAO,
        IDINDICACAOIE,
        DSINDICACAOIE,
        IDFUNCIONARIO

    ) {

        const result = await this.client.criarCliente(
            IDCLIENTE,
            IDEMPRESA,
            DSNOMERAZAOSOCIAL,
            DSAPELIDONOMEFANTASIA,
            TPCLIENTE,
            NUCPFCNPJ,
            NURGINSCESTADUAL,
            NUINSCMUNICIPAL,
            NUCEP,
            NUIBGE,
            EENDERECO,
            NUENDERECO,
            ECOMPLEMENTO,
            EBAIRRO,
            ECIDADE,
            SGUF,
            EEMAIL,
            NUTELCOMERCIAL,
            NUTELCELULAR,
            DTNASCFUNDACAO,
            IDINDICACAOIE,
            DSINDICACAOIE,
            IDFUNCIONARIO
        )
        return result;
    }

    async createResumoVoucher(
        IDGRUPOEMPRESARIAL,
        IDEMPRESAORIGEM,
        IDCAIXAORIGEM,
        IDNFEDEVOLUCAO,
        IDUSRINVOUCHER,
        IDVENDEDOR,
        IDCLIENTE,
        NUCPF,
        VRVOUCHER,
        IDRESUMOVENDAWEB,
        STTIPOTROCA,
        MOTIVOTROCA,
        IDUSRLIBERACAOCRIACAO,
        detVoucher,
        produtosVoucher
    ) {
        const result = await this.client.criarResumoVoucher(
            IDGRUPOEMPRESARIAL,
            IDEMPRESAORIGEM,
            IDCAIXAORIGEM,
            IDNFEDEVOLUCAO,
            IDUSRINVOUCHER,
            IDVENDEDOR,
            IDCLIENTE,
            NUCPF,
            VRVOUCHER,
            IDRESUMOVENDAWEB,
            STTIPOTROCA,
            MOTIVOTROCA,
            IDUSRLIBERACAOCRIACAO,
            detVoucher,
            produtosVoucher
        )
        return result;
    }

    async updateResumoVoucher(
        STATIVO,
        STCANCELADO,
        DSMOTIVOTROCASTATUS,
        IDFUNCIONARIO,
        STSTATUS,
        STTIPOTROCA,
        IDVOUCHER,
        IDEMPRESALOGADA,
        IDGRUPOEMPRESARIAL
    ) {
        if (!IDVOUCHER) {
            throw new Error("IDVOUCHER is required, services");
        }
        if (!IDEMPRESALOGADA) {
            throw new Error("IDEMPRESALOGADA is required, services");
        }
        if (!IDFUNCIONARIO) {
            throw new Error("IDFUNCIONARIO is required, services");
        }
        const result = await this.client.atualizarResumoVoucher(
            STATIVO,
            STCANCELADO,
            DSMOTIVOTROCASTATUS,
            IDFUNCIONARIO,
            STSTATUS,
            STTIPOTROCA,
            IDVOUCHER,
            IDEMPRESALOGADA,
            IDGRUPOEMPRESARIAL
        )
        return result;
    }
}

