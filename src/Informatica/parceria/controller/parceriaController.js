import axios from "axios";
import 'dotenv/config';
import { ParceriaClient } from "../client/parceriaClient.js";
import { ParceriaService } from "../service/parceriaService.js";
import { dataFormatada } from "../../../utils/dataFormatada.js";

const url = process.env.API_URL;
const parceriaClient = new ParceriaClient(url);
const parceriaService = new ParceriaService(parceriaClient);

class ParceriaControllers {
    async getListaParceriaCredSystem(req, res) {
        let { idEmpresa, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;

        try {
            idEmpresa = idEmpresa ? idEmpresa : '';
            dataPesquisaInicio = dataPesquisaInicio ? dataFormatada(dataPesquisaInicio) : '';
            dataPesquisaFim = dataPesquisaFim ? dataFormatada(dataPesquisaFim) : '';
            page = page ? page : '';
            pageSize = pageSize ? pageSize : '';
            const apiUrl = `${url}/api/informatica/parceria-credsystem.xsjs?idEmpresa=${idEmpresa}&dtInicio=${dataPesquisaInicio}&dtFim=${dataPesquisaFim}&page=${page}&pageSize=${pageSize}`
            const response = await axios.get(apiUrl)
         
            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }
}

export default new ParceriaControllers();