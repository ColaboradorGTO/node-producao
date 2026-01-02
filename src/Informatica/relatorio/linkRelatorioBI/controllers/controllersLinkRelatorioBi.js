import axios from "axios";
import { LinkRelatorioBiClient } from "../client/index.js"
import { linkRelatorioBiSchema } from "../schema/index.js"
import { linkRelatorioBIService } from "../service/index.js"

const linkRelatorioBiClient = new LinkRelatorioBiClient(process.env.API_URL);
const linkRelatorioBiServices = new linkRelatorioBIService(linkRelatorioBiClient);
const url = process.env.API_URL;

class LinkRelatorioBiController {
    async getListaLinkRelatorioBI(req, res) {
        let { idRelatorio, idEmpresa, page, pageSize, idLoja } = req.query;

        idRelatorio = idRelatorio ? idRelatorio : '';
        idEmpresa = idEmpresa ? idEmpresa : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';
        idLoja = idLoja ? idLoja : '';

        try {
            const apiUrl = `${url}/api/informatica/linkrelatoriobi.xsjs?id=${idRelatorio}&idfilial=${idEmpresa}&page=${page}&pageSize=${pageSize}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);

        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async postLinkRelatorioBi(req, res) {
        try {
            const { error, value } = linkRelatorioBiSchema.validate(req.body, {
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

            const response = await linkRelatorioBiServices.createLinkRelatorioBi({
                IDRELATORIOBI: value.IDRELATORIOBI,
                IDEMPRESA: value.IDEMPRESA,
                LINK: value.LINK,
                STATIVO: value.STATIVO
            });
            return res.status(200).json(response);
        } catch (error) {
            console.error('Error no LinkRelatorioBiController.postLinkRelatorioBi:', error);
            return res.status(500).json({ error: 'Error no servidor' });
        }
    }

    async putLinkRelatorioBi(req, res) {
        try {
            const { error, value } = linkRelatorioBiSchema.validate(req.body, {
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
            console.log("params:", req.params);
            console.log("body:", req.body);

            const response = await linkRelatorioBiServices.createLinkRelatorioBi({
                IDRELATORIOBI: value.IDRELATORIOBI,
                IDEMPRESA: value.IDEMPRESA,
                LINK: value.LINK,
                STATIVO: value.STATIVO,
                IDRELATORIOBIANTIGO: value.IDRELATORIOBIANTIGO
            });
            return res.status(200).json(response);
        } catch (error) {
            console.error('Error no LinkRelatorioBiController.putLinkRelatorioBi:', error);
            return res.status(500).json({ error: 'Error no servidor' });
        }
    }
}

export default new LinkRelatorioBiController();