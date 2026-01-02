import axios from "axios";
import 'dotenv/config';
import { EstiloClient } from "../client/estiloClient.js";
import { EstiloService } from "../service/estiloService.js";
import criarEstiloSchema from "../schema/criarEstiloSchema.js";
import atualizarEstiloSchema from "../schema/atualizarEstiloSchema.js";

const url = process.env.API_URL;
const estiloClient = new EstiloClient(url);
const estiloService = new EstiloService(estiloClient);

class EstiloControllers {
    async getListaEstilos(req, res) {
        let { idEstilo, idGrupoEstilo, descEstilo, page, pageSize } = req.query;
        idEstilo = idEstilo ? idEstilo : '';
        idGrupoEstilo = idGrupoEstilo ? idGrupoEstilo : '';
        descEstilo = descEstilo ? descEstilo : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {
            const apiUrl = `${url}/api/compras/estilos.xsjs?idEstilo=${idEstilo}&descEstilo=${descEstilo}&idGrupoEstilo=${idGrupoEstilo}&page=${page}&pageSize=${pageSize}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("erro nos campos do banco:", error);
            throw error;
        }
    }

    async putEstilos(req, res) {

        try {
            const { error, value } = atualizarEstiloSchema.validate(req.body, {

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

            const response = await estiloService.updateEstilo(
                value.IDVINCESTILOSESTRUTURA,
                value.IDGRUPOESTRUTURAANTIGA,
                value.IDESTILO,
                value.DSESTILO,
                value.IDGRUPOESTRUTURA,
                value.STATIVO,
            );

            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro no EstiloControllers.putEstilos:', error);
            return res.status(500).json({ message: 'Erro EstiloControllers.putEstilos' });
        }
    }

    async postEstilos(req, res) {

        try {
            const { error, value } = criarEstiloSchema.validate(req.body, {

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

            const response = await estiloService.createEstilo(
                value.IDVINCESTILOSESTRUTURA,
                value.IDESTILO,
                value.DSESTILO,
                value.IDGRUPOESTRUTURA,
                value.STATIVO,
            );

            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro no EstiloControllers.postEstilos:', error);
            return res.status(500).json({ message: 'Erro EstiloControllers.postEstilos' });
        }
    }
}

export default new EstiloControllers();