import axios from "axios";
import 'dotenv/config';
import { PedidosClient } from "../client/produtosClient.js";
import { PedidosService } from "../service/pedidosService.js";
import { dataFormatada } from "../../../utils/dataFormatada.js";
import atualizarCategoriaPedidosSchema from "../schema/pedidosShema.js";
import atualizarFinalizarPedidoSchema from "../schema/finalizarPedido.js";
import AtualizarPedidoSchema from "../schema/atualizarPedido.js";
import CategoriasPedidosSchema from "../schema/categoriasPedidos.js";
import cadastroVinculoTamanhoCategoriaSchema from "../schema/cadastroVinculoTamanhoCategoriaSchema.js";
import criarFinalizarPedidoSchema from "../schema/CriarFinalizarPedido.js";
import CriarPedidoSchema from "../schema/criarPedido.js";

const url = process.env.API_URL;
const pedidosClient = new PedidosClient(url);
const pedidosService = new PedidosService(pedidosClient);

class PedidosControllers {

    async getListaTodosPedidos(req, res) {
        let { dataPesquisaInicio, dataPesquisaFim } = req.query;
        dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataPesquisaInicio : '';
        dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataPesquisaFim : '';
        try {
            const apiUrl = `${url}/api/compras/lista_pedidos.xsjs?pageSize=1000&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}`;
            const response = await axios.get(apiUrl)
            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaPedidosDetalhado(req, res) {
        let { dataPesquisaInicio, dataPesquisaFim, idFornecedor, idMarca, idPedido } = req.query;
        dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataPesquisaInicio : '';
        dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataPesquisaFim : '';
        idFornecedor = idFornecedor ? idFornecedor : '';
        idMarca = idMarca ? idMarca : '';
        idPedido = idPedido ? idPedido : '';

        try {
            const apiUrl = `${url}/api/compras/lista_pedidos_detalhado.xsjs?pageSize=500&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&idFornPesquisa=${idFornecedor}&idMarcaPesquisa=${idMarca}&idpedido=${idPedido}`;
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaDetalhePedidos(req, res) {
        let { idPedido } = req.query;
        idPedido = idPedido ? idPedido : '';

        try {
            const apiUrl = `${url}/api/compras/lista_detalhepedidos.xsjs?idpedido=${idPedido}`;
            const response = await axios.get(apiUrl)
            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaPedidos(req, res) {
        let { idPedido, dataPesquisaFim, dataPesquisaInicio, idMarca, idFornecedor, idFabricante, idComprador, stSituacaoSap, page, pageSize } = req.query;
        idPedido = idPedido ? idPedido : '';
        dataPesquisaInicio = dataPesquisaInicio ? dataFormatada(dataPesquisaInicio) : '';
        dataPesquisaFim = dataPesquisaFim ? dataFormatada(dataPesquisaFim) : '';
        idMarca = idMarca ? idMarca : '';
        idFornecedor = idFornecedor ? idFornecedor : '';
        idFabricante = idFabricante ? idFabricante : '';
        idComprador = idComprador ? idComprador : '';
        stSituacaoSap = stSituacaoSap ? stSituacaoSap : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {
            const apiUrl = `${url}/api/compras/lista_pedidos.xsjs?dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&idFornPesquisa=${idFornecedor}&idMarcaPesquisa=${idMarca}&idpedido=${idPedido}&idFabPesquisa=${idFabricante}&idCompradorPesquisa=${idComprador}&stSituacaoSAP=${stSituacaoSap}`;
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaDetalhePedidosGrade(req, res) {
        let { idPedido, idDetalhePedido, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;
        idPedido = idPedido ? idPedido : '';
        idDetalhePedido = idDetalhePedido ? idDetalhePedido : '';
        dataPesquisaInicio = dataPesquisaInicio ? dataFormatada(dataPesquisaInicio) : '';
        dataPesquisaFim = dataPesquisaFim ? dataFormatada(dataPesquisaFim) : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {
            const apiUrl = `${url}/api/compras/lista_detalhepedidosgrade.xsjs?dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&idpedido=${idPedido}`;
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaUltimoPedido(req, res) {
        let { idComprador, idPedido } = req.query;
        idComprador = idComprador ? idComprador : '';
        idPedido = idPedido ? idPedido : '';

        try {
            const apiUrl = `${url}/api/compras/ultimo_pedidos.xsjs?idcomprador=${idComprador}&idPedido=${idPedido}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("error no ComprasControllers.getListaUltimoPedido:", error);
            throw error;
        }
    }

    async getListaProdutoPedido(req, res) {
        let { referenciaProduto, fornecedorPedido } = req.query;
        referenciaProduto = referenciaProduto ? referenciaProduto : '';
        fornecedorPedido = fornecedorPedido ? fornecedorPedido : '';

        try {
            const apiUrl = `${url}/api/compras/produtospedido.xsjs?PesqProd=${referenciaProduto}&idForn=${fornecedorPedido}`
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("error no ComprasControllers.getListaProdutoPedido:", error);
            throw error;
        }
    }

    async getListaCategoriaPedidos(req, res) {
        let { idCategoriaPedido, descricao } = req.query;
        idCategoriaPedido = idCategoriaPedido ? idCategoriaPedido : '';
        descricao = descricao ? descricao : '';
        try {
            const apiUrl = `${url}/api/compras/categoriapedidos.xsjs?idCatPed=${idCategoriaPedido}&descCatPed=${descricao}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("erro nos campos do banco:", error);
            throw error;
        }
    }

    async getListaCategoriaPedido(req, res) {
        let { idCategoriaPedido, descricao } = req.query;
        idCategoriaPedido = idCategoriaPedido ? idCategoriaPedido : '';
        descricao = descricao ? descricao : '';
        try {
            const apiUrl = `${url}/api/compras/categoriapedido.xsjs?idtipopedido=${idCategoriaPedido}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("error no ComprasController.getListaCategoriaPedido:", error);
            throw error;
        }
    }

    async getListaTamanhosPedidos(req, res) {
        let { idTamanhoPedido, descricao } = req.query;
        idTamanhoPedido = idTamanhoPedido ? idTamanhoPedido : '';
        descricao = descricao ? descricao : '';
        try {
            const apiUrl = `${url}/api/compras/tamanhospedidos.xsjs?idTamPed=${idTamanhoPedido}&descTamPed=${descricao}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("erro nos campos do banco:", error);
            throw error;
        }
    }

    async getListaTamanhosCategoriaPedidos(req, res) {
        let { idCategoriaPedido, descricao, idTamanhoPedido } = req.query;
        idCategoriaPedido = idCategoriaPedido ? idCategoriaPedido : '';
        descricao = descricao ? descricao : '';
        idTamanhoPedido = idTamanhoPedido ? idTamanhoPedido : '';
        try {
            const apiUrl = `${url}/api/compras/vinctamcat.xsjs?idCatPeid=${idCategoriaPedido}&descCatPed=${descricao}&idTamPed=${idTamanhoPedido}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("erro nos campos do banco:", error);
            throw error;
        }
    }

    async putCategoriaPedidos(req, res) {

        try {
            const { error, value } = atualizarCategoriaPedidosSchema.validate(req.body, {

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

            const response = await pedidosService.updateCategoriaPedidos(
                value.IDCATEGORIAPEDIDO,
                value.DSCATEGORIAPEDIDO,
                value.TIPOPEDIDO,
                value.STATIVO
            );

            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro no PedidosControllers.putCategoriaPedidos:', error);
            return res.status(500).json({ message: 'Erro PedidosControllers.putCategoriaPedidos' });

        }
    }

    async putFinalizarPedido(req, res) {

        try {
            const { error, value } = atualizarFinalizarPedidoSchema.validate(req.body, {

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

            const response = await pedidosService.updateFinalizarPedido(
                value.IDRESUMOPEDIDO,
                value.IDGRUPOEMPRESARIAL,
                value.IDSUBGRUPOEMPRESARIAL,
                value.IDCOMPRADOR,
                value.IDCONDICAOPAGAMENTO,
                value.IDFORNECEDOR,
                value.IDTRANSPORTADORA,
                value.IDANDAMENTO,
                value.MODPEDIDO,
                value.NOVENDEDOR,
                value.EEMAILVENDEDOR,
                value.DTPEDIDO,
                value.DTPREVENTREGA,
                value.TPFRETE,
                value.DESCPERC01,
                value.DESCPERC02,
                value.DESCPERC03,
                value.PERCCOMISSAO,
                value.VRTOTALLIQUIDO,
                value.OBSPEDIDO,
                value.OBSPEDIDO2,
                value.DTFECHAMENTOPEDIDO,
                value.DTCADASTRO,
                value.TPARQUIVO,
                value.STDISTRIBUIDO,
                value.STAGRUPAPRODUTO,
                value.STCANCELADO,
                value.TPFISCAL,
                value.STRASCUNHO,
            );

            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro no ExtratosControllers.postListaAjusteExtrato:', error);
            return res.status(500).json({ message: 'Erro ExtratosControllers.postListaAjusteExtrato' });

        }
    }


    async putPedido(req, res) {

        try {
            const { error, value } = AtualizarPedidoSchema.validate(req.body, {

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

            const response = await pedidosService.updatePedido(
                value.IDRESUMOPEDIDO,
                value.IDGRUPOEMPRESARIAL,
                value.IDSUBGRUPOEMPRESARIAL,
                value.IDCOMPRADOR,
                value.IDCONDICAOPAGAMENTO,
                value.IDFORNECEDOR,
                value.IDTRANSPORTADORA,
                value.IDANDAMENTO,
                value.MODPEDIDO,
                value.NOVENDEDOR,
                value.EEMAILVENDEDOR,
                value.DTPEDIDO,
                value.DTPREVENTREGA,
                value.TPFRETE,
                value.DESCPERC01,
                value.DESCPERC02,
                value.DESCPERC03,
                value.PERCCOMISSAO,
                value.VRTOTALLIQUIDO,
                value.OBSPEDIDO,
                value.OBSPEDIDO2,
                value.DTFECHAMENTOPEDIDO,
                value.DTCADASTRO,
                value.TPARQUIVO,
                value.STDISTRIBUIDO,
                value.STAGRUPAPRODUTO,
                value.STCANCELADO,
                value.TPFISCAL,
                value.STRASCUNHO,
            );

            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro no PedidosControllers.putPedido:', error);
            return res.status(500).json({ message: 'Erro PedidosControllers.putPedido' });

        }
    }

    async postCategoriaPedidos(req, res) {

        try {
            const { error, value } = CategoriasPedidosSchema.validate(req.body, {

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

            const response = await pedidosService.createCategoriaPedidos(
                value.DSCATEGORIAPEDIDO,
                value.TIPOPEDIDO,
                value.STATIVO
            );

            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro no PedidosControllers.postCategoriaPedidos:', error);
            return res.status(500).json({ message: 'Erro PedidosControllers.postCategoriaPedidos' });
        }
    }

    async postVinculoCategoriaPedido(req, res) {

        try {
            const { error, value } = cadastroVinculoTamanhoCategoriaSchema.validate(req.body, {

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

            const response = await pedidosService.createVinculotamanhoCategoria(
                value.IDCATEGORIAPEDIDO,
                value.IDTAMANHO,
                value.STATIVO
            );

            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro no PedidosControllers.postVinculoCategoriaPedido:', error);
            return res.status(500).json({ message: 'Erro PedidosControllers.postVinculoCategoriaPedido' });

        }
    }

    async postFinalizarPedido(req, res) {

        try {
            const { error, value } = criarFinalizarPedidoSchema.validate(req.body, {

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

            const response = await pedidosService.createAjusteExtrato(
                value.IDRESUMOPEDIDO,
                value.IDGRUPOEMPRESARIAL,
                value.IDSUBGRUPOEMPRESARIAL,
                value.IDCOMPRADOR,
                value.IDCONDICAOPAGAMENTO,
                value.IDFORNECEDOR,
                value.IDTRANSPORTADORA,
                value.IDANDAMENTO,
                value.MODPEDIDO,
                value.NOVENDEDOR,
                value.EEMAILVENDEDOR,
                value.DTPEDIDO,
                value.DTPREVENTREGA,
                value.TPFRETE,
                value.DESCPERC01,
                value.DESCPERC02,
                value.DESCPERC03,
                value.PERCCOMISSAO,
                value.VRTOTALLIQUIDO,
                value.OBSPEDIDO,
                value.OBSPEDIDO2,
                value.DTFECHAMENTOPEDIDO,
                value.DTCADASTRO,
                value.TPARQUIVO,
                value.STDISTRIBUIDO,
                value.STAGRUPAPRODUTO,
                value.STCANCELADO,
                value.TPFISCAL,
                value.STRASCUNHO,
            );

            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro no PedidosControllers.postFinalizarPedido:', error);
            return res.status(500).json({ message: 'Erro PedidosControllers.postFinalizarPedido' });

        }
    }

    async postPedido(req, res) {

        try {
            const { error, value } = CriarPedidoSchema.validate(req.body, {

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

            const response = await pedidosService.createPedido(
                value.IDGRUPOEMPRESARIAL,
                value.IDSUBGRUPOEMPRESARIAL,
                value.IDCOMPRADOR,
                value.IDCONDICAOPAGAMENTO,
                value.IDFORNECEDOR,
                value.IDTRANSPORTADORA,
                value.IDANDAMENTO,
                value.MODPEDIDO,
                value.NOVENDEDOR,
                value.EEMAILVENDEDOR,
                value.DTPEDIDO,
                value.DTPREVENTREGA,
                value.TPFRETE,
                value.DESCPERC01,
                value.DESCPERC02,
                value.DESCPERC03,
                value.PERCCOMISSAO,
                value.VRTOTALLIQUIDO,
                value.OBSPEDIDO,
                value.OBSPEDIDO2,
                value.DTFECHAMENTOPEDIDO,
                value.DTCADASTRO,
                value.TPARQUIVO,
                value.STDISTRIBUIDO,
                value.STAGRUPAPRODUTO,
                value.STCANCELADO,
                value.TPFISCAL,
                value.STRASCUNHO,
            );

            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro no ExtratosControllers.postListaAjusteExtrato:', error);
            return res.status(500).json({ message: 'Erro ExtratosControllers.postListaAjusteExtrato' });
        }
    }
}

export default new PedidosControllers();