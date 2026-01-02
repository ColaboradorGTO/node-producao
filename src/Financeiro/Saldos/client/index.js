import axios from "axios";
import 'dotenv/config';
//const url = process.env.API_URL;
const url = 'http://164.152.245.77:8000/quality/concentrador_node';

export class SaldosClient {
  constructor(baseURL) {
    this.api = axios.create({
      baseURL: baseURL || url,
      timeout: 80000
    });
  }

  async criarMovimentoSaldoBonificacao(
    IDFUNCIONARIO,
    TIPOMOVIMENTO,
    VRMOVIMENTO,
    OBSERVACAO,
    IDFUNCIONARIORESP,
  ) {
    const response = await this.api.post(`/api/financeiro/movimento-saldo-bonificacao.xsjs`, {
      IDFUNCIONARIO,
      TIPOMOVIMENTO,
      VRMOVIMENTO,
      OBSERVACAO,
      IDFUNCIONARIORESP,
    });
    return response.data;
  }
}
