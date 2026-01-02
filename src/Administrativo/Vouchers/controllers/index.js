import axios from "axios";
import 'dotenv/config';
import updateVoucherSchema from '../schema/useUpdateVoucher.js'
import { VouchersClient } from '../client/index.js'
import { VoucherServices } from '../services/index.js'
import { dataFormatada } from "../../../utils/dataFormatada.js";

const url = process.env.API_URL;
const updateVoucherClient = new VouchersClient(process.env.API_URL);
const updateVoucherService = new VoucherServices(updateVoucherClient);

class AdmVouchersControllers {

    async getDetalheVoucher(req, res) {
 
        let { idEmpresa, page, pageSize, datapesq } = req.query;
        if (!isNaN(idEmpresa)) {
            idEmpresa = Number(idEmpresa) ? Number(idEmpresa) : '';
            datapesq = dataFormatada(datapesq) ? datapesq : '';
            page = page ? page : '';
            pageSize = pageSize ? pageSize : '';
            
            try {
                const apiUrl = `${url}/api/administrativo/detalhe-voucher.xsjs?pagesize=${pageSize}&idEmpresa=${idEmpresa}&dataPesquisa=${datapesq}`
                const response = await axios.get(apiUrl)
                return res.json(response.data); // Retorna
            } catch (error) {
                console.error("Unable to connect to the database:", error);
                throw error;
            }
        }
    }

    async getDetalheProdutoVoucher(req, res) {

        let { idVoucher } = req.query;
        if (!isNaN(idVoucher)) {
            idVoucher = Number(idVoucher);

            try {
                const apiUrl = `${url}/api/administrativo/detalhe-prod-voucher.xsjs?idvoucher=${idVoucher}`
                const response = await axios.get(apiUrl)
                return res.json(response.data); 
            } catch (error) {
                console.error("Unable to connect to the database:", error);
                throw error;
            }
        }
    }

    async getListaDetalheVoucherDados(req, res) {
        let { idSubGrupoEmpresa, idEmpresa, idVoucher, dataPesquisaInicio, dataPesquisaFim, dadosVoucher, stStatus, stTipoTroca, page, pageSize } = req.query;

        idSubGrupoEmpresa = idSubGrupoEmpresa ? idSubGrupoEmpresa : ''
        idEmpresa = idEmpresa ? idEmpresa : ''
        idVoucher = idVoucher ? idVoucher : ''
        dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : ''
        dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : ''
        dadosVoucher = dadosVoucher ? dadosVoucher : ''
        stStatus = stStatus ? stStatus : ''
        stTipoTroca = stTipoTroca ? stTipoTroca : ''
        page = page ? page : ''
        pageSize = pageSize ? pageSize : ''
        try {
            const apiUrl = `${url}/api/administrativo/detalhe-voucher-dados.xsjs?dadosVoucher=${dadosVoucher}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&page=${page}&pageSize=${pageSize}`
            const response = await axios.get(apiUrl)

            return res.json(response.data); 
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async putEditarVoucher(req, res) {
        try {

            const { error, value } = updateVoucherSchema.validate(req.body, {
                abortEarly: false,
                stripUnknown: true
            })

            if (error) {
                return res.status(400).json({
                    message: 'Dados inválidos',
                    errors: error.details.map(detail => ({
                        field: detail.path.join('.'),
                        message: detail.message
                    }))
                });
            }

            const response = await updateVoucherService.updateVoucher(
                value.STATIVO,
                value.STCANCELADO,
                value.DSMOTIVOTROCASTATUS,
                value.STSTATUS,
                value.STTIPOTROCA,
                value.IDFUNCIONARIO,
                value.IDEMPRESALOGADA,
                value.IDGRUPOEMPRESARIAL,
                value.IDVOUCHER
            )

            return res.status(200).json(response);

        } catch (error) {
            console.error("Erro no AdministativoControllers.putEditarVoucher:", error);
            return res.status(500).json({ error: "Erro ao conectar ao servidor" });
        }

    }

}

export default new AdmVouchersControllers();