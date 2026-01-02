import axios from "axios";
import 'dotenv/config';
import { dataFormatada } from "../../../utils/dataFormatada.js";
import { FuncionariosClient } from "../client/funcionarioClient.js";
import { FuncionariosService } from "../service/funcionarioService.js";

const url = process.env.API_URL;
const funcionariosClient = new FuncionariosClient(url);
const funcionariosService = new FuncionariosService(funcionariosClient);

class FuncionariosControllers {
    async getListaColaboradorRelatorio(req, res) {
        let { idEmpresa } = req.query;
        idEmpresa = idEmpresa ? idEmpresa : '';
        try {
            const apiUrl = `${url}/api/comercial/funcionariorel.xsjs?idEmpresa=${idEmpresa}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database tabela :", error);
            throw error;
        }
    }

    async getListaColaboradorProdutosVendidos(req, res) {
        let {
            dataPesquisaInicio,
            dataPesquisaFim,
            idMarca,
            idEmpresa,
            descricaoProduto,
            ufPesquisa,
            idFornecedor,
            idGrupo,
            idGrade,
            idMarcaProduto,
            idFuncionario
        } = req.query;

        idMarca = idMarca ? idMarca : '';
        idEmpresa = idEmpresa ? idEmpresa : '';
        descricaoProduto = descricaoProduto ? descricaoProduto : '';
        ufPesquisa = ufPesquisa ? ufPesquisa : '';
        idFornecedor = idFornecedor ? idFornecedor : '';
        idGrupo = idGrupo ? idGrupo : '';
        idGrade = idGrade ? idGrade : '';
        idMarcaProduto = idMarcaProduto ? idMarcaProduto : '';
        dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataFormatada(dataPesquisaInicio) : '';
        dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataFormatada(dataPesquisaFim) : '';
        idFuncionario = idFuncionario ? idFuncionario : '';
        try {

            const apiUrl = `${url}/api/comercial/colaborador-produtos-vendidos.xsjs?page=&dataInicio=${dataPesquisaInicio}&dataFim=${dataPesquisaFim}&idGrupoEmpresarial=${idMarca}&idEmpresa=${idEmpresa}&descricaoProduto=${descricaoProduto}&uf=${ufPesquisa}&idFornecedor=${idFornecedor}&idGrupoGrade=${idGrupo}&idGrade=${idGrade}&idMarcaProduto=${idMarcaProduto}&idFunc=${idFuncionario}`;
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }
}

export default new FuncionariosControllers();