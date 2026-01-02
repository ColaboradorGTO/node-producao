import 'dotenv/config';
import { DetalhesService } from '../service/detalhesService.js';
import { DetalhesClient } from '../client/detalhesClient.js';
import axios from 'axios';

//let url = `http://164.152.245.77:8000/quality/concentrador_homologacao`;
//const url = process.env.API_URL;
const url = 'http://164.152.245.77:8000/quality/concentrador_node';
const detalhesClient = new DetalhesClient(url);
const detalhesService = new DetalhesClient(detalhesClient);

class DetalhesControllers {

    async getListaDetalheFechamento(req, res) {
        let { idEmpresa, dataPesquisa, page, pageSize } = req.query;
        idEmpresa = idEmpresa ? idEmpresa : '';
        dataPesquisa = dataPesquisa ? dataPesquisa : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {
            const apiUrl = `${url}/api/financeiro/detalhe-fechamento.xsjs?idEmpresa=${idEmpresa}&dataPesquisa=${dataPesquisa}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }

    }
}

export default new DetalhesControllers();