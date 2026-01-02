import axios from "axios";
import { dataFormatada } from "../../utils/dataFormatada.js";
import { DetalhesFaturasClient } from "../client/detalhesFaturasClient.js";
import { DetalhesFaturasService } from "../service/detalhesFaturasService.js";
import updateDetalheFaturaLoja from "../schema/updateDetalheFaturaLoja.js";
import createDetalheFaturaLoja from "../schema/createDetalheFaturaLoja.js";
import 'dotenv/config';
import updateFaturaSchema from "../schema/updateFaturaSchema.js";

const url = process.env.API_URL;
const detalhesFaturasClient = new DetalhesFaturasClient(url);
const detalhesFaturasService = new DetalhesFaturasService(detalhesFaturasClient);

class DetalheFaturasControllers {

  async getDetalheFatura(req, res) {

    let { idEmpresa, pageNumber, dataPesquisaInicio, dataPesquisaFim, } = req.query;
    if (!isNaN(idEmpresa)) {
      idEmpresa = Number(idEmpresa);
      const pageSize = 100;
      const offset = (pageNumber - 1) * pageSize;
      dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataPesquisaInicio : '';
      dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataPesquisaFim : '';

      try {
        const apiUrl = `${url}/api/detalhe-fatura.xsjs?idEmpresa=${idEmpresa}&dataPesquisaInic=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}`
        const response = await axios.get(apiUrl)

        return res.json(response.data);
      } catch (error) {
        console.error("Unable to connect to the database:", error);
        throw error;
      }
    }
  }

  async getDetalheFaturaFinanceiro(req, res) {
    let { idEmpresa, dataPesquisaInicio, dataPesquisaFim, codigoFatura, page, pageSize } = req.query;

    idEmpresa = idEmpresa ? idEmpresa : '';
    dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
    dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
    codigoFatura = codigoFatura ? codigoFatura : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';

    try {

      const response = await getDetalheFatura(idEmpresa, dataPesquisaInicio, dataPesquisaFim, codigoFatura, page, pageSize)
      return res.json(response);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }

  }

  async getDetalheFaturaById(req, res) {
    let { idFatura } = req.query;

    if (!idFatura) {
      return res.status(400).json({ "error": "idFatura nao informado" })
    }

    try {
      const apiUrl = `${url}/api/detalhe-fatura.xsjs?id=${idFatura}`
      const response = await axios.get(apiUrl)

      return res.json(response.data);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }
  }

  async putFatura(req, res) {

    try {
      const { error, value } = updateFaturaSchema.validate(req.body, {

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

      const response = await detalhesFaturasService.updateFatura(
        value.NUCODAUTORIZACAO,
        value.VRRECEBIDO,
        value.STCANCELADO,
        value.STPIX,
        value.NUAUTORIZACAO,
        value.IDDETALHEFATURA
      );

      return res.status(200).json(response);
    } catch (error) {
      console.log('Erro no DetalheFaturasControllers.putFatura:', error);
      return res.status(500).json({ message: 'Erro DetalheFaturasControllers.putFatura' });

    }
  }

  async postDetalheFaturaLoja(req, res) {

    try {
      const { error, value } = createDetalheFaturaLoja.validate(req.body, {

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

      const response = await detalhesFaturasService.createDetalheFaturaLoja(
        value.IDEMPRESA,
        value.IDFUNCIONARIO,
        value.IDDETALHEFATURALOCAL,
        value.IDCAIXAWEB,
        value.IDCAIXALOCAL,
        value.NUESTABELECIMENTO,
        value.NUCARTAO,
        value.DTPROCESSAMENTO,
        value.HRPROCESSAMENTO,
        value.NUNSU,
        value.NUNSUHOST,
        value.NUCODAUTORIZACAO,
        value.VRRECEBIDO,
        value.DTHRMIGRACAO,
        value.STCANCELADO,
        value.IDUSRCACELAMENTO,
        value.IDMOVIMENTOCAIXAWEB,
        value.STPIX,
        value.NUAUTORIZACAO
      );

      return res.status(200).json(response);
    } catch (error) {
      console.log('Erro no DetalheFaturasControllers.postDetalheFaturaLoja:', error);
      return res.status(500).json({ message: 'Erro DetalheFaturasControllers.postDetalheFaturaLoja' });
    }
  }

  async putDetalheFaturaLoja(req, res) {

    try {
      const { error, value } = updateDetalheFaturaLoja.validate(req.body, {

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

      const response = await detalhesFaturasService.updateDetalheFaturaLoja(
        value.STCANCELADO,
        value.IDUSRCACELAMENTO,
        value.TXTMOTIVOCANCELAMENTO,
        value.IDDETALHEFATURA
      );

      return res.status(200).json(response);
    } catch (error) {
      console.log('Erro no DetalheFaturasControllers.putDetalheFaturaLoja:', error);
      return res.status(500).json({ message: 'Erro DetalheFaturasControllers.putDetalheFaturaLoja' });

    }
  }

}

export default new DetalheFaturasControllers();