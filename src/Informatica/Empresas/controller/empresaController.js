import axios from "axios";
import 'dotenv/config';
import { EmpresaClient } from "../client/empresaClient.js";
import { EmpresaService } from "../service/empresaService.js";

const url = process.env.API_URL;
const empresaClient = new EmpresaClient(url);
const empresaService = new EmpresaService(empresaClient);

class EmpresaControllers {
    async getListaEmpresas(req, res) {
        let { } = req.query;

        try {
            const apiUrl = `${url}/api/informatica/empresa.xsjs`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaEmpresasInformatica(req, res) {
        let { idEmpresa } = req.query;
        idEmpresa = idEmpresa ? idEmpresa : '';
        try {
            const apiUrl = `http://164.152.245.77:8000/quality/concentrador/api/informatica/empresa.xsjs?id=${idEmpresa}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }

    }

    async getListaGrupoEmpresas(req, res) {
        let { } = req.query;

        try {
            const apiUrl = `${url}/api/informatica/grupoempresas.xsjs`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaAtualizaEmpresaDiario(req, res) {
        let { idEmpresa, page, pageSize } = req.query;

        try {
            idEmpresa = idEmpresa ? idEmpresa : '';
            page = page ? page : '';
            pageSize = pageSize ? pageSize : '';
            const apiUrl = `${url}/api/informatica/atualiza-empresa-diario.xsjs?id=${idEmpresa}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);

        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;

        }
    }
}

export default new EmpresaControllers();