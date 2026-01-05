import axios from 'axios';
import 'dotenv/config';
import { dataFormatada } from "../../utils/dataFormatada.js";
import { VendasClient } from '../client/vendasClient.js';
import { VendasService } from '../service/vendasService.js';
const url = process.env.API_URL;

const vendasClient = new VendasClient(url);
const vendasService = new VendasService(vendasClient);

class VendasControllers {

    async getListaVendas(req, res) {
        try {
            const apiUrl = `${url}/api/venda/lista-venda.xsjs`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaVendaId(req, res) {
        let { idVenda } = req.query;
        try {
            const apiUrl = `${url}/api/venda/lista-venda.xsjs?id=${idVenda}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaVendaClienteGerencia(req, res) {
        let { nnf, serie, idEmpresa, idVenda, idSubGrupoEmpresarial, cpfOUidVenda, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;
        nnf = nnf ? nnf : '';
        serie = serie ? serie : '';
        idEmpresa = idEmpresa ? idEmpresa : '';
        idVenda = idVenda ? idVenda : '';
        idSubGrupoEmpresarial = idSubGrupoEmpresarial ? idSubGrupoEmpresarial : '';
        cpfOUidVenda = cpfOUidVenda ? cpfOUidVenda : '';
        dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataPesquisaInicio : '';
        dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataPesquisaFim : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';
        try {

            const apiUrl = `${url}/api/venda/lista-venda-cliente.xsjs?page=${page}&dtInicio=${dataPesquisaInicio}&dtFim=${dataPesquisaFim}&cpfouIdVenda=${cpfOUidVenda}&nnf=${nnf}&serie=${serie}&idSubgrupoEmpresarial=${idSubGrupoEmpresarial}&idEmpresa=${idEmpresa}&pageSize=${pageSize}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaDetalheVendaCliente(req, res) {
        let { idVenda } = req.query;

        try {
            const apiUrl = `${url}/api/venda/lista-venda-cliente.xsjs?id=${idVenda}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaVendasSaldo(req, res) {
        let { dataPesquisaInicio, dataPesquisaFim, idGrupoEmpresarial, idEmpresa, produtoPesquisado, ufPesquisa, idFornecedor, idGrupoGrade, idGrade } = req.query;

        dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataPesquisaInicio : '';
        dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataPesquisaFim : '';
        idGrupoEmpresarial = idGrupoEmpresarial ? idGrupoEmpresarial : '';
        produtoPesquisado = produtoPesquisado ? produtoPesquisado : '';
        idFornecedor = idFornecedor ? idFornecedor : '';
        idGrupoGrade = idGrupoGrade ? idGrupoGrade : '';
        idGrade = idGrade ? idGrade : '';
        try {
            const apiUrl = `${url}/api/venda/movimentacao-saldo.xsjs?page=&dataInicio=${dataPesquisaInicio}&dataFim=${dataPesquisaFim}&idGrupoEmpresarial=${idGrupoEmpresarial}&idEmpresa=${idEmpresa}&descricaoProduto=${produtoPesquisado}&uf=${ufPesquisa}&idFornecedor=${idFornecedor}&idGrupoGrade=${idGrupoGrade}&idGrade=${idGrade}`

            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaRotatividade(req, res) {
        let { dataPesquisaInicio, dataPesquisaFim, idGrupoEmpresarial, idEmpresa, produtoPesquisado, ufPesquisa, idFornecedor, idGrupoGrade, idGrade, idMarca } = req.query;

        dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataPesquisaInicio : '';
        dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataPesquisaFim : '';
        idGrupoEmpresarial = idGrupoEmpresarial ? idGrupoEmpresarial : '';
        produtoPesquisado = produtoPesquisado ? produtoPesquisado : '';
        idFornecedor = idFornecedor ? idFornecedor : '';
        idGrupoGrade = idGrupoGrade ? idGrupoGrade : '';
        idGrade = idGrade ? idGrade : '';
        idMarca = idMarca ? idMarca : '';
        idEmpresa = idEmpresa ? idEmpresa : '';
        ufPesquisa = ufPesquisa ? ufPesquisa : '';
        descricaoProduto = descricaoProduto ? descricaoProduto : '';
        try {

            const apiUrl = `${url}/api/venda/rotatividade.xsjs?page=&dataInicio=${dataPesquisaInicio}&dataFim=${dataPesquisaFim}&idGrupoEmpresarial=${idGrupoEmpresarial}&idEmpresa=${idEmpresa}&descricaoProduto=${produtoPesquisado}&uf=${ufPesquisa}&idFornecedor=${idFornecedor}&idGrupoGrade=${idGrupoGrade}&idGrade=${idGrade}&idMarca=${idMarca}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaVendaXML(req, res) {
        let { idVenda, idMarca, idEmpresa, stCancelado, dataPesquisaInicio, dataPesquisaFim, stContingencia, page, pageSize } = req.query;
        idVenda = idVenda ? idVenda : '';
        idMarca = idMarca ? idMarca : '';
        idEmpresa = idEmpresa ? idEmpresa : '';
        stCancelado = stCancelado ? stCancelado : '';
        dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataPesquisaInicio : '';
        dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataPesquisaFim : '';
        stContingencia = stContingencia ? stContingencia : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';
        try {
            const apiUrl = `${url}/api/venda/venda-xml.xsjs?id=${idVenda}&idGrupoEmpresarial=${idMarca}&idEmpresa=${idEmpresa}&dataInicio=${dataPesquisaInicio}&dataFim=${dataPesquisaFim}&stCancelado=${stCancelado}&page=${page}&stContingencia=${stContingencia}`
            const response = await axios.get(apiUrl)

            return res.json(response.data); 
        } catch (error) {
            console.error("Erro no VendasControllers.getListaVendaXML:", error);
            throw error;
        }
    }
}

export default new VendasControllers();
