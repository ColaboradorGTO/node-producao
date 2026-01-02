import axios from "axios";
import 'dotenv/config';
import { dataFormatada } from "../../../utils/dataFormatada.js";
import { DespesaClient } from "../client/despesaClient.js";
import { DespesaService } from "../service/despesaService.js";

const url = process.env.API_URL;
const despesaClient = new DespesaClient(url);
const despesaService = new DespesaService(despesaClient);

class DespesasControllers {

    async getListaDespesasLojaADM(req, res) {
        let { idEmpresa, pageSize, dataPesquisa } = req.query;

        if (!isNaN(idEmpresa)) {
            idEmpresa = Number(idEmpresa) ? Number(idEmpresa) : '';
            pageSize = pageSize ? pageSize : '';
            dataPesquisa = dataFormatada(dataPesquisa) ? dataPesquisa : '';

            try {
                const apiUrl = `${url}/api/administrativo/despesa-loja.xsjs?idEmpresa=${idEmpresa}&dataPesquisa=${dataPesquisa}`;
                const response = await axios.get(apiUrl);

                return res.json(response.data);
            } catch (error) {
                console.error("Erro ao conectar ao servidor:", error);
                throw error;
            }
        }
    }

    async getDetalheDespesas(req, res) {

        let { idEmpresa, pageNumber, datapesq } = req.query;
        if (!isNaN(idEmpresa)) {
            idEmpresa = Number(idEmpresa);
            const pageSize = 100;
            const offset = (pageNumber - 1) * pageSize;
            datapesq = dataFormatada(datapesq)

            try {
                const apiUrl = `${url}/api/administrativo/detalhe-despesa.xsjs?pagesize=${pageSize}&idEmpresa=${idEmpresa}&dataPesquisa=${datapesq}`
                const response = await axios.get(apiUrl)

                return res.json(response.data);
            } catch (error) {
                console.error("Unable to connect to the database:", error);
                throw error;
            }
        }
    }
}

export default new DespesasControllers();