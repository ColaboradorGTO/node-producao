import axios from "axios";
import 'dotenv/config';
import { GerenciaService } from "../service/gerenciaService.js";
import { GerenciaClient } from "../client/gerenciaClient.js";

const url = process.env.API_URL;


const gerenciaClient = new GerenciaClient(url);
const gerenciaService = new GerenciaService(gerenciaClient);

class AlteracaoPrecoControllers {

    async getListaAlteracaoPreco(req, res) {
        let { idMarca, idEmpresa, grupo, subGrupo, descProduto, codBarras, estoque, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;

        idMarca = idMarca ? idMarca : '';
        idEmpresa = idEmpresa ? idEmpresa : '';
        grupo = grupo ? grupo : '';
        subGrupo = subGrupo ? subGrupo : '';
        descProduto = descProduto ? descProduto : '';
        codBarras = codBarras ? codBarras : '';
        estoque = estoque ? estoque : '';
        dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
        dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {
            const apiUrl = `${url}/api/administrativo/alteracao-preco.xsjs?idEmpresa=${idEmpresa}&grupo=${grupo}&subgrupo=${subGrupo}&descProduto=${descProduto}&codBarras=${codBarras}&estoque=${estoque}&dataInicio=${dataPesquisaInicio}&dataFim=${dataPesquisaFim}&page=${page}&pageSize=${pageSize}`;
            const response = await axios.get(apiUrl);

            return res.json(response.data);
        } catch (error) {
            console.error("Erro no GeRAlteracaoPrecoControllers:", error);
            res.status(500).json({ error: "Erro ao buscar dados de alteração de preço" });
            throw error;
        }
    }
}



export default new AlteracaoPrecoControllers();