import axios from "axios";
import 'dotenv/config';
import { dataFormatada } from "../../../utils/dataFormatada.js";
import { PromocaoClient } from "../client/promocaoClient.js";
import { PromocaoService } from "../service/promocaoService.js";

const url = process.env.API_URL;

const promocaoClient = new PromocaoClient(url);
const promocaoService = new PromocaoService(promocaoClient);

class PromocaoControllers {

    async getListaPromocoes(req, res) {
        let { dataPesquisaInicio, dataPesquisaFim } = req.query;
        dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataPesquisaInicio : '';
        dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataPesquisaFim : '';
        try {
            const apiUrl = `${url}/api/compras/lista_promocoes.xsjs?pageSize=1000&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}`;
            const response = await axios.get(apiUrl)
            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaEmpresaPromocoes(req, res) {
        let { idResumoPromocoes } = req.query;
        idResumoPromocoes = idResumoPromocoes ? idResumoPromocoes : '';
        try {
            const apiUrl = `${url}/api/compras/lista_empresapromocoes.xsjs?idResPromo=${idResumoPromocoes}`;
            const response = await axios.get(apiUrl)
            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaProdutoOrigemPromocoes(req, res) {
        let { idResumoPromocoes } = req.query;
        idResumoPromocoes = idResumoPromocoes ? idResumoPromocoes : '';
        try {
            const apiUrl = `${url}/api/compras/lista_produtosorigempromocoes.xsjs?idResPromo=${idResumoPromocoes}`;
            const response = await axios.get(apiUrl)
            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaProdutoDestinoPromocoes(req, res) {
        let { idResumoPromocoes } = req.query;
        idResumoPromocoes = idResumoPromocoes ? idResumoPromocoes : '';
        try {
            const apiUrl = `${url}/api/compras/lista_produtosdestinopromocoes.xsjs?idResPromo=${idResumoPromocoes}`;
            const response = await axios.get(apiUrl)
            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }
}

export default new PromocaoControllers();