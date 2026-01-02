import axios from "axios";
import 'dotenv/config';
import { MarcasClient } from "../client/marcasClient.js";
import { MarcasService } from "../service/marcasService.js";

const url = process.env.API_URL;
const marcasClient = new MarcasClient(process.env.API_URL);
const marcasService = new MarcasService(marcasClient);

class MarcasControllers {
    async getListaMarcas(req, res) {
         let {  } = req.query;
        try {
            const apiUrl = `${url}/api/grupo-empresarial.xsjs`
            const response = await axios.get(apiUrl)
            
            return res.json(response.data); 
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }
}

export default new MarcasControllers();