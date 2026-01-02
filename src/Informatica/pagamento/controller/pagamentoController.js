import axios from "axios";
import 'dotenv/config';
import { PagamentoClient } from "../client/pagamentoClient.js";
import { PagamentosService } from "../../../Administrativo/Pagamentos/service/pagamentosService.js";

const url = process.env.API_URL;
const pagamentoClient = new PagamentoClient(url);
const pagamentoService = new PagamentosService(pagamentoClient);

class PagamentoControllers {
    async getListaPagamentoTEFInformatica(req, res) {
        let { } = req.query;
        try {
            const apiUrl = `${url}/api/informatica/pagamento-tef.xsjs?`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaPagamentoPOSInformatica(req, res) {
        let { } = req.query;
        try {
            const apiUrl = `${url}/api/informatica/pagamento-pos.xsjs?`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaMeioPagamentoCredSystem(req, res) {
        let { idEmpresa, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;

        try {
            idEmpresa = idEmpresa ? idEmpresa : '';
            dataPesquisaInicio = dataPesquisaInicio ? dataFormatada(dataPesquisaInicio) : '';
            dataPesquisaFim = dataPesquisaFim ? dataFormatada(dataPesquisaFim) : '';
            page = page ? page : '';
            pageSize = pageSize ? pageSize : '';

            const apiUrl = `${url}/api/informatica/meio-pagamento-credsystem.xsjs?idEmpresa=${idEmpresa}&dtInicio=${dataPesquisaInicio}&dtFim=${dataPesquisaFim}&page=${page}&pageSize=${pageSize}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }
}

export default new PagamentoControllers();