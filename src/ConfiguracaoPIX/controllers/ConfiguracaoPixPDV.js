import axios from "axios";
import { dataFormatada } from "../../utils/dataFormatada.js";
import 'dotenv/config';
import { ConfiguracaoPIXService } from "../service/configuracaoPIXService.js";
import { ConfiguracaoPIXClient } from "../client/configuracaoPIXClient.js";

const url = process.env.API_URL;
const configuracaoPIXClient = new ConfiguracaoPIXClient(url);
const configuracaoPIXService = new ConfiguracaoPIXService(configuracaoPIXClient);

class ConfiguracaoPixPDVControllers {

    async getListaConfiguracaoPixPDV(req, res) {
        let { idConfiguracao, idEmpresa, idPixPgtoVenda, idPixPgtoFatura, page, pageSize } = req.query;
        idConfiguracao = idConfiguracao ? idConfiguracao : '';
        idEmpresa = idEmpresa ? idEmpresa : '';
        idPixPgtoVenda = idPixPgtoVenda ? idPixPgtoVenda : '';
        idPixPgtoFatura = idPixPgtoFatura ? idPixPgtoFatura : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';
        try {

            const apiUrl = `${url}/api/configuracao_pix_pdv.xsjs?idEmpresa=${idEmpresa}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }
}

export default new ConfiguracaoPixPDVControllers();