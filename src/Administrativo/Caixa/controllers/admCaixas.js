import axios from "axios";
import { CaixaClient } from "../client/caixaClient.js";
import { CaixaService } from "../service/caixaService.js";
import { dataFormatada } from "../../../utils/dataFormatada.js";

const caixaClient = new CaixaClient(process.env.API_URL);
const caixaServices = new CaixaService(caixaClient);
const url = process.env.API_URL;

class ADMCaixasControllers {
    async getListaCaixasMovimento(req, res) {
        let { idEmpresa, dataFechamento, page, pageSize } = req.query;

        idEmpresa = idEmpresa ? idEmpresa : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';
        dataFechamento = dataFechamento ? dataFechamento : '';

        try {

            const apiUrl = `${url}/api/administrativo/quebra-caixa-loja.xsjs?idEmpresa=${idEmpresa}&dataPesquisa=${dataPesquisa}`
            const response = await axios.get(apiUrl)

            return res.json(response);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaQuebraCaixaResumoADM(req, res) {
        let { idEmpresa, pageNumber, dataPesquisa } = req.query;

        if (!isNaN(idEmpresa)) {
            idEmpresa = Number(idEmpresa);
            const pageSize = 100;
            const offset = (pageNumber - 1) * pageSize;
            dataPesquisa = dataFormatada(dataPesquisa)

            try {
                const apiUrl = `${url}/api/administrativo/quebra-caixa-loja.xsjs?idEmpresa=${idEmpresa}&dataPesquisa=${dataPesquisa}`
                const response = await axios.get(apiUrl)

                return res.json(response.data); // Retorna
            } catch (error) {
                console.error("Unable to connect to the database:", error);
                throw error;
            }
        }
    }

    async getretornoListaCaixasFechados(req, res) {

        let { idEmpresa, pageSize, dataFechamento } = req.query;
        if (!isNaN(idEmpresa)) {
            idEmpresa = Number(idEmpresa) ? Number(idEmpresa) : '';
            pageSize = pageSize ? pageSize : '';
            dataFechamento = dataFormatada(dataFechamento)
            try {
                const apiUrl = `${url}/api/administrativo/lista-caixas-fechados.xsjs?idEmpresa=${idEmpresa}&pageSize=${pageSize}&dataFechamento=${dataFechamento}`;
                const response = await axios.get(apiUrl)

                return res.json(response.data);
            } catch (error) {
                console.error("Unable to connect to the database:", error);
                throw error;
            }
        }
    }

    async getpesquisaMovimentoDeCaixa(req, res) {

        let { idEmpresa, pageNumber, datapesq } = req.query;
        if (!isNaN(idEmpresa)) {
            idEmpresa = Number(idEmpresa);
            const pageSize = 100;
            const offset = (pageNumber - 1) * pageSize;
            datapesq = dataFormatada(datapesq)

            try {
                const apiUrl = `${url}/api/administrativo/resumo-venda.xsjs?pagesize=${pageSize}&idEmpresa=${idEmpresa}&dataPesquisa=${datapesq}&offset=${offset}`
                const response = await axios.get(apiUrl)

                return res.json(response.data);
            } catch (error) {
                console.error("Unable to connect to the database:", error);
                throw error;
            }
        }
    }

}

export default new ADMCaixasControllers();