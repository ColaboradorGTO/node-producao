import axios from "axios";
import 'dotenv/config';
import { PagamentosClient } from "../client/pagamentoClient.js";
import { PagamentosService } from "../service/pagamentosService.js";

const url = process.env.API_URL;
const pagamentosClient = new PagamentosClient(url);
const pagamentosService = new PagamentosService(pagamentosClient);

class AdmPagamentosControllers {

    async getListaFormaPagamento(req, res) {
        let { } = req.query;
        try {

            const apiUrl = `${url}/api/administrativo/formapagamento.xsjs`;
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }
    async getListaPagamentoTef(req, res) {
        let { numeroTef, page, pageSize } = req.query;
        try {

            numeroTef = numeroTef ? numeroTef : '';
            page = page ? page : '';
            pageSize = pageSize ? pageSize : '';
            const apiUrl = `${url}/api/administrativo/pagamento-tef.xsjs`;
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }
    async getListaPagamentoPos(req, res) {
        let { numeroPos, page, pageSize } = req.query;
        try {
            numeroPos = numeroPos ? numeroPos : '';
            page = page ? page : '';
            pageSize = pageSize ? pageSize : '';

            const apiUrl = `${url}/api/administrativo/pagamento-pos.xsjs`
            const response = await axios.get(apiUrl)
            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }
}

export default new AdmPagamentosControllers();