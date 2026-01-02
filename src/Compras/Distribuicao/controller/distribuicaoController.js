import axios from "axios";
import 'dotenv/config';
import { DistribuicaoService } from "../service/distribuicaoService.js";
import { DistribuicaoClient } from "../client/distribuicaoClient.js";
import { dataFormatada } from "../../../utils/dataFormatada.js";

const url = process.env.API_URL;
const distribuicaoClient = new DistribuicaoClient(url);
const distribuicaoService = new DistribuicaoService(distribuicaoClient);

class DistribuicaoControllers {
    async getListaDistribuicaoHistorico(req, res) {
        let { idFornecedor, dataPesquisaInicio, dataPesquisaFim } = req.query;

        idFornecedor = idFornecedor ? idFornecedor : '';
        dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataPesquisaInicio : '';
        dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataPesquisaFim : '';
        try {
            const apiUrl = `${url}/api/compras/distribuicao-compras-historico.xsjs?page=&idfornecedorpedido=${idFornecedor}&datainicial=${dataPesquisaInicio}&datafinal=${dataPesquisaFim}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("erro nos campos do banco:", error);
            throw error;
        }
    }

    async getListaDetalheDistribuicao(req, res) {
        let { idPedido } = req.query;

        idPedido = idPedido ? idPedido : '';
        try {
            const apiUrl = `${url}/api/compras/detalhe-distribuicao-compras.xsjs?page=&id=${idPedido}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("erro nos campos do banco:", error);
            throw error;
        }
    }

    async getListaDistribuicaoSugestoesHistorico(req, res) {
        let { idPedido } = req.query;

        idPedido = idPedido ? idPedido : '';
        try {
            const apiUrl = `${url}/api/compras/distribuicao-compras-sugestoes-historico.xsjs?page=&id=${idPedido}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("erro nos campos do banco:", error);
            throw error;
        }
    }
}

export default new DistribuicaoControllers();