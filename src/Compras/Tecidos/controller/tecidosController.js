import axios from "axios";
import 'dotenv/config';
import { TecidosClient } from "../client/tecidosClient.js";
import { TecidosService } from "../service/tecidosService.js";
import atualizarTipoTecidosSchema from "../schema/atualizarTipoTecidosSchema.js";
import criarTipoTecidosSchema from "../schema/criarTipoTecidosSchema.js";
const url = process.env.API_URL;

const tecidosClient = new TecidosClient(url);
const tecidosService = new TecidosService(tecidosClient);

class TecidosControllers {
    async getListaTipoTecidos(req, res) {
        let { idTecido, descricao } = req.query;
        idTecido = idTecido ? idTecido : '';
        descricao = descricao ? descricao : '';
        try {
            const apiUrl = `${url}/api/compras/tipotecidos.xsjs?idTecido=${idTecido}&descTecido=${descricao}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("erro nos campos do banco:", error);
            throw error;
        }
    }

    async getListaTipoTecidoSelect(req, res) {
        let { idTecido, descricao } = req.query;
        idTecido = idTecido ? idTecido : '';
        descricao = descricao ? descricao : '';
        try {
            const apiUrl = `${url}/api/compras/tipo-tecido.xsjs`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("erro nos campos do banco:", error);
            throw error;
        }
    }

    async putTipoTecidos(req, res) {

        try {
            const { error, value } = atualizarTipoTecidosSchema.validate(req.body, {

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

            const response = await tecidosService.updateTipoTecidos(
                value.IDTPTECIDO,
                value.DSTIPOTECIDO,
                value.STATIVO
            );

            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro no TecidosControllers.putTipoTecidos:', error);
            return res.status(500).json({ message: 'Erro TecidosControllers.putTipoTecidos' });

        }
    }

    async postTipoTecidos(req, res) {

        try {
            const { error, value } = criarTipoTecidosSchema.validate(req.body, {

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

            const response = await tecidosService.createTipoTecidos(
                value.DSTIPOTECIDO,
                value.STATIVO
            );

            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro no TecidosControllers.postTipoTecidos:', error);
            return res.status(500).json({ message: 'Erro TecidosControllers.postTipoTecidos' });

        }
    }
}

export default new TecidosControllers();