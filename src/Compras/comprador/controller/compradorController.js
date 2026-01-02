import axios from "axios";
import 'dotenv/config';
import { CompradorClient } from "../client/compradorClient.js";
import { CompradorService } from "../service/compradorService.js";

const url = process.env.API_URL;
const compradorClient = new CompradorClient(url);
const compradorService = new CompradorService(compradorClient);

class CompradorControllers {
    async getListaCompradores(req, res) {
        let { } = req.query;

        try {
            const apiUrl = `${url}/api/compras/comprador.xsjs`
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }

    }
}

export default new CompradorControllers();