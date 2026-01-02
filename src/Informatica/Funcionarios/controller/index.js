import { inativarFuncionarioSchema } from '../schema/funcionarioInativarSchema.js';
import { FuncionarioClient } from '../client/index.js';
import { FuncionarioService } from '../services/index.js';
import criarFuncionarioSchema from '../schema/criarFuncionario.js';
import atualizarFuncionarioSchema from '../schema/atualizarFuncionario.js';
import axios from 'axios';
import atualizarDescontoFuncionarioSchema from '../schema/atualizarDescontoFuncionario.js';

const funcionarioClient = new FuncionarioClient(process.env.INFORMATICA_API_URL);
const funcionarioService = new FuncionarioService(funcionarioClient);
const url = process.env.API_URL;

export class FuncionarioController {

  async getListaAtualizarFuncionario(req, res) {
    let { idFuncionario } = req.query;
    idFuncionario = idFuncionario ? idFuncionario : '';

    try {
      const apiUrl = `${url}/api/informatica/funcionario-loja.xsjs?pagesize=1000&id=${idFuncionario}`
      const response = await axios.get(apiUrl)
      if (response.status === 200) {
        return res.json(response.data);
      } else {
        return res.status(500).json({ message: "Erro ao buscar caixas." });
      }
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }
  }

  async getListaFuncionariosLoja(req, res) {
    let { byId, idEmpresa, cpf, noFuncionarioCPF, page, pageSize } = req.query;

    try {
      byId = byId ? byId : '';
      idEmpresa = idEmpresa ? idEmpresa : '';
      cpf = cpf ? cpf : '';
      noFuncionarioCPF = noFuncionarioCPF ? noFuncionarioCPF : '';
      page = page ? page : '';
      pageSize = pageSize ? pageSize : '';
      const apiUrl = `${url}/api/informatica/funcionario-loja.xsjs?id=${byId}&idEmpresa=${idEmpresa}&dsNomeFunc=${noFuncionarioCPF}&nuCPF=${cpf}&page=${page}&pagesize=${pageSize}`;

      const response = await axios.get(apiUrl)

      return res.json(response.data);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }
  }

  async putFuncionarioDesconto(req, res) {
    try {
      const { error, value } = atualizarDescontoFuncionarioSchema.validate(req.body, {
        abortEarly: false,
        stripUnknown: true
      });

      if (error) {
        return res.status(400).json({
          message: 'Dados inválidos',
          errors: error.details.map(detail => ({
            field: detail.path.join('.'),
            message: detail.message
          }))
        });
      }

      const response = await funcionarioService.updateDescontoFuncionario(
        value.DTINICIODESC,
        value.DTFIMDESC,
        value.PERCDESCUSUAUTORIZADO,
        value.MOTIVODESC,
        value.IDFUNCALTERACAO,
        value.ID
      );

      return res.status(200).json(response);
    } catch (error) {
      console.error("Erro no FuncionarioController.putFuncionarioDesconto:", error);
      return res.status(500).json({ error: "Erro no servidor" });
    }
  }

  async putFuncionarioLoja(req, res) {
    try {
      const { error, value } = atualizarFuncionarioSchema.validate(req.body, {
        abortEarly: false,
        stripUnknown: true
      });

      if (error) {
        return res.status(400).json({
          message: 'Dados inválidos',
          errors: error.details.map(detail => ({
            field: detail.path.join('.'),
            message: detail.message
          }))
        });
      }

      const response = await funcionarioService.updateFuncionario(
        value.NOFUNCIONARIO,
        value.NUCPF,
        value.NOLOGIN,
        value.PWSENHA,
        value.DSFUNCAO,
        value.DSTIPO,
        value.PERC,
        value.VALORSALARIO,
        value.VALORDISPONIVEL,
        value.MOTIVODESC,
        value.STCONVENIO,
        value.STDESCONTOFOLHA,
        value.STLOJA,
        value.DATA_ADMISSAO,
        value.ID

      );

      return res.status(200).json(response);
    } catch (error) {
      console.error("Erro no FuncionarioController.putFuncionarioLoja:", error);
      return res.status(500).json({ error: "Erro no servidor" });
    }
  }

  async postFuncionarioLoja(req, res) {
    try {
      const { error, value } = criarFuncionarioSchema.validate(req.body, {
        abortEarly: false,
        stripUnknown: true
      });

      if (error) {
        return res.status(400).json({
          message: 'Dados inválidos',
          errors: error.details.map(detail => ({
            field: detail.path.join('.'),
            message: detail.message
          }))
        });
      }

      const response = await funcionarioService.createFuncionario(
        value.IDSUBGRUPOEMPRESARIAL,
        value.IDEMPRESA,
        value.NOFUNCIONARIO,
        value.NUCPF,
        value.PWSENHA,
        value.DSFUNCAO,
        value.VALORSALARIO,
        value.PERC,
        value.STATIVO,
        value.DSTIPO,
        value.VALORDISPONIVEL,
        value.STCONVENIO,
        value.STLOJA,
        value.DATA_ADMISSAO

      );

      return res.status(201).json(response);
    } catch (error) {
      console.error("Erro no FuncionarioController.postFuncionarioLoja:", error);
      return res.status(500).json({ error: "Erro no servidor" });
    }
  }

  async putInativarFuncionario(req, res) {
    try {
      const { error, value } = inativarFuncionarioSchema.validate(req.body, {
        abortEarly: false,
        stripUnknown: true
      });

      if (error) {
        return res.status(400).json({
          message: "Dados inválidos",
          errors: error.details.map(detail => ({
            field: detail.path.join("."),
            message: detail.message
          }))
        });
      }

      const response = await funcionarioService.inativarFuncionario(
        value.DATAULTIMAALTERACAO,
        value.DATA_DEMISSAO,
        value.STATIVO,
        value.ID
      );

      return res.status(200).json(response);
    } catch (error) {
      console.error("Erro no FuncionarioController.putInativarFuncionario:", error);
      return res.status(500).json({ error: "Erro no servidor" });
    }
  }
}

export default new FuncionarioController();







