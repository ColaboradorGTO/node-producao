import axios from "axios";
import 'dotenv/config';
import atualizarSubGrupoEstruturaSchema from "../schema/atualizarSubGrupoEstruturaSchema.js";
import { EstruturaClient } from "../client/estruturaClient.js";
import { EstruturaService } from "../service/estruturaService.js";
import atualizarGrupoEstruturaSchema from "../schema/atualizarGrupoEstrutura.js";
import criarSubGrupoEstruturaSchema from "../schema/criarSubGrupoEstruturaSchema.js";
import criarGrupoEstruturaSchema from "../schema/criarGrupoEstrutura.js";

const url = process.env.API_URL;
const estruturaClient = new EstruturaClient(url);
const estruturaService = new EstruturaService(estruturaClient);

class EstruturaControllers {
    async getListaGrupoEstrutura(req, res) {
        let { idGrupoEstrutura, descricaoGrupoEstrutura } = req.query;
        idGrupoEstrutura = idGrupoEstrutura ? idGrupoEstrutura : '';
        descricaoGrupoEstrutura = descricaoGrupoEstrutura ? descricaoGrupoEstrutura : '';
        try {
            const apiUrl = `${url}/api/compras/grupoextrutura.xsjs?idGrupoExt=${idGrupoEstrutura}&descGrupoExt=${descricaoGrupoEstrutura}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("erro nos campos do banco:", error);
            throw error;
        }
    }

    async putSubGrupoEstrutura(req, res) {

        try {
            const { error, value } = atualizarSubGrupoEstruturaSchema.validate(req.body, {

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

            const response = await estruturaService.updateSubGrupoEstrutura(
                value.IDGRUPOESTRUTURAANTIGA,
                value.IDGRUPOESTRUTURA,
                value.DSSUBGRUPOESTRUTURA,
                value.DSSUBGRUPOESTRUTURAFIM,
                value.CODSUBGRUPOESTRUTURA,
                value.IDSUBGRUPOESTRUTURA,
                value.STATIVO
            );

            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro no EstruturaControllers.putSubGrupoEstrutura:', error);
            return res.status(500).json({ message: 'Erro EstruturaControllers.putSubGrupoEstrutura' });
        }
    }

    async putGrupoEstrutura(req, res) {

        try {
            const { error, value } = atualizarGrupoEstruturaSchema.validate(req.body, {

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

            const response = await estruturaService.updateGrupoEstrutura(
                value.IDGRUPOESTRUTURA,
                value.IDGRUPOEMPRESARIAL,
                value.DSGRUPOESTRUTURA,
                value.STATIVO
            );

            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro no EstruturaControllers.putGrupoEstrutura:', error);
            return res.status(500).json({ message: 'Erro EstruturaControllers.putGrupoEstrutura' });
        }
    }

    async postSubGrupoEstrutura(req, res) {

        try {
            const { error, value } = criarSubGrupoEstruturaSchema.validate(req.body, {

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

            const response = await estruturaService.createSubGrupoEstrutura(
                value.IDGRUPOESTRUTURA,
                value.DSSUBGRUPOESTRUTURA,
                value.DSSUBGRUPOESTRUTURAFIM,
                value.CODSUBGRUPOESTRUTURA,
                value.IDSUBGRUPOESTRUTURA,
                value.STATIVO
            );

            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro no EstruturaControllers.postSubGrupoEstrutura:', error);
            return res.status(500).json({ message: 'Erro EstruturaControllers.postSubGrupoEstrutura' });
        }
    }

    async postGrupoEstrutura(req, res) {

        try {
            const { error, value } = criarGrupoEstruturaSchema.validate(req.body, {

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

            const response = await estruturaService.createGrupoEstrutura(
                value.IDGRUPOEMPRESARIAL,
                value.DSGRUPOESTRUTURA,
                value.STATIVO
            );

            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro no EstruturaControllers.postGrupoEstrutura:', error);
            return res.status(500).json({ message: 'Erro EstruturaControllers.postGrupoEstrutura' });
        }
    }
}

export default new EstruturaControllers();