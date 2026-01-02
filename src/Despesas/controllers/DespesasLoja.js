import axios from "axios";
import { dataFormatada } from "../../utils/dataFormatada.js";
import createCadastrarDespesasLojaSchema from "../schema/despesasSchema.js";
import 'dotenv/config';
import { DespesaService } from "../service/despesasService.js";
import { DespesaClient } from "../client/despesasClient.js";
import updateCadastrarDespesasLojaSchema from "../schema/atualizarDespesasSchema.js";

const url = process.env.API_URL;
const despesaClient = new DespesaClient(url);
const despesaService = new DespesaService(despesaClient);

class DespesasLojaControllers {

    async getListaDespesasLojaEmpresa(req, res) {
        let { idEmpresa, dataPesquisaInicio, dataPesquisaFim, pageSize, page } = req.query;
        idEmpresa = idEmpresa ? idEmpresa : '';
        dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
        dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
        pageSize = pageSize ? pageSize : '';
        page = page ? page : '';

        if (!idEmpresa) {
            return res.status(400).json({ "error": "idEmpresa não informado" })
        }
        try {
            const apiUrl = `${url}/api/despesa-loja/empresa.xsjs?idEmpresa=${idEmpresa}&dataPesquisaInic=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}`;
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Erro no DespesasLojaControllers.getListaDespesasLojaEmpresa:", error);
            throw error;
        }
    }

    async getListaDespesasEmpresaGerencia(req, res) {
        let { idEmpresa, dataPesquisa, } = req.query;
        idEmpresa = idEmpresa ? idEmpresa : '';
        dataPesquisa = dataPesquisa ? dataPesquisa : '';

        if (!idEmpresa) {
            return res.status(400).json({ "error": "idEmpresa não informado" })
        }
        try {
            const apiUrl = `${url}/api/despesa-loja/empresa.xsjs?idEmpresa=${idEmpresa}&dataPesquisa=${dataPesquisa}`;
            const response = await axios.get(apiUrl)
            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaTodasDespesasLojas(req, res) {
        let { idDespesas, pageSize, page } = req.query;

        try {
            idDespesas = idDespesas ? idDespesas : '';
            pageSize = pageSize ? pageSize : '';
            page = page ? page : '';

            const apiUrl = `${url}/api/despesa-loja/todos.xsjs?id=${idDespesas}`;
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Erro no DespesasLojaControllers.getListaTodasDespesasLojas:", error);
            throw error;
        }
    }

    async getListaDespesasLojaDashBoard(req, res) {
        let { idDespesaLoja, idEmpresa, dataPesquisa, page, pageSize } = req.query;

        idDespesaLoja = Number(idDespesaLoja) ? Number(idDespesaLoja) : '';
        idEmpresa = Number(idEmpresa) ? Number(idEmpresa) : '';
        dataPesquisa = dataFormatada(dataPesquisa) ? dataFormatada(dataPesquisa) : '';
        page = Number(page) ? Number(page) : '';
        pageSize = Number(pageSize) ? Number(pageSize) : '';

        if (!idEmpresa) {
            return res.status(400).json({ "error": "idEmpresa não informado" })
        }
        try {
            const apiUrl = `${url}/api/dashboard/despesa-loja.xsjs?idDespesaLoja=${idDespesaLoja}&idEmpresa=${idEmpresa}&dataPesquisa=${dataPesquisa}&page=${page}&pageSize=${pageSize}`;
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async postCadastrarDespesasLoja(req, res) {

        try {
            const { error, value } = createCadastrarDespesasLojaSchema.validate(req.body, {

                abortEarly: false,
                stripUnknown: true
            });

            if (error) {
                return res.status(400).json({
                    message: 'Dados inválidos',
                    errors: error.details.map(detail => ({
                        field: detail.path.join('.'),
                        message: detail.message
                    }))
                });
            }

            const response = await despesaService.createCadastrarDespesasLoja(
                value.DTDESPESA,
                value.IDEMPRESA,
                value.IDUSR,
                value.IDCATEGORIARECEITADESPESA,
                value.IDFUNCIONARIO,
                value.DTDESCONTOFUNCIONARIO,
                value.VRDESPESA,
                value.DSPAGOA,
                value.DSHISTORIO,
                value.TPNOTA,
                value.NUNOTAFISCAL,
                value.DSPATHDOCFISCAL,
                value.STATIVO,
                value.STCANCELADO,
                value.IDUSRCACELAMENTO,
                value.DSMOTIVOCANCELAMENTO
            );

            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro no DespesasLojaControllers.postCadastrarDespesasLoja:', error);
            return res.status(500).json({ message: 'Erro DespesasLojaControllers.postCadastrarDespesasLoja' });
        }
    }

    async putDespesasLoja(req, res) {

        try {
            const { error, value } = updateCadastrarDespesasLojaSchema.validate(req.body, {

                abortEarly: false,
                stripUnknown: true
            });

            if (error) {
                return res.status(400).json({
                    message: 'Dados inválidos',
                    errors: error.details.map(detail => ({
                        field: detail.path.join('.'),
                        message: detail.message
                    }))
                });
            }

            const response = await despesaService.updateCadastrarDespesasLoja(
                value.DTDESPESA,
                value.IDEMPRESA,
                value.IDUSR,
                value.IDCATEGORIARECEITADESPESA,
                value.IDFUNCIONARIO,
                value.DTDESCONTOFUNCIONARIO,
                value.VRDESPESA,
                value.DSPAGOA,
                value.DSHISTORIO,
                value.TPNOTA,
                value.NUNOTAFISCAL,
                value.DSPATHDOCFISCAL,
                value.STATIVO,
                value.STCANCELADO,
                value.IDUSRCACELAMENTO,
                value.DSMOTIVOCANCELAMENTO,
                value.IDDESPESASLOJA
            );

            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro no DespesasLojaControllers.putDespesasLoja:', error);
            return res.status(500).json({ message: 'Erro DespesasLojaControllers.putDespesasLoja' });
        }
    }
}

export default new DespesasLojaControllers();