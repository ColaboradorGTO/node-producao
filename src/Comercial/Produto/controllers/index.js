import axios from "axios";
import { dataFormatada } from "../../../utils/dataFormatada.js";
import { ProdutoClient, } from "../client/produtosClient.js";
import { ProdutoService } from "../service/produtosService.js";
import 'dotenv/config';

const produtoClient = new ProdutoClient(process.env.API_URL);
const produtoService = new ProdutoService(produtoClient);
const url = process.env.API_URL;

class ProdutoControllers {

  async getListaProdutosEstoquePrecoLoja(req, res) {
    let { dataPesquisaInicio, dataPesquisaFim, idMarcaProduto, idEmpresa, descricaoProduto, ufPesquisa, idFornecedor, idGrupo, idGrade, idMarca, vlPrecoProduto } = req.query;
    idEmpresa = idEmpresa ? idEmpresa : '';
    descricaoProduto = descricaoProduto ? descricaoProduto : '';
    ufPesquisa = ufPesquisa ? ufPesquisa : '';
    idFornecedor = idFornecedor ? idFornecedor : '';
    idGrupo = idGrupo ? idGrupo : '';
    idGrade = idGrade ? idGrade : '';
    idMarca = idMarca ? idMarca : '';
    idMarcaProduto = idMarcaProduto ? idMarcaProduto : '';
    dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataFormatada(dataPesquisaInicio) : '';
    dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataFormatada(dataPesquisaFim) : '';
    vlPrecoProduto = vlPrecoProduto ? vlPrecoProduto : '';

    try {
      const apiUrl = `${url}/api/comercial/produtos-precos-estoques-lojas.xsjs?page=&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&idMarca=${idMarca}&idEmpresa=${idEmpresa}&descricaoProduto=${descricaoProduto}&uf=${ufPesquisa}&idFornecedor=${idFornecedor}&idGrupoGrade=${idGrupo}&idGrade=${idGrade}&idMarcaProduto=${idMarcaProduto}&vlPreco=${vlPrecoProduto}`;
      const response = await axios.get(apiUrl)

      return res.json(response.data);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }
  }

  async getListaVendasEstruturaProdutos(req, res) {
    let { idEmpresaLogin, dataPesquisaInicio, dataPesquisaFim } = req.query;
    if (!isNaN(idEmpresaLogin)) {
      idEmpresaLogin = Number(idEmpresaLogin);
      dataPesquisaInicio = dataFormatada(dataPesquisaInicio)
      dataPesquisaFim = dataFormatada(dataPesquisaFim)

      try {
        const apiUrl = `${url}/api/comercial/vendas-por-produto.xsjs?idEmpresa=${idEmpresaLogin}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}`;
        const response = await axios.get(apiUrl)

        return res.json(response.data);
      } catch (error) {
        console.error("Unable to connect to the database:", error);
        throw error;
      }
    }
  }

  async getListaProdutoSap(req, res) {
    let { idEmpresa } = req.query;

    try {
      const apiUrl = `${url}/api/produto-sap/grupo.xsjs`;
      const response = await axios.get(apiUrl)

      return res.json(response.data); // Retorna
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }
  }

  async getListaGrupoProduto(req, res) {
    let { nome, page, pageSize } = req.query;
    nome = nome ? nome : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';
    try {
      const apiUrl = `${url}/api/comercial/grupo-produto.xsjs?nome=${nome}&page=${page}&pageSize=${pageSize}`;
      const response = await axios.get(apiUrl)

      return res.json(response.data);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }
  }

  async getListaSubGrupoProduto(req, res) {
    let { idGrupo, page, pageSize } = req.query;

    idGrupo = idGrupo ? idGrupo : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';
    try {
      const apiUrl = `${url}/api/comercial/subgrupo-produto.xsjs`;
      const response = await axios.get(apiUrl)

      return res.json(response.data);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }
  }

