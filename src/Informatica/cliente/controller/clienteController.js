import axios from "axios";
import 'dotenv/config';
import { ClienteClient } from "../client/clienteClient.js";
import { ClienteService } from "../service/clienteService.js";
import { dataFormatada } from "../../../utils/dataFormatada.js";

const url = process.env.API_URL;
const clienteClient = new ClienteClient(url);
const clienteService = new ClienteService(clienteClient);

class ClienteControllers {

    async getListaCadastroClienteCredSystem(req, res) {
        let { idEmpresa, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;

        try {
            idEmpresa = idEmpresa ? idEmpresa : '';
            dataPesquisaInicio = dataPesquisaInicio ? dataFormatada(dataPesquisaInicio) : '';
            dataPesquisaFim = dataPesquisaFim ? dataFormatada(dataPesquisaFim) : '';
            page = page ? page : '';
            pageSize = pageSize ? pageSize : '';

            const apiUrl = `${url}/api/informatica/cadastro-cliente-credsystem.xsjs?idEmpresa=${idEmpresa}&dtInicio=${dataPesquisaInicio}&dtFim=${dataPesquisaFim}&page=${page}&pageSize=${pageSize}`;
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaCliente(req, res) {
        let { idCliente } = req.query;

        try {
            idCliente = idCliente ? idCliente : '';

            const apiUrl = `${url}/api/informatica/cliente.xsjs?id=${idCliente}`
            const response = await axios.get(apiUrl)
            if (response.status === 200) {
                return res.json(response.data);
            } else {
                return res.status(500).json({ message: "Erro ao buscar caixas." });
            }
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaClienteIformatica(req, res) {
        let { idEmpresa, idCliente, idMarca, cpf, descCliente, tpCliente, status, page, pageSize } = req.query;

        try {
            idEmpresa = idEmpresa ? idEmpresa : '';
            idCliente = idCliente ? idCliente : '';
            idMarca = idMarca ? idMarca : '';
            cpf = cpf ? cpf : '';
            descCliente = descCliente ? descCliente : '';
            tpCliente = tpCliente ? tpCliente : '';
            status = status ? status : '';
            page = page ? page : '';
            pageSize = pageSize ? pageSize : '';

            const apiUrl = `${url}/api/informatica/cliente.xsjs?idmarca=${idMarca}&idloja=${idEmpresa}&dscliente=${descCliente}&idcpfcnpj=${cpf}&idtipocliente=${tpCliente}&idstatus=${status}&id=${idCliente}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);

        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }
}

export default new ClienteControllers();