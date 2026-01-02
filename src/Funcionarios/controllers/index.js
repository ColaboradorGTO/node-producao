import axios from "axios";
import 'dotenv/config';
import { FuncionarioClient } from "../client/funcionarioClient.js";
import { FuncionarioService } from "../service/funcionarioService.js";

const url = process.env.API_URL;
const funcionarioClient = new FuncionarioClient(url);
const funcionarioService = new FuncionarioService(funcionarioClient);

class FuncionariosControllers {

    async getListaTodosFuncionarios(req, res,) {
        let { byId, idEmpresa, cpf, matricula, senha, page, pageSize } = req.query;
        try {
            byId = byId ? byId : '';
            idEmpresa = idEmpresa ? idEmpresa : '';
            cpf = cpf ? cpf : '';
            matricula = matricula ? matricula : '';
            senha = senha ? senha : '';
            page = page ? page : '';
            pageSize = pageSize ? pageSize : '';

            const apiUrl = `${url}/api/funcionario/todos.xsjs?idEmpresa=${idEmpresa}&page=${page}&pageSize=${pageSize}`
            const response = await axios.get(apiUrl);

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaFuncionariosAtivos(req, res,) {
        let { idEmpresa } = req.query;

        if (!idEmpresa) {
            return res.status(400).json({ "error": "idEmpresa nao informado" })
        }
        try {
            const apiUrl = `${url}/api/funcionario/funcionario-ativo-por-empresa.xsjs?idEmpresa=${idEmpresa}`
            const response = await axios.get(apiUrl);

            return res.json(response.data);
        } catch (error) {
            console.error("Erro no FuncionariosControllers getListaFuncionariosAtivos:", error);
            return res.status(500).json({ error: 'Erro ao buscar funcionários ativos' });
        }
    }

    async getAutorizacaoVoucherFuncionarios(req, res,) {
        let { matricula, senha } = req.query;

        try {
            const funcionariosResponse = await axios.get(`${url}/api/funcionario/todos.xsjs?matricula=${matricula}&senha=${senha}`)

            const funcionarios = funcionariosResponse.data;

            if (!funcionarios) {
                return res.status(401).json({ error: 'Credenciais inválidas ou token não recebido' });
            }

            return res.json(funcionarios);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getAdiantamentoFuncionario(req, res,) {
        let { idFuncionario } = req.query;

        try {
            const funcionariosResponse = await axios.get(`${url}/api/adiantamento-salarial.xsjs?id=${idFuncionario}`)

            const funcionarios = funcionariosResponse.data;

            if (!funcionarios) {
                return res.status(401).json({ error: 'Credenciais inválidas ou token não recebido' });
            }

            return res.json(funcionarios);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

}

export default new FuncionariosControllers();