import axios from "axios";
import { BalancoClient } from '../client/index.js'
import { BalancoServices } from '../services/index.js'
import { dataFormatada } from "../../../utils/dataFormatada.js";
import updateBalancoConsolidadoSchema from '../schema/confirmarConsolidarBalanco.js';
import updateDetalheBalancoAvulsoSchema from '../schema/atualizarDetalheBalancoAvulso.js';
import atualizarConsolidarBalancoSchema from "../schema/atualizarConsolidarBalanco.js";
import atualizarPrepararLojaPrimeiroBalancoSchema from "../schema/atualizarListaPrepararPrimeiroBalancoLoja.js";
import atualizarListaDetalhesBalancoSchema from "../schema/atualizarListaDetalhesBalancoSchema.js.js";
import criarDetalheBalancoAvulsoSchema from "../schema/criarDetalheBalanco.js";
import atualizarColetorBalancoSchema from "../schema/atualizarColetorBalanco.js";
import updateConfirmarPrestacaoContasSchema from "../schema/confirmarPrestacaoContas.js";

const balancoClient = new BalancoClient(process.env.API_URL);
const balancoServices = new BalancoServices(balancoClient);
const url = process.env.API_URL;

class AdmBalancoControllers {
    async getListaBalancoLoja(req, res) {
        let { idEmpresa, dsDescricao, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;

        idEmpresa = idEmpresa ? Number(idEmpresa) : '';
        dsDescricao = dsDescricao ? dsDescricao : '';
        dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataFormatada(dataPesquisaInicio) : ''
        dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataFormatada(dataPesquisaFim) : ''
        page = page ? Number(page) : '';
        pageSize = pageSize ? Number(pageSize) : '';

        try {

            const apiUrl = `${url}/api/administrativo/balanco-loja.xsjs?idEmpresa=${idEmpresa}&DSdesc=${dsDescricao}&dataInicial=${dataPesquisaInicio}&dataFinal=${dataPesquisaFim}&page=${page}&pageSize=${pageSize}`;
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Erro no ADM Balanco Controllers getListaBalancoLoja:", error);
            return res.status(500).json({ error: "Erro ao buscar lista de balanços por loja." });
        }
    }

    async getListaColetorBalanco(req, res) {
        let { idEmpresa, idResumo, descricaoProduto, page, pageSize } = req.query;

        idEmpresa = idEmpresa ? idEmpresa : '';
        idResumo = idResumo ? idResumo : '';
        descricaoProduto = descricaoProduto ? descricaoProduto : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {
            const apiUrl = `${url}/api/administrativo/coletor-balanco.xsjs?idresumo=${idResumo}&idempresa=${idEmpresa}&descProduto=${descricaoProduto}&page=${page}&pageSize=${pageSize}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Erro no ADM Balanco Controllers getListaColetorBalanco:", error);
            throw error;
        }
    }

    async getListaPrepararPrimeiroBalancoLoja(req, res) {
        let { idEmpresa, page, pageSize } = req.query;

        idEmpresa = idEmpresa ? idEmpresa : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';
        try {
            const apiUrl = `${url}/api/administrativo/prepara-primeiro-balanco-loja.xsjs`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Erro no ADM Balanco Controllers getListaPrepararPrimeiroBalancoLoja:", error);
            throw error;
        }

    }
    async getListaDetalheBalancoLoja(req, res) {
        let { idResumo, numeroColetor, page, pageSize } = req.query;

        idResumo = idResumo ? idResumo : '';
        numeroColetor = numeroColetor ? numeroColetor : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';
        try {

            const apiUrl = `${url}/api/administrativo/detalhe-balanco.xsjs?idresumo=${idResumo}&coletor=${numeroColetor}&page=${page}&pageSize=${pageSize}`
            const response = await axios.get(apiUrl)
            return res.json(response.data);
        } catch (error) {
            console.error("Erro no ADM Balanco Controllers getListaDetalheBalancoLoja:", error);
            throw error;
        }

    }

    async getListaConsolidarBalanco(req, res) {
        let { idResumo, page, pageSize } = req.query;

        idResumo = idResumo ? idResumo : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';
        try {

            const apiUrl = `${url}/api/administrativo/consolidar-balanco.xsjs?id=${idResumo}&page=${page}&pageSize=${pageSize}`
            const response = await axios.get(apiUrl)
            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaPrestacaoContasBalanco(req, res) {
        let { idResumoBalanco, page, pageSize } = req.query;

        idResumoBalanco = idResumoBalanco ? idResumoBalanco : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';
        try {
            const apiUrl = `${url}/api/administrativo/prestacao-contas-balanco.xsjs?id=${idResumoBalanco}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Erro no ADMBalancoControllers getListaPrestacaoContasBalanco:", error);
            throw error;
        }
    }

    async getListaDetalheBalancoAvulso(req, res) {
        let { idFilial, coletor, page, pageSize } = req.query;

        idFilial = idFilial ? idFilial : '';
        coletor = coletor ? coletor : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';
        try {
            const apiUrl = `${url}/api/administrativo/detalhe-balanco-avulso.xsjs?idfilial=${idFilial}&coletor=${coletor}`;
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("erro no ADM Balanco Controllers getListaDetalheBalancoAvulso:", error);
            return res.status(500).json({ error: "Erro ao buscar lista de balanços avulso." });
        }
    }

    async putConsolidarBalanco(req, res) {

        try {
            const { error, value } = atualizarConsolidarBalancoSchema.validate(req.body, {

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

            const response = await balancoServices.updateConsolidarBalanco(
                value.IDRESUMOBALANCO,
                value.IDEMPRESA
            );

            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro no ExtratosControllers.putConsolidarBalanco:', error);
            return res.status(500).json({ message: 'Erro ExtratosControllers.putListaAjusteExtrato', error });

        }
    }

    async putListaPrepararPrimeiroBalancoLoja(req, res) {

        try {
            const { error, value } = atualizarPrepararLojaPrimeiroBalancoSchema.validate(req.body, {

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

            const response = await balancoServices.updatePrepararLojaPrimeiroBalanco(
                value.IDEMPRESA
            );

            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro no ExtratosControllers.putListaPrepararPrimeiroBalancoLoja:', error);
            return res.status(500).json({ message: 'Erro ExtratosControllers.putListaPrepararPrimeiroBalancoLoja', error });

        }
    }

    async putListaDetalheBalanco(req, res) {

        try {
            const { error, value } = atualizarListaDetalhesBalancoSchema.validate(req.body, {

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

            const response = await balancoServices.updateListaDetalhesBalanco(
                value.IDDETALHEBALANCO,
                value.TOTALCONTAGEMGERAL
            );

            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro no ExtratosControllers.putListaPrepararPrimeiroBalancoLoja:', error);
            return res.status(500).json({ message: 'Erro ExtratosControllers.putListaPrepararPrimeiroBalancoLoja', error });

        }
    }

    async putListaDetalheBalancoAvulso(req, res) {
        try {

            const { error, value } = updateDetalheBalancoAvulsoSchema.validate(req.body, {
                abortEarly: false,
                stripUnknown: true
            })

            if (error) {
                return res.status(400).json({
                    message: 'Dados inválidos',
                    errors: error.details.map(detail => ({
                        field: detail.path.join('.'),
                        message: detail.message
                    }))
                });
            }


            const response = await balancoServices.updateDetalheBalancoAvulso(
                value.IDEMPRESA,
                value.NUMEROCOLETOR,
                value.DSCOLETOR,
                value.IDPRODUTO,
                value.TOTALCONTAGEMGERAL
            );

            return res.json(response);
        } catch (error) {
            console.error("Erro no ADM Balanco Controllers putListaDetalheBalancoAvulso:", error);
            return res.status(500).json({ error: error.message });
        }
    }

    async postDetalheBalancoAvulso(req, res) {
        try {

            const { error, value } = criarDetalheBalancoAvulsoSchema.validate(req.body, {
                abortEarly: false,
                stripUnknown: true
            })

            if (error) {
                return res.status(400).json({
                    message: 'Dados inválidos',
                    errors: error.details.map(detail => ({
                        field: detail.path.join('.'),
                        message: detail.message
                    }))
                });
            }

            const response = await balancoServices.createDetalheBalancoAvulso(
                value.IDEMPRESA,
                value.DSRESUMOBALANCO,
                value.DTABERTURA,
                value.DTFECHAMENTO,
                value.QTDTOTALITENS,
                value.QTDTOTALSOBRA,
                value.QTDTOTALFALTA,
                value.TXTOBSERVACAO,
                value.STATIVO,
                value.det
            );

            return res.json(response);
        } catch (error) {
            console.error("Erro no ADM Balanco Controllers postDetalheBalancoAvulso:", error);
            return res.status(500).json({ error: error.message });
        }
    }

    async putColetorBalanco(req, res) {
        try {

            const { error, value } = atualizarColetorBalancoSchema.validate(req.body, {
                abortEarly: false,
                stripUnknown: true
            })

            if (error) {
                return res.status(400).json({
                    message: 'Dados inválidos',
                    errors: error.details.map(detail => ({
                        field: detail.path.join('.'),
                        message: detail.message
                    }))
                });
            }


            const response = await balancoServices.updateColetorBalanco(
                value.IDRESUMOBALANCO,
                value.NUMEROCOLETOR
            );

            return res.json(response);
        } catch (error) {
            console.error("Erro no ADM Balanco Controllers postDetalheBalancoAvulso:", error);
            return res.status(500).json({ error: error.message });
        }
    }

    async putConfirmarPrestacaoContas(req, res) {
        try {

            const { error, value } = updateConfirmarPrestacaoContasSchema.validate(req.body, {
                abortEarly: false,
                stripUnknown: true
            })

            if (error) {
                return res.status(400).json({
                    message: 'Dados inválidos',
                    errors: error.details.map(detail => ({
                        field: detail.path.join('.'),
                        message: detail.message
                    }))
                });
            }

            const response = await balancoServices.updateConfirmarPrestacaoContas(
                value.IDRESUMOBALANCO,
            );

            return res.json(response);
        } catch (error) {
            console.error("Erro no ADM Balanco Controllers postDetalheBalancoAvulso:", error);
            return res.status(500).json({ error: error.message });
        }
    }

    async putConfirmarConsolidarBalanco(req, res) {
        try {

            const { error, value } = updateBalancoConsolidadoSchema.validate(req.body, {
                abortEarly: false,
                stripUnknown: true
            })

            if (error) {
                return res.status(400).json({
                    message: 'Dados inválidos',
                    errors: error.details.map(detail => ({
                        field: detail.path.join('.'),
                        message: detail.message
                    }))
                });
            }

            const response = await balancoServices.updateConfirmarBalancoConsolidado(
                value.IDRESUMOBALANCO,
                value.OBSCONTAGEM,
                value.OBSDIVERGENCIACONTAGEM,
                value.OBSDIVERGENCIAGERENTE
            );

            return res.status(200).json(response);
        } catch (error) {
            console.error("Erro no ADM Balanco Controllers putConfirmarConsolidarBalanco:", error);
            return res.status(500).json({ error: error.message });
        }
    }

    async getPesqBalanco(req, res) {
        let { idEmpresa, descricao, dataPesqInicio, dataPesqFim } = req.query;

        idEmpresa = idEmpresa ? idEmpresa : '';
        const numPage = 100;
        dataPesqInicio = dataFormatada(dataPesqInicio) ? dataPesqInicio : '';
        dataPesqFim = dataFormatada(dataPesqFim) ? dataPesqFim : '';
        descricao = descricao ? descricao : '';

        try {
            const apiUrl = `${url}/api/administrativo/balanco-loja.xsjs?idEmpresa=${idEmpresa}&dataInicial=${dataPesqInicio}&dataFinal=${dataPesqFim}&DSdesc=${descricao}`
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaPreviaBalanco(req, res) {
        let { idEmpresa, idResumo, processa, diferenca } = req.query;

        idEmpresa = idEmpresa ? idEmpresa : '';
        idResumo = idResumo ? idResumo : '';
        processa = processa ? processa : '';
        diferenca = diferenca ? diferenca : '';
        const numPage = 100;

        try {
            const apiUrl = `${url}/api/administrativo/novo-previa-balanco.xsjs?id=${idResumo}&idempresa=${idEmpresa}&processa=&${processa}&diferenca=${diferenca}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Erro no AdministrativoController getListaPreviaBalanco:", error);
            throw error;
        }
    }

    async getDetalheBalancoAvulso(req, res) {
        let { idFilial, coletor, descProduto, } = req.query;

        idFilial = idFilial ? idFilial : '';
        coletor = coletor ? coletor : '';

        try {
            const apiUrl = `http://164.152.245.77:8000/quality/concentrador_homologacao/api/administrativo/detalhe-balanco-avulso.xsjs?page=1&idfilial=${idFilial}&coletor=${coletor}`
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }

    }
}

export default new AdmBalancoControllers();