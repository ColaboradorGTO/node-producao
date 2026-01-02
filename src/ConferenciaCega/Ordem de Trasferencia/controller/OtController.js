import axios from "axios";
import 'dotenv/config';
import { OrdemTrasferenciaClient } from "../client/OtClient.js";
import { OrdemTrasferenciaService } from "../service/OtService.js";
import { dataFormatada } from "../../../utils/dataFormatada.js";
import atualizarResumoOrdemTransferenciaSchema from "../schema/atualizarResumoOrdemTransferenciaSchema.js";

const url = process.env.API_URL;
const ordemTrasferenciaClient = new OrdemTrasferenciaClient(url);
const ordemTrasferenciaService = new OrdemTrasferenciaService(ordemTrasferenciaClient);

class OrdemTrasfereneciaControllers {
    async getListaOrdemTransferenciaConferenciaCega(req, res,) {
        let { idResumoOT, idTipoFiltro, idEmpresaOrigem, idEmpresaDestino, dataPesquisaInicio, dataPesquisaFim } = req.query;

        idResumoOT = idResumoOT ? idResumoOT : '';
        idTipoFiltro = idTipoFiltro ? idTipoFiltro : '';
        idEmpresaOrigem = idEmpresaOrigem ? idEmpresaOrigem : '';
        idEmpresaDestino = idEmpresaDestino ? idEmpresaDestino : '';
        dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
        dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';

        dataPesquisaInicio = dataFormatada(dataPesquisaInicio)
        dataPesquisaFim = dataFormatada(dataPesquisaFim)

        try {
            const response = await axios.get(`${url}/api/conferencia-cega/resumo-ordem-transferencia.xsjs?id=${idResumoOT}&idtipofiltro=${idTipoFiltro}&idEmpresaOrigem=${idEmpresaOrigem}&idEmpresaDestino=${idEmpresaDestino}&datapesqinicio=${dataPesquisaInicio}&datapesqfim=${dataPesquisaFim}`)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getDetalheOrdemTransferenciaConferenciaCega(req, res,) {
        let { idResumoOT, idTipoFiltro, page, pageSize } = req.query;

        idResumoOT = idResumoOT ? idResumoOT : '';
        idTipoFiltro = idTipoFiltro ? idTipoFiltro : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {
            const response = await axios.get(`${url}/api/conferencia-cega/detalhe-ordem-transferencia.xsjs?id=${idResumoOT}&idtipofiltro=${idTipoFiltro}&page=${page}&pageSize=${pageSize}`)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async putResumoOrdemTransferencia(req, res) {

        try {
            const { error, value } = atualizarResumoOrdemTransferenciaSchema.validate(req.body, {

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

            const response = await ordemTrasferenciaService.updateResumoOrdemTransferencia(
                value.IDSTDIVERGENCIA,
                value.OBSDIVERGENCIA,
                value.IDUSRAJUSTE,
                value.IDSTATUSOT,
                value.IDRESUMOOT
            );

            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro no OrdemTrasfereneciaControllers.putResumoOrdemTransferencia:', error);
            return res.status(500).json({ message: 'Erro OrdemTrasfereneciaControllers.putResumoOrdemTransferencia' });

        }
    }
}

export default new OrdemTrasfereneciaControllers();