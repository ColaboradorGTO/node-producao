import axios from "axios";
import 'dotenv/config';
import { LogsUsuariosClient } from "../client/logUsuariosClient.js";
import { LogsUsuariosService } from "../service/logUsuarioService.js";
import criarLogsSchema from "../schema/logUsuarioSchema.js";

const url = process.env.API_URL;
const logsUsuariosClient = new LogsUsuariosClient(url);
const logsUsuariosService = new LogsUsuariosService(logsUsuariosClient);

class LogsControllers {

    async getListaLogsUsuario(req, res) {
        let { id, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;

        id = id ? id : '';
        dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : '';
        dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {
            const apiUrl = `${url}/api/log-web.xsjs?id=${id}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&page=${page}&pageSize=${pageSize}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async postLogsUsuario(req, res) {

        try {
            const { error, value } = criarLogsSchema.validate(req.body, {

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

            const response = await logsUsuariosService.createLogUsuario(
                value.IDFUNCIONARIO,
                value.PATHFUNCAO,
                value.DADOS,
                value.IP
            );

            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro no LogsControllers.postLogsUsuario:', error);
            return res.status(500).json({ message: 'Erro LogsControllers.postLogsUsuario' });

        }
    }
}

export default new LogsControllers();