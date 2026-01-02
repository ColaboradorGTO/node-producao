import axios from "axios";
import 'dotenv/config';
import atualizarCondicaoPagamentoSchema from "../schema/atualizarCondicaoPagamentoSchema.js";
import { PagamentoClient } from "../client/pagamentoClient.js";
import { PagamentoService } from "../service/pagamentoService.js";
import criarCondicaoPagamentoSchema from "../schema/criarCondicaoPagamentoSchema.js";

const url = process.env.API_URL;
const pagamentoClient = new PagamentoClient(url);
const pagamentoService = new PagamentoService(pagamentoClient);

class PagamentoControllers {

    async getListaCondicoesPagamento(req, res) {
        let { idCondPagamento, descricaoPagamento } = req.query;
        idCondPagamento = idCondPagamento ? idCondPagamento : '';
        descricaoPagamento = descricaoPagamento ? descricaoPagamento : '';
        try {
            const apiUrl = `${url}/api/compras/condicaopagamento.xsjs?idCondPag=${idCondPagamento}&descCondPag=${descricaoPagamento}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("error no CComprasController.getListaCondicoesPagamento", error);
            throw error;
        }
    }

    async putCondicaoPagamento(req, res) {
        try {
            const { error, value } = atualizarCondicaoPagamentoSchema.validate(req.body, {

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

            const response = await pagamentoService.updateCondicaoPagamento(
                value.IDCONDICAOPAGAMENTO,
                value.IDGRUPOEMPRESARIAL,
                value.DSCONDICAOPAG,
                value.STPARCELADO,
                value.NUPARCELAS,
                value.NUNDIA1PAG,
                value.NUNDIA2PAG,
                value.NUNDIA3PAG,
                value.NUNDIA4PAG,
                value.NUNDIA5PAG,
                value.NUNDIA6PAG,
                value.NUNDIA7PAG,
                value.NUNDIA8PAG,
                value.NUNDIA9PAG,
                value.NUNDIA10PAG,
                value.NUNDIA11PAG,
                value.NUNDIA12PAG,
                value.DTULTALTERACAO,
                value.QTDDIAS,
                value.STATIVO,
                value.IDTPDOCUMENTO
            );

            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro no PagamentoControllers.putCondicaoPagamento:', error);
            return res.status(500).json({ message: 'Erro PagamentoControllers.putCondicaoPagamento' });

        }
    }

    async postCondicaoPagamento(req, res) {
        try {
            const { error, value } = criarCondicaoPagamentoSchema.validate(req.body, {

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

            const response = await pagamentoService.createCondicaoPagamento(
                value.IDGRUPOEMPRESARIAL,
                value.DSCONDICAOPAG,
                value.STPARCELADO,
                value.NUPARCELAS,
                value.NUNDIA1PAG,
                value.NUNDIA2PAG,
                value.NUNDIA3PAG,
                value.NUNDIA4PAG,
                value.NUNDIA5PAG,
                value.NUNDIA6PAG,
                value.NUNDIA7PAG,
                value.NUNDIA8PAG,
                value.NUNDIA9PAG,
                value.NUNDIA10PAG,
                value.NUNDIA11PAG,
                value.NUNDIA12PAG,
                value.DTULTALTERACAO,
                value.QTDDIAS,
                value.STATIVO,
                value.IDTPDOCUMENTO
            );

            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro no PagamentoControllers.postCondicaoPagamento:', error);
            return res.status(500).json({ message: 'Erro PagamentoControllers.postCondicaoPagamento' });
        }
    }
}

export default new PagamentoControllers();
