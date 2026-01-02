import axios from 'axios';
import 'dotenv/config';
const url = process.env.API_URL;

export class PromocaoClient {
    constructor(baseURL) {
        this.api = axios.create({
            baseURL: baseURL || url,
            timeout: 80000
        });
    }
    async AtualizarPromocao(
        IDRESUMOPROMOCAOMARKETING,
        IDMECANICARESUMOPROMOCAOMARKETING,
        TPAPARTIRDE,
        TPAPLICADOA,
        TPFATORPROMO,
        APARTIRDEQTD,
        APARTIRDOVLR,
        FATORPROMOVLR,
        FATORPROMOPERC,
        VLPRECOPRODUTO,
        DTHORAINICIO,
        DTHORAFIM,
        DSPROMOCAOMARKETING,
        IDPRODUTO,
        STATIVO,
        STEMPRESAPROMO,
        STDETPROMOORIGEM,
        STDETPROMODESTINO,
        IDEMPRESA,
        IDGRUPOEMDESTINO,
        IDSUBGRUPOEMDESTINO,
        IDMARCAEMDESTINO,
        IDFORNECEDOREMDESTINO,
        IDPRODUTODESTINO,
        IDGRUPOEMORIGEM,
        IDSUBGRUPOEMORIGEM,
        IDMARCAEMORIGEM,
        IDFORNECEDOREMORIGEM,
        IDPRODUTOORIGEM
    ) {
        const response = await this.api.put(`${url}/api/promocoes-ativas/promocao-ativa.xsjs`, [{

            IDRESUMOPROMOCAOMARKETING,
            IDMECANICARESUMOPROMOCAOMARKETING,
            TPAPARTIRDE,
            TPAPLICADOA,
            TPFATORPROMO,
            APARTIRDEQTD,
            APARTIRDOVLR,
            FATORPROMOVLR,
            FATORPROMOPERC,
            VLPRECOPRODUTO,
            DTHORAINICIO,
            DTHORAFIM,
            DSPROMOCAOMARKETING,
            IDPRODUTO,
            STATIVO,
            STEMPRESAPROMO,
            STDETPROMOORIGEM,
            STDETPROMODESTINO,
            IDEMPRESA,
            IDGRUPOEMDESTINO,
            IDSUBGRUPOEMDESTINO,
            IDMARCAEMDESTINO,
            IDFORNECEDOREMDESTINO,
            IDPRODUTODESTINO,
            IDGRUPOEMORIGEM,
            IDSUBGRUPOEMORIGEM,
            IDMARCAEMORIGEM,
            IDFORNECEDOREMORIGEM,
            IDPRODUTOORIGEM
        }]);
        return response.data;
    }

    async AtualizarProdutoDestinoPromocao(
        STATIVO,
        IDRESUMOPROMOCAOMARKETING,
        IDPRODUTODESTINO
    ) {
        const response = await this.api.put(`${url}/api/promocoes-ativas/desativar-pruduto-promocao-destino.xsjs`, [{
            STATIVO,
            IDRESUMOPROMOCAOMARKETING,
            IDPRODUTODESTINO
        }]);
        return response.data;
    }

    async AtualizarProdutoOrigemPromocao(
        IDRESUMOPROMOCAOMARKETING,
        STATIVO,
        IDPRODUTOORIGEM,
    ) {
        const response = await this.api.put(`${url}/api/promocoes-ativas/desativar-pruduto-promocao-origem.xsjs`, [{
            IDRESUMOPROMOCAOMARKETING,
            STATIVO,
            IDPRODUTOORIGEM,
        }]);
        return response.data;
    }

    async AtualizarEmpresaPromocao(
        IDRESUMOPROMOCAOMARKETING,
        STATIVO,
        IDEMPRESA,
        IDEMPRESAPROMOCAOMARKETING
    ) {
        const response = await this.api.put(`${url}/api/promocoes-ativas/desativar-empresa-promocao.xsjs`, [{
            IDRESUMOPROMOCAOMARKETING,
            STATIVO,
            IDEMPRESA,
            IDEMPRESAPROMOCAOMARKETING
        }]);
        return response.data;
    }

    async CriarPromocao(
        DSPROMOCAOMARKETING,
        DTHORAINICIO,
        DTHORAFIM,
        TPAPLICADOA,
        APARTIRDEQTD,
        APARTIRDOVLR,
        TPFATORPROMO,
        FATORPROMOVLR,
        FATORPROMOPERC,
        TPAPARTIRDE,
        VLPRECOPRODUTO,
        STEMPRESAPROMO,
        STDETPROMOORIGEM,
        STDETPROMODESTINO
    ) {
        const response = await this.api.post(`${url}/api/promocoes-ativas/promocao-ativa.xsjs`, [{
            DSPROMOCAOMARKETING,
            DTHORAINICIO,
            DTHORAFIM,
            TPAPLICADOA,
            APARTIRDEQTD,
            APARTIRDOVLR,
            TPFATORPROMO,
            FATORPROMOVLR,
            FATORPROMOPERC,
            TPAPARTIRDE,
            VLPRECOPRODUTO,
            STEMPRESAPROMO,
            STDETPROMOORIGEM,
            STDETPROMODESTINO
        }]);
        return response.data;
    }
}

