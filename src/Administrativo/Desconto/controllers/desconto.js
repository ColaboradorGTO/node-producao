import axios from "axios";
import { dataFormatada } from "../../../utils/dataFormatada.js";
import 'dotenv/config';
import { DescontoService } from "../service/descontoService.js";
import { DescontoClient } from "../client/descontoClient.js";

const url = process.env.API_URL;
const descontoClient = new DescontoClient(url);
const descontoService = new DescontoService(descontoClient);

class AdmDescontoControllers {
    async getListaDescontoMotivoVendas(req, res) {
        let {idEmpresa, idGrupo, dataPesquisaInicio, dataPesquisaFim, dsMotivoDesc, page, pageSize } = req.query;
      
        idEmpresa = idEmpresa ? Number(idEmpresa) : '';
        idGrupo = idGrupo ? Number(idGrupo) : '';
        dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataPesquisaInicio : '';
        dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataPesquisaFim : '';
        dsMotivoDesc = dsMotivoDesc ? dsMotivoDesc : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {
            const apiUrl = `${url}/api/administrativo/desconto-motivo-vendas.xsjs?idMarca=${idGrupo}&idEmpresa=${idEmpresa}&dataInicial=${dataPesquisaInicio}&dataFinal=${dataPesquisaFim}&dsmotdesc=${dsMotivoDesc}`
            const response = await axios.get(apiUrl)
            
            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }
}

export default new AdmDescontoControllers();