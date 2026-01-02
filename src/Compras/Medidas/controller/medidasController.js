import axios from "axios";
import 'dotenv/config';
import { MedidasClient } from "../client/medidasClient.js";
import { MedidasService } from "../service/medidasService.js";
import atualizarUnidadesMedidasSchema from "../schema/atualizarUnidadesMedidasSchema.js";
import criarUnidadesMedidasSchema from "../schema/criarUnidadesMedidasSchema.js";

const url = process.env.API_URL;
const medidasClient = new MedidasClient(url);
const medidasService = new MedidasService(medidasClient);

class MedidasControllers {
    async getListaUnidadesMedidas(req, res) {
        let { idUnidadeMedida, descricao } = req.query;
        idUnidadeMedida = idUnidadeMedida ? idUnidadeMedida : '';
        descricao = descricao ? descricao : '';
        try {
            const apiUrl = `${url}/api/compras/unidadesdemedidas.xsjs?idUnidMed=${idUnidadeMedida}&descUnidMed=${descricao}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("erro MedidasControllers.getListaUnidadesMedidas:", error);
            throw error;
        }
    }

    async getListaUnidadeMedida(req, res) {
        let { idUnidadeMedida, descricao } = req.query;
        idUnidadeMedida = idUnidadeMedida ? idUnidadeMedida : '';
        descricao = descricao ? descricao : '';
        try {
            const apiUrl = `${url}/api/compras/unidademedida.xsjs`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("erro MedidasControllers.getListaUnidadeMedida:", error);
            throw error;
        }
    }

    async putUnidadeMedida(req, res) {

        try {
            const { error, value } = atualizarUnidadesMedidasSchema.validate(req.body, {

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

            const response = await medidasService.updateUnidadeMedida(
                value.IDUNIDADEMEDIDA,
                value.DSUNIDADE,
                value.DSSIGLA,
                value.DTULTATUALIZACAO,
                value.STATIVO
            );

            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro no MedidasControllers.putUnidadeMedida:', error);
            return res.status(500).json({ message: 'Erro MedidasControllers.putUnidadeMedida' });

        }
    }

    async postUnidadeMedida(req, res) {

        try {
            const { error, value } = criarUnidadesMedidasSchema.validate(req.body, {

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

            const response = await medidasService.createUnidadeMedida(
                value.DSUNIDADE,
                value.DSSIGLA,
                value.DTCADASTRO,
                value.DTULTATUALIZACAO,
                value.STATIVO
            );

            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro no MedidasControllers.postUnidadeMedida:', error);
            return res.status(500).json({ message: 'Erro MedidasControllers.postUnidadeMedida' });

        }
    }
}

export default new MedidasControllers();