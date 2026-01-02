import axios from "axios";
import 'dotenv/config';
import atualizarProdutoImagemSchema from "../schema/atualizarProdutoImagemSchema.js";
import { ProdutoClient } from "../client/produtoClient.js";
import { ProdutoService } from "../service/produtoService.js";
import criarProdutoImagemSchema from "../schema/criarProdutoImagemSchema.js";

const url = process.env.API_URL;
const produtoClient = new ProdutoClient(url);
const produtoService = new ProdutoService(produtoClient);

class ProdutosControllers {
    async getListaProdutosImagens(req, res) {
        let { numeroRefProduto } = req.query;
        numeroRefProduto = numeroRefProduto ? numeroRefProduto : '';

        try {
            const apiUrl = `${url}/api/compras/produtos-imagens.xsjs?nuRefProd=${numeroRefProduto}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("error no ComprasControllers.getListaProdutosImagens:", error);
            throw error;
        }
    }

    async getListaDetalheImagemProduto(req, res) {
        let { idImagem } = req.query;
        idImagem = idImagem ? idImagem : '';

        try {
            const apiUrl = `${url}/api/compras/lista_produtosimagem.xsjs?IDImagens=${idImagem}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaProdutosEntreFiliais(req, res) {
        let { idFilialOrigem, idFilialDestino, idProduto, descricaoProduto, codBarras, page, pageSize } = req.query;

        idFilialOrigem = idFilialOrigem ? idFilialOrigem : '';
        idFilialDestino = idFilialDestino ? idFilialDestino : '';
        idProduto = idProduto ? idProduto : '';
        descricaoProduto = descricaoProduto ? descricaoProduto : '';
        codBarras = codBarras ? codBarras : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {
            const apiUrl = `${url}/api/compras/lista-produtos-entre-filiais.xsjs?idFilialOrigem=${idFilialOrigem}&idFilialDestino=${idFilialDestino}&idProd=${idProduto}&descProd=${descricaoProduto}&codBarrasProd=${codBarras}&page=${page}&pageSize=${pageSize}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("erro nos campos do banco:", error);
            throw error;
        }
    }

    async getListaProdutosPorPedido(req, res) {
        let { idResumoPedido, idFilial, dataInicio, dataFim, idProduto, descricaoProduto, codBarras, page, pageSize } = req.query;
        idResumoPedido = idResumoPedido ? idResumoPedido : '';
        idFilial = idFilial ? idFilial : '';
        dataInicio = dataInicio ? dataInicio : '';
        dataFim = dataFim ? dataFim : '';
        idProduto = idProduto ? idProduto : '';
        descricaoProduto = descricaoProduto ? descricaoProduto : '';
        codBarras = codBarras ? codBarras : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {
            const apiUrl = `${url}/api/compras/lista-produtos-por-pedido-e-filial.xsjs?dtInicio=${dataInicio}&dtFim=${dataFim}&idFilial=${idFilial}&idResumoPedido=${idResumoPedido}&idProd=${idProduto}&descProd=${descricaoProduto}&codBarrasProd=${codBarras}&page=${page}&pageSize=${pageSize}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("erro nos campos do banco:", error);
            throw error;
        }
    }

    async getListaImagemProduto(req, res) {
        let { numPage, numeroRefProduto, idFabricante, idSubEstrutura, idPedido } = req.query;
        numPage = numPage ? numPage : '';
        numeroRefProduto = numeroRefProduto ? numeroRefProduto : '';
        idFabricante = idFabricante ? idFabricante : '';
        idSubEstrutura = idSubEstrutura ? idSubEstrutura : '';
        idPedido = idPedido ? idPedido : '';


        try {
            const apiUrl = `${url}/api/compras/imagemproduto.xsjs?page=${numPage}&NuRefImgProd=${numeroRefProduto}&IDFabImagem=${idFabricante}&IDSubEstImagem=${idSubEstrutura}&idPedido=${idPedido}`
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async putProdutoImagem(req, res) {
        try {
            const { error, value } = atualizarProdutoImagemSchema.validate(req.body, {

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
            const response = await produtoService.updateProdutoImagem(
                value.IDIMAGEMPRODUTO,
                value.STATIVO
            );

            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro no ProdutosControllers.putProdutoImagem:', error);
            return res.status(500).json({ message: 'Erro ProdutosControllers.putProdutoImagem' });
        }
    }

    async postImagemProduto(req, res) {
        try {
            const { error, value } = criarProdutoImagemSchema.validate(req.body, {
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
            const response = await produtoService.createImagemProduto(
                value.IDRESUMOPEDIDO,
                value.NUREF,
                value.IMAGEM,
                value.STATIVO,
                value.IDPRODIMAGEM
            );
            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro no ProdutosControllers.postImagemProduto:', error);
            return res.status(500).json({ message: 'Erro ProdutosControllers.postImagemProduto' });
        }
    }
}

export default new ProdutosControllers();