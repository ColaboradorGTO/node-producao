import axios from "axios";
import 'dotenv/config';
import AtualizarPromocaoSchema from "../schema/atualizarPromocaoSchema.js";
import { PromocaoService } from "../service/promocoesService.js";
import { PromocaoClient } from "../client/promocoesClient.js";
import AtualizarProdutoDestinoPromocaoSchema from "../schema/atualizarProdutosDestinoPromocaoSchema.js";
import AtualizarProdutoOrigemPromocaoSchema from "../schema/atualizarProdutoOrigemPromocaoSchema.js";
import AtualizarEmpresaPromocaoSchema from "../schema/atualizarEmpresaPromocaoSchema.js";
import criarPromocaoSchema from "../schema/CriarPromocaoSchema.js";

const url = process.env.API_URL;
const promocaoClient = new PromocaoClient(url);
const promocaoService = new PromocaoService(promocaoClient);

class PromocaoControllers {
    async getListaPromocoesAtivas(req, res) {
        let { idResumoPromocao, dataPesquisaInicio, dataPesquisaFim, status, page, pageSize } = req.query;
        idResumoPromocao = idResumoPromocao ? idResumoPromocao : '';
        dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
        dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
        status = status ? status : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';
        try {
            const apiUrl = `${url}/api/promocoes-ativas/promocao-ativa.xsjs?dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&idResumoPromocao=${idResumoPromocao}&status=${status}&page=${page}&pageSize=${pageSize}`;
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("erro no PromocaoControllers  getListaPromocoesAtivas:", error);
            throw error;
        }
    }

