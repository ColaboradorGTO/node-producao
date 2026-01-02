import axios from "axios";
import 'dotenv/config';
import { FabricanteClient } from "../client/FabricanteClient.js";
import { FabricanteService } from "../service/fabricanteService.js";
import atualizarFabricanteSchema from "../schema/atualizarFabricanteSchema.js";
import atualizarFabricanteFornecedorSchema from "../schema/atualizarFabricanteFornecedorSchema.js";
import criarFabricanteSchema from "../schema/criarFabricanteSchema.js";
import criarFabricanteFornecedorSchema from "../schema/criarFabricanteFornecedorSchema.js";

const url = process.env.API_URL;
const fabricanteClient = new FabricanteClient(url);
const fabricanteService = new FabricanteService(fabricanteClient);

class FabricanteControllers {
    async getListaFabricantes(req, res) {
        let { idFabricante } = req.query;
        idFabricante = idFabricante ? idFabricante : '';
        try {
            const apiUrl = `${url}/api/compras/fabricante.xsjs?idFab=${idFabricante}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaFornecedorFabricante(req, res) {
        let { idFabricante, descricaoFornecedor, idFornecedor, cnpjFornecedor } = req.query;
        idFabricante = idFabricante ? idFabricante : '';
        descricaoFornecedor = descricaoFornecedor ? descricaoFornecedor : '';
        idFornecedor = idFornecedor ? idFornecedor : '';
        cnpjFornecedor = cnpjFornecedor ? cnpjFornecedor : '';

        try {
            const apiUrl = `${url}/api/compras/fornecedor-fabricante.xsjs?idFab=${idFabricante}&descFornecedor=${descricaoFornecedor}&idFor=${idFornecedor}&CNPJFornecedor=${cnpjFornecedor}`
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaFabricanteCadastro(req, res) {
        let { idFabricante, descricaoFabricante, idFornecedor } = req.query;
        idFabricante = idFabricante ? idFabricante : '';
        descricaoFabricante = descricaoFabricante ? descricaoFabricante : '';
        idFornecedor = idFornecedor ? idFornecedor : '';


        try {
            const apiUrl = `${url}/api/compras/fabricante-fornecedor.xsjs?idFab=${idFabricante}&descFab=${descricaoFabricante}&idFor=${idFornecedor}`
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaVinculoFornecedorFabricante(req, res) {
        let { idFabricanteFornecedor, idFornecedorPedido, idFabricantePedido } = req.query;
        idFabricanteFornecedor = idFabricanteFornecedor ? idFabricanteFornecedor : '';
        idFornecedorPedido = idFornecedorPedido ? idFornecedorPedido : '';
        idFabricantePedido = idFabricantePedido ? idFabricantePedido : '';

        try {
            const apiUrl = `${url}/api/compras/vincfabforn.xsjs?idvincfornfab=${idFabricanteFornecedor}&idfornpedido=${idFornecedorPedido}&idfabnpedido=${idFabricantePedido}`
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("error no ComprasController.getListaVinculoFornecedorFabricante:", error);
            throw error;
        }
    }

    async putFabricante(req, res) {

        try {
            const { error, value } = atualizarFabricanteSchema.validate(req.body, {

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

            const response = await fabricanteService.updateFabricante(
                value.IDFABRICANTE,
                value.DSFABRICANTE,
                value.DTULTATUALIZACAO,
                value.DTCADASTRO,
                value.STATIVO,
            );

            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro no ExtratosControllers.postListaAjusteExtrato:', error);
            return res.status(500).json({ message: 'Erro ExtratosControllers.postListaAjusteExtrato' });

        }
    }

    async putFabricanteFornecedor(req, res) {

        try {
            const { error, value } = atualizarFabricanteFornecedorSchema.validate(req.body, {

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

            const response = await fabricanteService.updateFabricanteFornecedor(
                value.IDFABRICANTEFORN,
                value.IDFABRICANTE,
                value.IDFORNECEDOR,
                value.STATIVO,
            );

            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro no ExtratosControllers.postListaAjusteExtrato:', error);
            return res.status(500).json({ message: 'Erro ExtratosControllers.postListaAjusteExtrato' });

        }
    }

    async postFabricante(req, res) {

        try {
            const { error, value } = criarFabricanteSchema.validate(req.body, {

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

            const response = await fabricanteService.createFabricante(
                value.DSFABRICANTE,
                value.DTCADASTRO,
                value.DTULTATUALIZACAO,
                value.STATIVO,
            );

            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro no ExtratosControllers.postListaAjusteExtrato:', error);
            return res.status(500).json({ message: 'Erro ExtratosControllers.postListaAjusteExtrato' });

        }
    }

    async postFabricanteFornecedor(req, res) {

        try {
            const { error, value } = criarFabricanteFornecedorSchema.validate(req.body, {

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

            const response = await fabricanteService.createFabricanteFornecedor(
                value.IDFABFORN,
                value.IDFABRICANTE,
                value.IDFORNECEDOR,
                value.STATIVO,
            );

            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro no FabricanteControllers.postFabricanteFornecedor:', error);
            return res.status(500).json({ message: 'Erro FabricanteControllers.postFabricanteFornecedor' });

        }
    }

    async postMigrarFabricanteSap(req, res) {
        let {
            codFabricante
        } = req.query;

        try {
            const apiUrl = `${url}/api/service-layer/pedido-compra/por-codigo/fabricante.xsjs?codFabricante=${codFabricante}`
            const response = await axios.post(apiUrl, {
                codFabricante,
            });
            console.log(response.data, 'response.data');
            return res.json(response.data);
        } catch (error) {
            console.error("error no ComprasControllers.postMigrarFabricanteSap:", error);
            throw error;
        }
    }
}

export default new FabricanteControllers();