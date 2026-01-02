import axios from "axios";
import 'dotenv/config';
import { CoresService } from "../service/coresService.js";
import { CoresClient } from "../client/coresClient.js";
import criarCoresSchema from "../schema/criarCoresSchema.js";
import atualizarCoresSchema from "../schema/AtualizarCoresSchema.js";

const url = process.env.API_URL;
const coresClient = new CoresClient(url);
const coresService = new CoresService(coresClient);

class CoresControllers {
    async getListaCores(req, res) {
        let { idCor, descricao } = req.query;
        idCor = idCor ? idCor : '';
        descricao = descricao ? descricao : '';
        try {
            const apiUrl = `${url}/api/compras/cores.xsjs?idCor=${idCor}&descCor=${descricao}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("erro nos campos do banco:", error);
            throw error;
        }
    }

    async getListaGrupoCores(req, res) {
        let { idCor, descricao } = req.query;
        idCor = idCor ? idCor : '';
        descricao = descricao ? descricao : '';
        try {
            const apiUrl = `${url}/api/compras/grupocores.xsjs`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("erro nos campos do banco:", error);
            throw error;
        }
    }

    async putCores(req, res) {
        try {
            const { error, value } = atualizarCoresSchema.validate(req.body, {

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
            const response = await coresService.updateCores(
                value.IDCOR,
                value.IDGRUPOCOR,
                value.DSCOR,
                value.STATIVO
            );

            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro no ExtratosControllers.postListaAjusteExtrato:', error);
            return res.status(500).json({ message: 'Erro ExtratosControllers.postListaAjusteExtrato' });

        }
    }

    /*     async putCores(req, res) {
            let {
                IDCOR,
                IDGRUPOCOR,
                DSCOR,
                STATIVO
            } = req.body;
    
            try {
                const apiUrl = `${url}/api/compras/cores.xsjs`
                const response = await axios.put(apiUrl, {
                    IDCOR,
                    IDGRUPOCOR,
                    DSCOR,
                    STATIVO
                });
    
                return res.json(response.data);
            } catch (error) {
                console.error("erro nos campos do banco:", error);
                throw error;
            }
        } */

    async PostCores(req, res) {

        try {
            const { error, value } = criarCoresSchema.validate(req.body, {

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

            const response = await coresService.createCores(
                value.IDGRUPOCOR,
                value.DSCOR,
                value.STATIVO
            );

            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro no ExtratosControllers.postListaAjusteExtrato:', error);
            return res.status(500).json({ message: 'Erro ExtratosControllers.postListaAjusteExtrato' });

        }
    }

    /*     async PostCores(req, res) {
            let {
                IDGRUPOCOR,
                DSCOR,
                STATIVO
            } = req.body;
    
            try {
                const apiUrl = `${url}/api/compras/cores.xsjs`
                const response = await axios.post(apiUrl, {
                    IDGRUPOCOR,
                    DSCOR,
                    STATIVO
                });
                return res.json(response.data);
            } catch (error) {
                console.error("erro ComprasController.createCores:", error);
                throw error;
            }
        } */

}

export default new CoresControllers();