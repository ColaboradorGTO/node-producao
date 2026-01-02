import axios from "axios";
import 'dotenv/config';
import { FornecedoresClient } from "../client/fornecedoresClient.js";
import { FornecedoresService } from "../service/fornecedoresService.js";
import atualizarfornecedorSchema from "../schema/fornecedoresSchema.js";
import criarfornecedorSchema from "../schema/criarfornecedoresSchema.js";

const url = process.env.API_URL;
const fornecedoresClient = new FornecedoresClient(url);
const fornecedoresService = new FornecedoresService(fornecedoresClient);

class FornecedoresControllers {
    async getListaFornecedores(req, res) {
        let { idFornecedor, descFornecedor, descFornecedorOuCNPJ, CNPJFornecedor, page, pageSize } = req.query;
        idFornecedor = idFornecedor ? idFornecedor : '';
        descFornecedor = descFornecedor ? descFornecedor : '';
        CNPJFornecedor = CNPJFornecedor ? CNPJFornecedor : '';
        descFornecedorOuCNPJ = descFornecedorOuCNPJ ? descFornecedorOuCNPJ : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {
            const apiUrl = `${url}/api/compras/fornecedor.xsjs?id=${idFornecedor}&descFornecedor=${descFornecedor}&CNPJFornecedor=${CNPJFornecedor}&descFornOrCnpj=${descFornecedorOuCNPJ}&page=${page}&pageSize=${pageSize}`

            const response = await axios.get(apiUrl)
            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaFornecedorProduto(req, res) {
        let { idFornecedor, idProduto } = req.query;
        idFornecedor = idFornecedor ? idFornecedor : '';
        idProduto = idProduto ? idProduto : '';

        try {
            const apiUrl = `${url}/api/compras/fornecedor-produto.xsjs?idFornecedor=${idFornecedor}&idProduto=${idProduto}`
            const response = await axios.get(apiUrl)

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaFornecedorSap(req, res) {
        let { nomeFornecedor, cnpjFinal, cnpjFornecedorSemFormatar, page, pageSize } = req.query;
        nomeFornecedor = nomeFornecedor ? nomeFornecedor : '';
        cnpjFinal = cnpjFinal ? cnpjFinal : '';
        cnpjFornecedorSemFormatar = cnpjFornecedorSemFormatar ? cnpjFornecedorSemFormatar : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {
            const apiUrl = `${url}/api/service-layer/pedido-compra/por-codigo/consulta-fornecedor-sap.xsjs?descFornecedor=${nomeFornecedor}&cnpjfor=${cnpjFinal}&cnpjforsemformat=${cnpjFornecedorSemFormatar}&page=${page}&pageSize=${pageSize}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("erro nos campos do banco:", error);
            throw error;
        }
    }

    async putFornecedor(req, res) {
        try {
            const { error, value } = atualizarfornecedorSchema.validate(req.body, {

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

            const response = await fornecedoresService.updateFornecedor(
                value.IDFORNECEDOR,
                value.IDGRUPOEMPRESARIAL,
                value.IDSUBGRUPOEMPRESARIAL,
                value.MODPEDIDO,
                value.NORAZAOSOCIAL,
                value.NOFANTASIA,
                value.NUCNPJ,
                value.NUINSCESTADUAL,
                value.NUINSCMUNICIPAL,
                value.NUIBGE,
                value.EENDERECO,
                value.ENUMERO,
                value.ECOMPLEMENTO,
                value.EBAIRRO,
                value.ECIDADE,
                value.SGUF,
                value.NUCEP,
                value.EEMAIL,
                value.NUTELEFONE1,
                value.NUTELEFONE2,
                value.NUTELEFONE3,
                value.NOREPRESENTANTE,
                value.DTCADASTRO,
                value.DTULTATUALIZACAO,
                value.STATIVO,
                value.IDCONDPAGPADRAO,
                value.IDTRANSPORTADORAPADRAO,
                value.TPPEDIDOPADRAO,
                value.NOVENDEDORPADRAO,
                value.TPFRETEPADRAO,
                value.TPARQUIVOPADRAO,
                value.TPFISCALPADRAO,
                value.EMAILVENDEDORPADRAO,
            );

            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro no FornecedoresControllers.putFornecedor:', error);
            return res.status(500).json({ message: 'Erro FornecedoresControllers.putFornecedor' });
        }
    }

    async putExcluirVinculoFornecedorFabricante(req, res) {
        let { IDFABRICANTEFORNOCEDOR } = req.query;

        try {
            const apiUrl = `${url}/api/compras/del_vincfabforn.xsjs?IDFABRICANTEFORN=${IDFABRICANTEFORNOCEDOR}`

            const response = await axios.put(apiUrl);
            return res.json(response.data);
        } catch (error) {
            console.error("error no ComprasControllers.putExcluirVinculoFornecedor:", error);
            throw error;
        }
    }

    async postFornecedor(req, res) {
        try {
            const { error, value } = criarfornecedorSchema.validate(req.body, {

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

            const response = await fornecedoresService.createFornecedor(
                value.IDGRUPOEMPRESARIAL,
                value.IDSUBGRUPOEMPRESARIAL,
                value.MODPEDIDO,
                value.NORAZAOSOCIAL,
                value.NOFANTASIA,
                value.NUCNPJ,
                value.NUINSCESTADUAL,
                value.NUINSCMUNICIPAL,
                value.NUIBGE,
                value.EENDERECO,
                value.ENUMERO,
                value.ECOMPLEMENTO,
                value.EBAIRRO,
                value.ECIDADE,
                value.SGUF,
                value.NUCEP,
                value.EEMAIL,
                value.NUTELEFONE1,
                value.NUTELEFONE2,
                value.NUTELEFONE3,
                value.NOREPRESENTANTE,
                value.DTCADASTRO,
                value.DTULTATUALIZACAO,
                value.STATIVO,
                value.IDCONDPAGPADRAO,
                value.IDTRANSPORTADORAPADRAO,
                value.TPPEDIDOPADRAO,
                value.NOVENDEDORPADRAO,
                value.TPFRETEPADRAO,
                value.TPARQUIVOPADRAO,
                value.TPFISCALPADRAO,
                value.EMAILVENDEDORPADRAO,
            );

            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro no FornecedoresControllers.putFornecedor:', error);
            return res.status(500).json({ message: 'Erro FornecedoresControllers.putFornecedor' });
        }
    }

    /* async postFornecedor(req, res) {
        let {
            IDFORNECEDOR,
            IDGRUPOEMPRESARIAL,
            IDSUBGRUPOEMPRESARIAL,
            MODPEDIDO,
            NORAZAOSOCIAL,
            NOFANTASIA,
            NUCNPJ,
            NUINSCESTADUAL,
            NUINSCMUNICIPAL,
            NUIBGE,
            EENDERECO,
            ENUMERO,
            ECOMPLEMENTO,
            EBAIRRO,
            ECIDADE,
            SGUF,
            NUCEP,
            EEMAIL,
            NUTELEFONE1,
            NUTELEFONE2,
            NUTELEFONE3,
            NOREPRESENTANTE,
            DTCADASTRO,
            DTULTATUALIZACAO,
            STATIVO,
            IDCONDPAGPADRAO,
            IDTRANSPORTADORAPADRAO,
            TPPEDIDOPADRAO,
            NOVENDEDORPADRAO,
            TPFRETEPADRAO,
            TPARQUIVOPADRAO,
            TPFISCALPADRAO,
            EMAILVENDEDORPADRAO,
        } = req.body;

        try {
            const apiUrl = `${url}/api/compras/fornecedor.xsjs`
            const response = await axios.post(apiUrl, {
                IDFORNECEDOR,
                IDGRUPOEMPRESARIAL,
                IDSUBGRUPOEMPRESARIAL,
                MODPEDIDO,
                NORAZAOSOCIAL,
                NOFANTASIA,
                NUCNPJ,
                NUINSCESTADUAL,
                NUINSCMUNICIPAL,
                NUIBGE,
                EENDERECO,
                ENUMERO,
                ECOMPLEMENTO,
                EBAIRRO,
                ECIDADE,
                SGUF,
                NUCEP,
                EEMAIL,
                NUTELEFONE1,
                NUTELEFONE2,
                NUTELEFONE3,
                NOREPRESENTANTE,
                DTCADASTRO,
                DTULTATUALIZACAO,
                STATIVO,
                IDCONDPAGPADRAO,
                IDTRANSPORTADORAPADRAO,
                TPPEDIDOPADRAO,
                NOVENDEDORPADRAO,
                TPFRETEPADRAO,
                TPARQUIVOPADRAO,
                TPFISCALPADRAO,
                EMAILVENDEDORPADRAO,
            });
            return res.json(response.data);
        } catch (error) {
            console.error("error no ComprasControllers.postFornecedor:", error);
            throw error;
        }
    }
 */
}

export default new FornecedoresControllers();