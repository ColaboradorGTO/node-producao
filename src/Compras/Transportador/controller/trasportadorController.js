import axios from "axios";
import 'dotenv/config';
import { TransportadorClient } from "../client/trasportadorClient.js";
import { TrasportadorService } from "../service/trasportadorService.js";
import atualizarCadastroTransportador from "../schema/atualizarCadastroTransportadorSchema.js";
import criarCadastroTransportador from "../schema/criarCadastroTransportadorSchema.js";

const url = process.env.API_URL;
const trasportadorClient = new TransportadorClient(url);
const trasportadorService = new TrasportadorService(trasportadorClient);

class TrasportadorControllers {

    async getListaTransportador(req, res) {
        let { idFornecedorFabricante } = req.query;
        idFornecedorFabricante = idFornecedorFabricante ? idFornecedorFabricante : '';

        try {
            const apiUrl = `${url}/api/compras/transportadora.xsjs`
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaTransportadora(req, res) {
        let { idTransportador, descricaoTransportador, cnpjTransportador } = req.query;
        idTransportador = idTransportador ? idTransportador : '';
        descricaoTransportador = descricaoTransportador ? descricaoTransportador : '';
        cnpjTransportador = cnpjTransportador ? cnpjTransportador : '';
        try {
            const apiUrl = `${url}/api/compras/transportador.xsjs?idTransportador=${idTransportador}&descTransportador=${descricaoTransportador}&CNPJTransportador=${cnpjTransportador}`
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }

    }

    async getListaByIdTransportador(req, res) {
        let { idTransportador } = req.query;
        idTransportador = idTransportador ? idTransportador : '';

        try {
            const apiUrl = `${url}/api/compras/transportador.xsjs?idTransportador=${idTransportador}`
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async putCadastroTransportador(req, res) {

        try {
            const { error, value } = atualizarCadastroTransportador.validate(req.body, {

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

            const response = await trasportadorService.updateCadastroTrasportador(
                value.IDTRANSPORTADORA,
                value.IDGRUPOEMPRESARIAL,
                value.IDSUBGRUPOEMPRESARIAL,
                value.NORAZAOSOCIAL,
                value.NOFANTASIA,
                value.NUCNPJ,
                value.NUINSCESTADUAL,
                value.NUINSCMUNICIPAL,
                value.NUIBGE,
                value.EENDERECO,
                value.ENUMERO,
                value.ECOMPLEMENTO,
                value.EBAIRRO,
                value.ECIDADE,
                value.SGUF,
                value.NUCEP,
                value.EEMAIL,
                value.NUTELEFONE1,
                value.NUTELEFONE2,
                value.NUTELEFONE3,
                value.NOREPRESENTANTE,
                value.DTCADASTRO,
                value.DTULTATUALIZACAO,
                value.STATIVO
            );

            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro no TrasportadorControllers.putCadastroTransportador:', error);
            return res.status(500).json({ message: 'Erro TrasportadorControllers.putCadastroTransportador' });

        }
    }

    async postCadastroTransportador(req, res) {

        try {
            const { error, value } = criarCadastroTransportador.validate(req.body, {

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

            const response = await trasportadorService.createCadastroTrasportador(
                value.IDGRUPOEMPRESARIAL,
                value.IDSUBGRUPOEMPRESARIAL,
                value.NORAZAOSOCIAL,
                value.NOFANTASIA,
                value.NUCNPJ,
                value.NUINSCESTADUAL,
                value.NUINSCMUNICIPAL,
                value.NUIBGE,
                value.EENDERECO,
                value.ENUMERO,
                value.ECOMPLEMENTO,
                value.EBAIRRO,
                value.ECIDADE,
                value.SGUF,
                value.NUCEP,
                value.EEMAIL,
                value.NUTELEFONE1,
                value.NUTELEFONE2,
                value.NUTELEFONE3,
                value.NOREPRESENTANTE,
                value.DTCADASTRO,
                value.DTULTATUALIZACAO,
                value.STATIVO
            );

            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro no TrasportadorControllers.postCadastroTransportador:', error);
            return res.status(500).json({ message: 'Erro TrasportadorControllers.postCadastroTransportador' });

        }
    }
}

export default new TrasportadorControllers();