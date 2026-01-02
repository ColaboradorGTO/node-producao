import axios from "axios";
import 'dotenv/config';
import { TamanhoClient } from "../client/tamanhoClient.js";
import { TamanhoService } from "../service/tamanhoService.js";

const url = process.env.API_URL;
const tamanhoClient = new TamanhoClient(url);
const tamanhoService = new TamanhoService(tamanhoClient);

class TamanhoControllers {
    async updateVinculoTamanhoCategoria(req, res) {
        let {
            IDCATPEDIDOTAMANHO,
        } = req.query;

        try {
            const apiUrl = `${url}/api/compras/del_vinctamcat.xsjs?IDCATPEDIDOTAMANHO=${IDCATPEDIDOTAMANHO}`
            const response = await axios.put(apiUrl);

            return res.json(response.data);
        } catch (error) {
            console.error("erro nos dados enviados:", error);
            throw error;
        }
    }
}

export default new TamanhoControllers();