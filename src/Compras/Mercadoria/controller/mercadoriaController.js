import axios from "axios";
import 'dotenv/config';
import { MercadoriaClient } from "../client/mercadoriaClient.js";
import { MercadoriaService } from "../service/mercadoriaService.js";

const url = process.env.API_URL;
const mercadoriaClient = new MercadoriaClient(url);
const mercadoriaService = new MercadoriaService(mercadoriaClient);

class MercadoriaControllers {
    async getListaEstruturaMercadoria(req, res) {
        let { idSubGrupoEstrutura, descricao } = req.query;
        idSubGrupoEstrutura = idSubGrupoEstrutura ? idSubGrupoEstrutura : '';
        descricao = descricao ? descricao : '';
        try {
            const apiUrl = `${url}/api/compras/subgrupoestrutura.xsjs?idSubGrupoExt=${idSubGrupoEstrutura}&descSubGrupoExt=${descricao}`
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }
}

export default new MercadoriaControllers();