import axios from "axios";
import { dataFormatada } from "../../../utils/dataFormatada.js";
import 'dotenv/config';
import EstoqueClient from "../client/estoqueClient.js";
import { EstoqueService } from "../service/estoqueService.js";

const url = process.env.API_URL;
const estoqueClient = new EstoqueClient(url);
const estoqueService = new EstoqueService(estoqueClient);

class EstoqueControllers {
    async getListaEstoqueAtual(req, res) {
        let { idEmpresa, idGrupo, idSubGrupo, idMarca, idFornecedor, descricaoProduto, stAtivo, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;

        idEmpresa = idEmpresa ? Number(idEmpresa) : '';
        idGrupo = idGrupo ? idGrupo : '';
        idSubGrupo = idSubGrupo ? idSubGrupo : '';
        idMarca = idMarca ? idMarca : '';
        idFornecedor = idFornecedor ? idFornecedor : '';
        descricaoProduto = descricaoProduto ? descricaoProduto : '';
        stAtivo = stAtivo ? stAtivo : '';
        dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataFormatada(dataPesquisaInicio) : ''
        dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataFormatada(dataPesquisaFim) : ''
        page = page ? Number(page) : '';
        pageSize = pageSize ? Number(pageSize) : '';

        try {
            const apiUrl = `${url}/api/administrativo/inventariomovimento.xsjs?idEmpresa=${idEmpresa}&idgrupo=${idGrupo}&idsubgrupo=${idSubGrupo}&idmarca=${idMarca}&idfornecedor=${idFornecedor}&descproduto=${descricaoProduto}&dtinicial=${dataPesquisaInicio}&dtfinal=${dataPesquisaFim}&stativo=${stAtivo}&page=${page}&pageSize=${pageSize}`;
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Erro no EstoqueControllers.getListaEstoqueAtual:", error);
            throw error;
        }
    }

    async getListaEstoqueUltimaPosicao(req, res) {
        let { idEmpresa, idGrupo, idSubGrupo, idMarca, idFornecedor, descricaoProduto, STAtivo, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;
        idEmpresa = idEmpresa ? Number(idEmpresa) : '';
        idGrupo = idGrupo ? idGrupo : '';
        idSubGrupo = idSubGrupo ? idSubGrupo : '';
        idMarca = idMarca ? idMarca : '';
        idFornecedor = idFornecedor ? idFornecedor : '';
        descricaoProduto = descricaoProduto ? descricaoProduto : '';
        STAtivo = STAtivo ? STAtivo : '';
        dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataFormatada(dataPesquisaInicio) : ''
        dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataFormatada(dataPesquisaFim) : ''
        page = page ? Number(page) : '';
        pageSize = pageSize ? Number(pageSize) : '';

        try {

            const apiUrl = `${url}/api/administrativo/ultima-posicao-estoque.xsjs?&idEmpresa=${idEmpresa}&idgrupo=${idGrupo}&idsubgrupo${idSubGrupo}&idmarca=${idMarca}&idfornecedor=${idFornecedor}&descproduto=${descricaoProduto}&dtinicial=${dataPesquisaInicio}&stativo=True`;
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getEstoqueAtual(req, res) {
        let { idEmpresa, idGrupo, idSubGrupo, idMarca, idFornecedor, descProduto, pageNumber, dataInicial, dataFinal, } = req.query;

        idEmpresa = idEmpresa ? Number(idEmpresa) : '';
        idGrupo = idGrupo ? idGrupo : '';
        idSubGrupo = idSubGrupo ? idSubGrupo : '';
        idMarca = idMarca ? idMarca : '';
        idFornecedor = idFornecedor ? idFornecedor : '';
        descProduto = descProduto ? descProduto : '';
        dataInicial = dataFormatada(dataInicial) ? dataFormatada(dataInicial) : ''
        dataFinal = dataFormatada(dataFinal) ? dataFormatada(dataFinal) : ''

        const pageSize = 100;
        const offset = (pageNumber - 1) * pageSize;
        try {

            const apiUrl = `${url}/api/administrativo/inventariomovimento.xsjs?idEmpresa=${idEmpresa}&idgrupo=${idGrupo}&idsubgrupo=${idSubGrupo}&idmarca=${idMarca}&idfornecedor=${idFornecedor}&descproduto=${descProduto}&dtinicial=${dataInicial}&dtfinal=${dataFinal}&stativo=True`;
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }
}

export default new EstoqueControllers();