    async getListaDetalhesPromocoesAtivas(req, res) {
        let { idResumoPromocao, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;
        idResumoPromocao = idResumoPromocao ? idResumoPromocao : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';
        try {
            const apiUrl = `${url}/api/promocoes-ativas/detalhe-promocao-ativa.xsjs?idResumoPromocao=${idResumoPromocao}&page=${page}&pageSize=${pageSize}`;
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("erro no PromocaoControllers  getListaPromocoesAtivas:", error);
            throw error;
        }
    }

    async getListaProdutosPromocoesAtiva(req, res) {
        let { idEmpresa, idProduto, dsProduto, codBarras, page, pageSize } = req.query;
        idEmpresa = idEmpresa ? idEmpresa : '';
        idProduto = idProduto ? idProduto : '';
        dsProduto = dsProduto ? dsProduto : '';
        codBarras = codBarras ? codBarras : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {
            const apiUrl = `${url}/api/promocoes-ativas/produto-promocao-ativa.xsjs?idProduto=${idProduto}&dsProduto=${dsProduto}&codeBars=${codBarras}&page=${page}&pageSize=${pageSize}`;
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Erro no PromoçãoControllers getListaProdutosPromocoesAtiva:", error);
            return res.status(500).json({ error: "Erro no servidor ao buscar produtos." });
        }
    }

    async getListaProdutosDestinoPromocoesAtiva(req, res) {
        let { idProduto, dsProduto, codBarras, page, pageSize } = req.query;
        idProduto = idProduto ? idProduto : '';
        dsProduto = dsProduto ? dsProduto : '';
        codBarras = codBarras ? codBarras : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {
            const apiUrl = `${url}/api/promocoes-ativas/produto-promocao-destino.xsjs?idProduto=${idProduto}&dsProduto=${dsProduto}&codeBars=${codBarras}&page=${page}&pageSize=${pageSize}`;
            const response = await axios.get(apiUrl)
            return res.json(response.data);

        } catch (error) {
            console.error("Erro no PromoçãoControllers getListaProdutosDestinoPromocoesAtiva:", error);
            return res.status(500).json({ error: "Erro no servidor ao buscar produtos." });
        }
    }

    async getListaProdutosOrigemPromocoesAtiva(req, res) {
        let { idProduto, dsProduto, codBarras, page, pageSize } = req.query;
        idProduto = idProduto ? idProduto : '';
        dsProduto = dsProduto ? dsProduto : '';
        codBarras = codBarras ? codBarras : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {
            const apiUrl = `${url}/api/promocoes-ativas/produto-promocao-origem.xsjs?idProduto=${idProduto}&dsProduto=${dsProduto}&codeBars=${codBarras}&page=${page}&pageSize=${pageSize}`;
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Erro no PromoçãoControllers getListaProdutosOrigemPromocoesAtiva:", error);
            return res.status(500).json({ error: "Erro no servidor ao buscar produtos." });
        }
    }

    async getListaEmpresasPromocoesAtiva(req, res) {
        let { idResumoPromocao, page, pageSize } = req.query;
        idResumoPromocao = idResumoPromocao ? idResumoPromocao : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {
            const apiUrl = `${url}/api/promocoes-ativas/empresa-promocao.xsjs?idResumoPromocao=${idResumoPromocao}&page=${page}&pageSize=${pageSize}`;
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Erro no PromoçãoControllers getListaEmpresasPromocoesAtiva:", error);
            return res.status(500).json({ error: "Erro no servidor ao buscar empresas." });
        }
    }

    async putPromocao(req, res) {
        try {
            const { error, value } = AtualizarPromocaoSchema.validate(req.body, {
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

            const response = await promocaoService.updatePromocao(
                value.IDRESUMOPROMOCAOMARKETING,
                value.IDMECANICARESUMOPROMOCAOMARKETING,
                value.TPAPARTIRDE,
                value.TPAPLICADOA,
                value.TPFATORPROMO,
                value.APARTIRDEQTD,
                value.APARTIRDOVLR,
                value.FATORPROMOVLR,
                value.FATORPROMOPERC,
                value.VLPRECOPRODUTO,
                value.DTHORAINICIO,
                value.DTHORAFIM,
                value.DSPROMOCAOMARKETING,
                value.IDPRODUTO,
                value.STATIVO,
                value.STEMPRESAPROMO,
                value.STDETPROMOORIGEM,
                value.STDETPROMODESTINO,
                value.IDEMPRESA,
                value.IDGRUPOEMDESTINO,
                value.IDSUBGRUPOEMDESTINO,
                value.IDMARCAEMDESTINO,
                value.IDFORNECEDOREMDESTINO,
                value.IDPRODUTODESTINO,
                value.IDGRUPOEMORIGEM,
                value.IDSUBGRUPOEMORIGEM,
                value.IDMARCAEMORIGEM,
                value.IDFORNECEDOREMORIGEM,
                value.IDPRODUTOORIGEM
            );

            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro no PromocaoControllers.putPromocao:', error);
            return res.status(500).json({ message: 'Erro PromocaoControllers.putPromocao' });
        }
    }

    async putProdutoDestinoPromocao(req, res) {
        try {
            const { error, value } = AtualizarProdutoDestinoPromocaoSchema.validate(req.body, {
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

            const response = await promocaoService.updateProdutoDestinoPromocao(
                value.IDRESUMOPROMOCAOMARKETING,
                value.STATIVO,
                value.IDPRODUTODESTINO,
            );

            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro no PromocaoControllers.putPromocao:', error);
            return res.status(500).json({ message: 'Erro PromocaoControllers.putPromocao' });
        }
    }

    async putProdutoOrigemPromocao(req, res) {
        try {
            const { error, value } = AtualizarProdutoOrigemPromocaoSchema.validate(req.body, {
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

            const response = await promocaoService.updateProdutoDestinoPromocao(
                value.IDRESUMOPROMOCAOMARKETING,
                value.STATIVO,
                value.IDPRODUTOORIGEM,

            );

            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro no PromocaoControllers.putPromocao:', error);
            return res.status(500).json({ message: 'Erro PromocaoControllers.putPromocao' });
        }
    }

    async putEmpresaPromocao(req, res) {
        try {
            const { error, value } = AtualizarEmpresaPromocaoSchema.validate(req.body, {
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
            const response = await promocaoService.updateEmpresaPromocao(
                value.IDRESUMOPROMOCAOMARKETING,
                value.STATIVO,
                value.IDEMPRESA,
                value.IDEMPRESAPROMOCAOMARKETING
            );

            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro no PromocaoControllers.putPromocao:', error);
            return res.status(500).json({ message: 'Erro PromocaoControllers.putPromocao' });
        }
    }

    async postPromocao(req, res) {
        try {
            const { error, value } = criarPromocaoSchema.validate(req.body, {
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
            const response = await promocaoService.createPromocao(
                value.DSPROMOCAOMARKETING,
                value.DTHORAINICIO,
                value.DTHORAFIM,
                value.TPAPLICADOA,
                value.APARTIRDEQTD,
                value.APARTIRDOVLR,
                value.TPFATORPROMO,
                value.FATORPROMOVLR,
                value.FATORPROMOPERC,
                value.TPAPARTIRDE,
                value.VLPRECOPRODUTO,
                value.STEMPRESAPROMO,
                value.STDETPROMOORIGEM,
                value.STDETPROMODESTINO
            );

            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro no PromocaoControllers.putPromocao:', error);
            return res.status(500).json({ message: 'Erro PromocaoControllers.putPromocao' });
        }
    }
}

export default new PromocaoControllers();