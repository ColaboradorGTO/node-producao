import axios from "axios";
import 'dotenv/config';
import { TipoDocumentoClient } from "../client/documentoClient.js";
import { TipoDocumentoService } from "../service/documentoService.js";

const url = process.env.API_URL;
const tipoDocumentoClient = new TipoDocumentoClient(url);
const tipoDocumentoService = new TipoDocumentoService(tipoDocumentoClient);

class TipoDocumentoControllers {
 async getListaTPDocumento(req, res) {
        let { } = req.query;

        try {
            const apiUrl = `${url}/api/compras/tipodocumento.xsjs`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("erro nos campos do banco:", error);
            throw error;
        }
    }
}

export default new TipoDocumentoControllers();