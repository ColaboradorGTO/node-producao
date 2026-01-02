import axios from "axios";
import 'dotenv/config';
import { EstoqueService } from "../../../Administrativo/Estoque/service/estoqueService.js";
import { EmpresaClient } from "../client/empresaClient.js";

const url = process.env.API_URL;
const empresaClient = new EmpresaClient(url);
const estoqueService = new EstoqueService(empresaClient);

class EmpresaControllers {
   async getListaEmpresaComercial(req, res) {
        let { idMarca, idEmpresa, ufProd, page, pageSize } = req.query;

        try {
            const apiUrl = `${url}/api/comercial/empresa.xsjs?idmarca=${idMarca}`;
            const response = await axios.get(apiUrl)
            
            return res.json(response.data); 
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }
}

export default new EmpresaControllers();