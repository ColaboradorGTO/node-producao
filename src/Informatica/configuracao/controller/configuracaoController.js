import axios from "axios";
import 'dotenv/config';
import { ConfiguracaoClient } from "../client/configuracoesClient";
import { ConfiguracaoService } from "../service/configuracaoService";

const url = process.env.API_URL;
const configuracaoClient = new ConfiguracaoClient(url);
const configuracaoService = new ConfiguracaoService(configuracaoClient);

class ConfiguracaoControllers {

}

export default new ConfiguracaoControllers();