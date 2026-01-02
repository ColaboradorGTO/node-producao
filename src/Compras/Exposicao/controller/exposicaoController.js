import axios from "axios";
import 'dotenv/config';
import { ExposicaoClient } from "../client/exposicaoClient.js";
import { ExposicaoService } from "../service/exposicaoService.js";

const url = process.env.API_URL;
const exposicaoClient = new ExposicaoClient(url);
const exposicaoService = new ExposicaoService(exposicaoClient);

class ExposicaoControllers {
  async getListaLocalExposicao(req, res) {
        let { } = req.query;

        try {
            const apiUrl = `${url}/api/compras/localexposicao.xsjs`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("erro nos campos do banco:", error);
            throw error;
        }
    }
}

export default new ExposicaoControllers();