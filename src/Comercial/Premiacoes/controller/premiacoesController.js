import axios from "axios";
import 'dotenv/config';
import { PremiacoesClient } from "../client/premiacaoesClient.js";
import { PremiacoesService } from "../service/premiacoesService.js";

const url = process.env.API_URL;
const extratoClient = new PremiacoesClient(url);
const extratoService = new PremiacoesService(extratoClient);

class PremiacoesControllers {
    async getListaPremiacoesPeriodo(req, res) {
        let { } = req.query;

        try {
            const apiUrl = `${url}/api/comercial/lista-premiacoes.xsjs?page=1`;
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }

    }
}

export default new PremiacoesControllers();