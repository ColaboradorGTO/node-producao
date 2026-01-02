import axios from "axios";
import 'dotenv/config';
import { DivergenciaClient } from "../client/divergenciaClient.js";
import { DivergenciaService } from "../service/divergenciaService.js";
import atualizarStatusDivergenciaSchema from "../schema/atualizarStatusDivergenciaSchema.js";
import createStatusDivergenciaSchema from "../schema/createStatusDivergenciaSchema.js";

const url = process.env.API_URL;
const divergenciaClient = new DivergenciaClient(url);
const divergenciaService = new DivergenciaService(divergenciaClient);

class DivergenciaControllers {
    async getListaStatusOTConfrecencia(req, res,) {
        let { idResumoOT, page, pageSize } = req.query;

        idResumoOT = idResumoOT ? idResumoOT : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';
        try {
            const response = await axios.get(`${url}/api/conferencia-cega/status-divergencia.xsjs`)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async putStatusDivergencia(req, res) {

    try {
      const { error, value } = atualizarStatusDivergenciaSchema.validate(req.body, {

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

      const response = await divergenciaService.updateStatusDivergencia(
        value.DESCRICAODIVERGENCIA,
        value.STATIVO,
        value.IDSTATUSDIVERGENCIA
      );

      return res.status(200).json(response);
    } catch (error) {
      console.log('Erro no DivergenciaControllers.putStatusDivergencia:', error);
      return res.status(500).json({ message: 'Erro DivergenciaControllers.putStatusDivergencia' });

    }
  }

     async postStatusDivergencia(req, res) {

    try {
      const { error, value } = createStatusDivergenciaSchema.validate(req.body, {

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

      const response = await divergenciaService.createStatusDivergencia(
        value.DESCRICAODIVERGENCIA,
        value.IDUSRCRIACAO,
        value.STATIVO
      );

      return res.status(200).json(response);
    } catch (error) {
      console.log('Erro no DivergenciaControllers.postStatusDivergencia:', error);
      return res.status(500).json({ message: 'Erro DivergenciaControllers.postStatusDivergencia' });

    }
  }
}

export default new DivergenciaControllers();