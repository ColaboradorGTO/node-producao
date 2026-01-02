import axios from "axios";
import 'dotenv/config';
import { VendasClient } from "../client/vendasClient.js";
import { VendasService } from "../service/vendasService.js";

const url = process.env.API_URL;
const vendasClient = new VendasClient(url);
const vendasService = new VendasService(vendasClient);

class VendasControllers {
    async getListaVendasLojaInformatica(req, res) {
        let { idEmpresa, status, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;
        try {
            idEmpresa = idEmpresa ? idEmpresa : '';
            status = status ? status : '';
            dataPesquisaInicio = dataPesquisaInicio ? dataFormatada(dataPesquisaInicio) : '';
            dataPesquisaFim = dataPesquisaFim ? dataFormatada(dataPesquisaFim) : '';
            page = page ? page : '';
            pageSize = pageSize ? pageSize : '';
            const apiUrl = `${url}/api/informatica/vendas-lojas.xsjs?idEmpresa=${idEmpresa}&status=${status}&dataInicio=${dataPesquisaInicio}&dataFim=${dataPesquisaFim}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaVendasAlloc(req, res) {
        let { idEmpresa, status, idVenda, dataPesquisaInicio, dataPesquisaFim, stVendasAlloc, page, pageSize } = req.query;
        idEmpresa = idEmpresa ? idEmpresa : '';
        status = status ? status : '';
        idVenda = idVenda ? idVenda : '';
        stVendasAlloc = stVendasAlloc ? stVendasAlloc : '';
        dataPesquisaInicio = dataPesquisaInicio ? dataFormatada(dataPesquisaInicio) : '';
        dataPesquisaFim = dataPesquisaFim ? dataFormatada(dataPesquisaFim) : '';
        try {

            const apiUrl = `${url}/api/informatica/lista-vendas-alloc.xsjs?idVenda=${idVenda}&idEmpresa=${idEmpresa}&dataPesquisaInic=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&stvendasalloc=${stVendasAlloc}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaVendasContigenciaIformatica(req, res) {
        let { idEmpresa, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;
        idEmpresa = idEmpresa ? idEmpresa : '';
        dataPesquisaInicio = dataPesquisaInicio ? dataFormatada(dataPesquisaInicio) : '';
        dataPesquisaFim = dataPesquisaFim ? dataFormatada(dataPesquisaFim) : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {
            const apiUrl = `${url}/api/informatica/lista-vendas-contingencia.xsjs?idEmpresa=${idEmpresa}&dataPesquisaInic=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }
}

export default new VendasControllers();