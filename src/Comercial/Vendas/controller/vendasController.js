import axios from "axios";
import 'dotenv/config';
import { dataFormatada } from "../../../utils/dataFormatada";
import { VendasClient } from "../client/vendasClient";
import { VendasService } from "../service/vendasService";

const url = process.env.API_URL;
const vendasClient = new VendasClient(url);
const vendasService = new VendasService(vendasClient);

class VendasControllers {

    async getListaVendasMarcaPorPeriodoComercial(req, res) {
        let { idMarcaPesqVenda, page, pageSize, dataPesqInicio, dataPesqFim } = req.query;

        idMarcaPesqVenda = idMarcaPesqVenda ? idMarcaPesqVenda : '';
        dataPesqInicio = dataFormatada(dataPesqInicio) ? dataFormatada(dataPesqInicio) : ''
        dataPesqFim = dataFormatada(dataPesqFim) ? dataFormatada(dataPesqFim) : ''
        pageSize = pageSize ? pageSize : '';
        pageSize = pageSize ? pageSize : '';

        try {
            const apiUrl = `${url}/api/comercial/venda-marca-periodo.xsjs?pageSize=${pageSize}&idMarca=${idMarcaPesqVenda}&dataInicio=${dataPesqInicio}&dataFim=${dataPesqFim}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaVendasEstoqueGrupoSubGrupoComercial(req, res) {
        let { idMarca, pageNumber, dataInicio, dataFim, idGrupo, idGrade } = req.query;

        if (!isNaN(idMarca)) {
            idMarca = idMarca ? idMarca : '';
            const pageSize = 100;
            const offset = (pageNumber - 1) * pageSize;
            dataInicio = dataFormatada(dataInicio) ? dataInicio : ''
            dataFim = dataFormatada(dataFim) ? dataFim : ''

            try {
                const apiUrl = `${url}/api/comercial/vendas-estoque-grupo-subgrupo.xsjs?pageSize=${pageSize}&dataPesquisaInicio=${dataInicio}&dataPesquisaFim=${dataFim}&idMarca=${idMarca}&idGrupoGrade=${idGrupo}&idGrade=${idGrade}`
                const response = await axios.get(apiUrl)

                return res.json(response.data);
            } catch (error) {
                console.error("Unable to connect to the database:", error);
                throw error;
            }
        }
    }

    async getListaVendasPosicionamentoEstoquePeriodos(req, res) {
        let {
            dataPesquisaInicio,
            dataPesquisaInicioB,
            dataPesquisaInicioC,
            dataPesquisaFim,
            dataPesquisaFimB,
            dataPesquisaFimC,
            idMarcaProduto,
            descricaoProduto,
            ufPesquisa,
            idFornecedor,
            idGrupo,
            idGrade,

        } = req.query;

        descricaoProduto = descricaoProduto ? descricaoProduto : '';
        ufPesquisa = ufPesquisa ? ufPesquisa : '';
        idFornecedor = idFornecedor ? idFornecedor : '';
        idGrupo = idGrupo ? idGrupo : '';
        idGrade = idGrade ? idGrade : '';
        idMarcaProduto = idMarcaProduto ? idMarcaProduto : '';
        dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataFormatada(dataPesquisaInicio) : '';
        dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataFormatada(dataPesquisaFim) : '';
        dataPesquisaInicioB = dataFormatada(dataPesquisaInicioB) ? dataFormatada(dataPesquisaInicioB) : '';
        dataPesquisaFimB = dataFormatada(dataPesquisaFimB) ? dataFormatada(dataPesquisaFimB) : '';
        dataPesquisaInicioC = dataFormatada(dataPesquisaInicioC) ? dataFormatada(dataPesquisaInicioC) : '';
        dataPesquisaFimC = dataFormatada(dataPesquisaFimC) ? dataFormatada(dataPesquisaFimC) : '';

        try {
            const apiUrl = `${url}/api/comercial/vendas-estoque-produto.xsjs?page=&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&dataPesquisaInicioB=${dataPesquisaInicioB}&dataPesquisaFimB${dataPesquisaFimB}&dataPesquisaInicioC=${dataPesquisaInicioC}&dataPesquisaFimC=${dataPesquisaFimC}&descricaoProduto=${descricaoProduto}&idFornecedor=${idFornecedor}&idGrupoGrade=${idGrupo}&idGrade=${idGrade}&idMarcaProduto=${idMarcaProduto}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaVendasCustoLojas(req, res) {
        let { idEmpresaLogin, dataPesquisaInicio, dataPesquisaFim, idGrupoEmpresarial, idEmpresa, descricaoProduto, ufPesquisa, idFornecedor, idGrupo, idGrade, idMarcaProduto } = req.query;

        idEmpresaLogin = idEmpresaLogin ? idEmpresaLogin : '';
        idGrupoEmpresarial = idGrupoEmpresarial ? idGrupoEmpresarial : '';
        idEmpresa = idEmpresa ? idEmpresa : '';
        descricaoProduto = descricaoProduto ? descricaoProduto : '';
        ufPesquisa = ufPesquisa ? ufPesquisa : '';
        idFornecedor = idFornecedor ? idFornecedor : '';
        idGrupo = idGrupo ? idGrupo : '';
        idGrade = idGrade ? idGrade : '';
        idMarcaProduto = idMarcaProduto ? idMarcaProduto : '';
        dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataFormatada(dataPesquisaInicio) : '';
        dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataFormatada(dataPesquisaFim) : '';
        try {

            const apiUrl = `${url}/api/comercial/custo-por-loja.xsjs?page=&dataInicio=${dataPesquisaInicio}&dataFim=${dataPesquisaFim}&idGrupoEmpresarial=${idGrupoEmpresarial}&idEmpresa=${idEmpresa}&descricaoProduto=${descricaoProduto}&uf=${ufPesquisa}&idFornecedor=${idFornecedor}&idGrupoGrade=${idGrupo}&idGrade=${idGrade}&idMarcaProduto=${idMarcaProduto}`;
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaVendasPosicionamentoEstoque(req, res) {
        let { dataPesquisaInicio, dataPesquisaFim, idMarca, idEmpresa, descricaoProduto, ufPesquisa, idFornecedor, idGrupo, idGrade, idMarcaProduto } = req.query;

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
        try {
            const apiUrl = `${url}/api/comercial/vendas-posicionamento-estoque.xsjs?page=&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&idMarca=${idMarca}&idEmpresa=${idEmpresa}&descricaoProduto=${descricaoProduto}&uf=${ufPesquisa}&idFornecedor=${idFornecedor}&idGrupoGrade=${idGrupo}&idGrade=${idGrade}&idMarcaProduto=${idMarcaProduto}`;
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }
}

export default new VendasControllers();