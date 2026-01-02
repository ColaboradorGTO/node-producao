import axios from "axios";
import 'dotenv/config';
import { CampanhaClient } from "../client/campanhaClient.js";
import { CampanhaService } from "../service/campanhaService.js";
import atualizarCampanhaClienteSchema from "../schema/atualizarCampanhaClienteSchema.js";
import criarCampanhaClienteSchema from "../schema/criarCampanhaClienteSchema.js";
import criarCampanhaEmpresaSchema from "../schema/criarCampanhaEmpresaSchema.js";
import atualizarCampanhaEmpresaSchema from "../schema/atualizarCampanhaEmpresaSchema.js";


const url = process.env.API_URL;
const campanhaClient = new CampanhaClient(url);
const campanhaService = new CampanhaService(campanhaClient);

class CampanhaControllers {
    async getListaCampanha(req, res) {
        let { idCampanha, page, pageSize } = req.query;
        try {
            idCampanha = idCampanha ? idCampanha : '';
            page = page ? page : '';
            pageSize = pageSize ? pageSize : '';
            const apiUrl = `${url}/api/campanha/todos.xsjs`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaCampanhaCliente(req, res) {
        let { cpf, telefone, idCampanha, page, pageSize } = req.query;
        try {
            cpf = cpf ? cpf : '';
            telefone = telefone ? telefone : '';
            idCampanha = idCampanha ? idCampanha : '';
            page = page ? page : '';
            pageSize = pageSize ? pageSize : '';

            const apiUrl = `${url}/api/campanha/campanha-cliente.xsjs?cpf=${cpf}&telefone=${telefone}&idCampanha=${idCampanha}&page=${page}&pageSize=${pageSize}`

            const response = await axios.get(apiUrl)
            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async putCampanhaCliente(req, res) {

        try {
            const { error, value } = atualizarCampanhaClienteSchema.validate(req.body, {

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

            const response = await campanhaService.updateCampanhaCliente(
                value.IDCAMPANHA,
                value.NUCPFCNPJ,
                value.EENDERECO,
                value.NUENDERECO,
                value.ECOMPLEMENTO,
                value.EBAIRRO,
                value.ECIDADE,
                value.SGUF,
                value.NUCEP,
                value.EEMAIL,
                value.NUTELEFONE,
                value.NOME,
                value.ID
            );

            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro no CampanhaControllers.putCampanhaCliente:', error);
            return res.status(500).json({ message: 'Erro CampanhaControllers.putCampanhaCliente' });

        }
    }

    async postCampanhaCliente(req, res) {

        try {
            const { error, value } = criarCampanhaClienteSchema.validate(req.body, {

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

            const response = await campanhaService.createCampanhaCliente(
                value.IDCAMPANHA,
                value.NUCPFCNPJ,
                value.EENDERECO,
                value.NUENDERECO,
                value.ECOMPLEMENTO,
                value.EBAIRRO,
                value.ECIDADE,
                value.SGUF,
                value.NUCEP,
                value.EEMAIL,
                value.NUTELEFONE,
                value.NOME,
            );

            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro no CampanhaControllers.postCampanhaCliente:', error);
            return res.status(500).json({ message: 'Erro CampanhaControllers.postCampanhaCliente' });
        }
    }

    async postCampanhaEmpresa(req, res) {

        try {
            const { error, value } = criarCampanhaEmpresaSchema.validate(req.body, {

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

            const response = await campanhaService.createCampanhaEmpresa(
                value.DSCAMPANHA,
                value.IDOPERADOR,
                value.DTINICIO,
                value.DTFINAL,
                value.VRPERCDESCONTO,
                value.EMPRESAS
            );

            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro no CampanhaControllers.postCampanhaCliente:', error);
            return res.status(500).json({ message: 'Erro CampanhaControllers.postCampanhaCliente' });
        }
    }

    async putCampanhaEmpresa(req, res) {

        try {
            const { error, value } = atualizarCampanhaEmpresaSchema.validate(req.body, {

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

            const response = await campanhaService.updateCampanhaEmpresa(
                value.DSCAMPANHA,
                value.IDOPERADOR,
                value.DTINICIO,
                value.DTFINAL,
                value.VRPERCDESCONTO,
                value.IDCAMPANHA
            );

            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro no CampanhaControllers.putCampanhaEmpresa:', error);
            return res.status(500).json({ message: 'Erro CampanhaControllers.putCampanhaEmpresa' });
        }
    }
}

export default new CampanhaControllers();

