import axios from "axios";
import 'dotenv/config';
import { MetasClient } from "../client/metasClient.js";
import { MetasService } from "../service/metasService.js";

const url = process.env.API_URL;
const metasClient = new MetasClient(url);
const metasService = new MetasService(metasClient);

class MetasControllers {
    async getListaMetasGrupo(req, res) {
        let { } = req.query;

        try {
            const apiUrl = `${url}/api/comercial/lista-meta-vendas.xsjs?page=1`;
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }

    }
}

export default new MetasControllers();