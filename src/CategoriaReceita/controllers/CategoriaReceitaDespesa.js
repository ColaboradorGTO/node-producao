import axios from "axios";
import 'dotenv/config';
import { CategoriaReceitaClient } from "../client/categoriaReceitaClient.js";
import { CategoriaReceiraServices } from "../service/categoriaReceitaService.js";

const url = process.env.API_URL;
const categoriaReceitaClient = new CategoriaReceitaClient(process.env.API_URL);
const categoriaReceiraServices = new CategoriaReceiraServices(categoriaReceitaClient);

class CategoriaReceitaDespesasControllers  {

    async getListaCategoriaDespesas(req,res) {
        
        let {idCategoria, tipoCategoria, pageSize, page } = req.query;
        try {
            idCategoria = idCategoria ? idCategoria : '';
            tipoCategoria = tipoCategoria ? tipoCategoria : '';
            pageSize = pageSize ? pageSize : '';
            page = page ? page : '';
            const apiUrl = `${url}/api/categoria-receita-despesa.xsjs`;
            const response = await axios.get(apiUrl)

            return res.json(response.data); 
        } catch(error) {
            console.error("Erro no CategoriaReceitaDespesasControllers.getListaCategoriaDespesas:", error);
            throw error;
        }
    }

    async getListaCategoriaDespesasFinanceira(req,res) {
        let { } = req.query;

        try {

            const apiUrl = `${url}/api/categoria-receita-despesa.xsjs?tipo=D`;
            const response = await axios.get(apiUrl)
            return res.json(response.data);
        } catch(error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
        
    }
}

export default new CategoriaReceitaDespesasControllers();