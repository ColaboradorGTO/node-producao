import axios from "axios";
import 'dotenv/config';
import criarMecanicaAtivaSchema from "../schema/mecanicaSchema.js";
import { MecanicaClient } from "../client/mecanicaClient.js";
import { MecanicaService } from "../service/mecanicaService.js";

const url = process.env.API_URL;
const mecanicaClient = new MecanicaClient(url);
const mecanicaService = new MecanicaService(mecanicaClient);

class MecanicaControllers {
    async getListaMecanicaAtivas(req, res) {
        let { idResumoPromocao, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;
        
        idResumoPromocao = idResumoPromocao ? idResumoPromocao : '';
        dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
        dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';
        try {

            const apiUrl = `${url}/api/promocoes-ativas/select-mecanica.xsjs`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("erro no PromocaoControllers  getListaMecanicaAtivas:", error);
            throw error;
        }
    }

    async postMecanicaAtivas(req, res) {

        try {
            const { error, value } = criarMecanicaAtivaSchema.validate(req.body, {
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

            const response = await mecanicaService.createMecanicaAtivar(
                value.DESCRICAO,
                value.APLICACAODESTINO,
                value.MECANICA,
                value.TIPODESCONTO
            );

            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro no ExtratosControllers.postListaAjusteExtrato:', error);
            return res.status(500).json({ message: 'Erro ExtratosControllers.postListaAjusteExtrato' });

        }
    }

}

export default new MecanicaControllers();