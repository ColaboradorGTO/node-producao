import axios from "axios";
import 'dotenv/config';
import { PromocaoClient } from "../client/promocaoClient.js";
import { PromocaoService } from "../service/promocaoService.js";
import criarProdutoPromocaoSchema from "../schema/promocaoSchema.js";

const url = process.env.API_URL;
const promocaoClient = new PromocaoClient(url);
const promocaoService = new PromocaoService(promocaoClient);

class PromocaoControllers {
    async getListaProdutosPromocao(req, res) {
        let { idProduto, codeBarsOuNome, page, descricaoProduto, pageSize } = req.query;
        try {
            idProduto = idProduto ? idProduto : '';
            codeBarsOuNome = codeBarsOuNome ? codeBarsOuNome : '';
            descricaoProduto = descricaoProduto ? descricaoProduto : '';
            page = page ? page : '';
            pageSize = pageSize ? pageSize : '';
            const apiUrl = `${url}/api/produto-promocao.xsjs?codeBarsOuNome=${descricaoProduto}`
            const response = await axios.get(apiUrl)

            return res.json(response.data); 
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaPromocao(req, res) {
        let { idResumoPromocao, page, pageSize } = req.query;
        try {
            idResumoPromocao = idResumoPromocao ? idResumoPromocao : '';
            page = page ? page : '';
            pageSize = pageSize ? pageSize : '';
            const apiUrl = `${url}/api/promocao/listapromocao.xsjs?idResumoPromocao=${idResumoPromocao}&page=${page}&pageSize=${pageSize}`
            const response = await axios.get(apiUrl)

            return res.json(response.data); 
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async putProdutoPromocao(req, res) {
        try {
            const dados = Array.isArray(req.body) ? req.body : [req.body];
            const response = await updateProdutoPromocao(dados)

            return res.json(response);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async postProdutoPromocao(req, res) {

    try {
      const { error, value } = criarProdutoPromocaoSchema.validate(req.body, {

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

      const response = await promocaoService.createProdutoPromocao(
        value.DSPROMO,
        value.VRPERCDESCONTO,
        value.VRPRECODESCONTO,
        value.VRAPARTIRDE,
        value.VRLIMITEDE,
        value.QTDAPARTIRDE,
        value.QTDLIMITEDE,
        value.DTINICIOPROMO,
        value.DTFIMPROMO,
        value.STATIVO,
        value.PRODUTOS,
        value.EMPRESAS,
        value.IDGRUPO,
      );

      return res.status(200).json(response);
    } catch (error) {
      console.log('Erro no PromocaoControllers.postProdutoPromocao:', error);
      return res.status(500).json({ message: 'Erro PromocaoControllers.postProdutoPromocao' });

    }
  }

/*     async postProdutoPromocao(req, res) {
        try {
            const dados = Array.isArray(req.body) ? req.body : [req.body];
            const response = await axios.post(`${url}/api/produto-promocao.xsjs`, dados)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    } */

}

export default new PromocaoControllers();