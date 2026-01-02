import axios from "axios";
import 'dotenv/config';
import { ProdutosClient } from "../client/produtosClient.js";
import { ProdutosService } from "../service/produtosService.js";

const url = process.env.API_URL;
const produtosClient = new ProdutosClient(url);
const produtosService = new ProdutosService(produtosClient);

class ProdutosControllers {
    async getListaProdutoPreco(req, res) {
        let { idEmpresa, dsProduto, pageNumber } = req.query;
        if (!isNaN(idEmpresa)) {

            idEmpresa = Number(idEmpresa);
            const numPage = 100;
            const offset = (pageNumber - 1) * numPage;

            try {
                const apiUrl = `${url}/api/informatica/produto-preco.xsjs?page=10&idEmpresa=${idEmpresa}&dsProduto=${dsProduto}`
                const response = await axios.get(apiUrl)
                if (response.status === 200) {
                    return res.json(response.data);
                } else {
                    return res.status(500).json({ message: "Erro ao buscar produtos." });
                }
            } catch (error) {
                console.error("Unable to connect to the database:", error);
                throw error;
            }
        }
    }

    async getListaProdutoPrecoInformatica(req, res) {
        let { idEmpresa, descricaoProduto, pageNumber } = req.query;

        idEmpresa = idEmpresa ? idEmpresa : '';
        descricaoProduto = descricaoProduto ? descricaoProduto : '';

        try {
            const apiUrl = `${url}/api/informatica/produto-preco.xsjs?idEmpresa=${idEmpresa}&dsProduto=${descricaoProduto}`
            const response = await axios.get(apiUrl)
            if (response.status === 200) {
                return res.json(response.data);
            } else {
                return res.status(500).json({ message: "Erro ao buscar produtos." });
            }
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }
}

export default new ProdutosControllers();