  async getListaVendasPorProduto(req, res) {
    let { idEmpresa, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;

    idEmpresa = idEmpresa ? idEmpresa : '';
    dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
    dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';
    try {
      const apiUrl = `${url}/api/comercial/vendas-por-produto.xsjs?idEmpresa=${idEmpresa}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&page=${page}&pageSize=${pageSize}`;
      const response = await axios.get(apiUrl)

      return res.json(response.data);
    } catch (error) {
      console.error("Erro no ComercialProdutoControllers.getListaVendasPorProduto:", error);
      throw error;
    }
  }

  async getListaMarcaProduto(req, res) {
    let { idEstrutura, page, pageSize } = req.query;

    idEstrutura = idEstrutura ? idEstrutura : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';
    try {
      const apiUrl = `${url}/api/comercial/marca-produto.xsjs?idSubGrupo=${idEstrutura}&page=${page}&pageSize=${pageSize}`;
      const response = await axios.get(apiUrl)

      return res.json(response.data);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }
  }

  async getListaFornecedorProduto(req, res) {
    let { idMarca, page, pageSize } = req.query;

    idMarca = idMarca ? idMarca : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';
    try {
      const apiUrl = `${url}/api/comercial/fornecedor-produto.xsjs?idMarca=${idMarca}&page=${page}&pageSize=${pageSize}`;
      const response = await axios.get(apiUrl)

      return res.json(response.data);
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }
  }

  async getListaVendasVendedorEstrutura(req, res) {
    let { idEmpresa, idGrupoEmpresarial, idGrupo, idSubGrupo, idMarca, idFornecedor, descricaoProduto, uf, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;

    idEmpresa = idEmpresa ? idEmpresa : '';
    idGrupoEmpresarial = idGrupoEmpresarial ? idGrupoEmpresarial : '';
    descricaoProduto = descricaoProduto ? descricaoProduto : '';
    uf = uf ? uf : '';
    idFornecedor = idFornecedor ? idFornecedor : '';
    idGrupo = idGrupo ? idGrupo : '';
    idSubGrupo = idSubGrupo ? idSubGrupo : '';
    idMarca = idMarca ? idMarca : '';
    dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataFormatada(dataPesquisaInicio) : '';
    dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataFormatada(dataPesquisaFim) : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';
    try {

      const apiUrl = `${url}/api/comercial/vendas-vendedor-estrutura.xsjs?dataInicio=${dataPesquisaInicio}&dataFim=${dataPesquisaFim}&idGrupoEmpresarial=${idGrupoEmpresarial}&idEmpresa=${idEmpresa}&descricaoProduto=${descricaoProduto}&uf=${uf}&idFornecedor=${idFornecedor}&idGrupoGrade=${idGrupo}&idGrade=${idSubGrupo}&idMarcaProduto=${idMarca}&uf=${uf}&page=${page}&pageSize=${pageSize}`;
      const response = await axios.get(apiUrl)

      return res.json(response.data);
    } catch (error) {
      console.error("Error in ComercialProdutoControllers.getListaVendasVendedorEstrutura:", error);
      throw error;
    }
  }

  async getListaProdutosMaisVendidosEstrutura(req, res) {
    let { idEmpresa, idGrupoEmpresarial, idGrupo, idSubGrupo, idMarca, idFornecedor, descricaoProduto, uf, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;

    idEmpresa = idEmpresa ? idEmpresa : '';
    idGrupoEmpresarial = idGrupoEmpresarial ? idGrupoEmpresarial : '';
    descricaoProduto = descricaoProduto ? descricaoProduto : '';
    uf = uf ? uf : '';
    idFornecedor = idFornecedor ? idFornecedor : '';
    idGrupo = idGrupo ? idGrupo : '';
    idSubGrupo = idSubGrupo ? idSubGrupo : '';
    idMarca = idMarca ? idMarca : '';
    dataPesquisaInicio = dataFormatada(dataPesquisaInicio) ? dataFormatada(dataPesquisaInicio) : '';
    dataPesquisaFim = dataFormatada(dataPesquisaFim) ? dataFormatada(dataPesquisaFim) : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';

    try {
      const apiUrl = `${url}/api/comercial/produtos-mais-vendidos.xsjs?dataInicio=${dataPesquisaInicio}&dataFim=${dataPesquisaFim}&idEmpresa=${idEmpresa}&descricaoProduto=${descricaoProduto}&idFornecedor=${idFornecedor}&idGrupoGrade=${idGrupo}&idGrade=${idSubGrupo}&idMarcaProduto=${idMarca}&uf=${uf}&page=${page}&pageSize=${pageSize}`;
      const response = await axios.get(apiUrl)

      return res.json(response.data); // Retorna
    } catch (error) {
      console.error("Unable to connect to the database:", error);
      throw error;
    }
  }

  async getListaVendasIndicadoresEstrutura(req, res) {
    let { idEmpresa, idGrupoEmpresarial, idGrupo, idSubGrupo, idMarcaProduto, idFornecedor, descricaoProduto, uf, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;

    idEmpresa = idEmpresa ? idEmpresa : '';
    idGrupoEmpresarial = idGrupoEmpresarial ? idGrupoEmpresarial : '';
    descricaoProduto = descricaoProduto ? descricaoProduto : '';
    uf = uf ? uf : '';
    idFornecedor = idFornecedor ? idFornecedor : '';
    idGrupo = idGrupo ? idGrupo : '';
    idSubGrupo = idSubGrupo ? idSubGrupo : '';
    idMarcaProduto = idMarcaProduto ? idMarcaProduto : '';
    dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
    dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
    page = page ? page : '';
    pageSize = pageSize ? pageSize : '';
    try {

      const apiUrl = `${url}/api/comercial/vendas-por-estrutura.xsjs?dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&idMarca=${idGrupoEmpresarial}&idEmpresa=${idEmpresa}&descricaoProduto=${descricaoProduto}&idFornecedor=${idFornecedor}&idGrupoGrade=${idGrupo}&idGrade=${idSubGrupo}&idMarcaProduto=${idMarcaProduto}`;
      const response = await axios.get(apiUrl)

      return res.json(response.data);
    } catch (error) {
      console.error("Error in ComercialProdutoControllers.getListaVendasIndicadoresEstrutura:", error);
      throw error;
    }
  }
}

export default new ProdutoControllers();