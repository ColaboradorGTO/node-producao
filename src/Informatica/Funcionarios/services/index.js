export class FuncionarioService {
  constructor(client) {
    this.client = client;
  }
  async updateFuncionario(
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

    if (!ID) {
      throw new Error('ID é obrigatório.');
    }

    const result = await this.client.atualizarFuncionario(
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
    );

    return result;
  }

  async createFuncionario(

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
    if (!NOFUNCIONARIO) {
      throw new Error('NOFUNCIONARIO do funcionário é obrigatório.');
    }

    if (!NUCPF) {
      throw new Error('CPF do funcionário é obrigatório.');
    }

    if (!VALORSALARIO) {
      throw new Error('VALORSALARIO é obrigatório.');
    }

    if (!IDEMPRESA) {
      throw new Error('ID da empresa é obrigatório.');
    }
    if (!IDSUBGRUPOEMPRESARIAL) {
      throw new Error('IDSUBGRUPOEMPRESARIAL é obrigatório.');
    }
    if (!STATIVO) {
      throw new Error('STATIVO é obrigatório.');
    }
    if (!DSTIPO) {
      throw new Error('DSTIPO é obrigatório.');
    }
    if (!STLOJA) {
      throw new Error('STLOJA é obrigatório.');
    }

    const result = await this.client.criarFuncionario(
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
    );

    return result;
  }

  async inativarFuncionario(
    DATAULTIMAALTERACAO,
    STATIVO,
    DATA_DEMISSAO,
    ID
  ) {
    if (!ID) {
      throw new Error("ID é obrigatório para inativar funcionário.");
    }
    if (!STATIVO) {
      throw new Error("STATIVO é obrigatório.");
    }


    return await this.client.inativarFuncionario(
      DATAULTIMAALTERACAO,
      STATIVO,
      DATA_DEMISSAO,
      ID
    );
  }

  async updateDescontoFuncionario(
    DTINICIODESC,
    DTFIMDESC,
    PERCDESCUSUAUTORIZADO,
    MOTIVODESC,
    IDFUNCALTERACAO,
    ID
  ) {

    if (!ID) {
      throw new Error("ID é obrigatório");
    }
    if (!IDFUNCALTERACAO) {
      throw new Error("IDFUNCIONARIOULTALTERACAO é obrigatório.");
    }

    return await this.client.atualizarDescontoFuncionario(
      DTINICIODESC,
      DTFIMDESC,
      PERCDESCUSUAUTORIZADO,
      MOTIVODESC,
      IDFUNCALTERACAO,
      ID
    );
  }

}