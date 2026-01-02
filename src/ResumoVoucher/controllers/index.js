import axios from 'axios';
import 'dotenv/config';
import { ResumoVoucherClient } from '../client/resumoVoucherClient.js';
import { ResumoVoucherService } from '../service/resumoVoucherService.js';
import criarAutorizacaoEditarVoucherSchema from '../schema/resumoVoucherSchema.js';
import createAuthFuncionarioPrintVoucherSchema from '../schema/createAuthFuncionarioPrintVoucherSchema.js';
import updateClienteSchema from '../schema/updateClienteSchema.js';
import createResumoVoucherSchema from '../schema/createResumoVoucherSchema.js';
import updateResumoVoucherSchema from '../schema/updateResumoVoucherSchema.js';

const url = process.env.API_URL;
const resumoVoucherClient = new ResumoVoucherClient(url);
const resumoVoucherService = new ResumoVoucherService(resumoVoucherClient);

class ResumoVoucherControllers {

    async getResumoDetalheVoucher(req, res) {
        let { numeroVoucher, dataPesquisaInicio, dataPesquisaFim } = req.query;

        numeroVoucher = numeroVoucher ? numeroVoucher : ''
        dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : ''
        dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : ''

        try {
            const apiUrl = `${url}/api/resumo-voucher/detalhe-voucher.xsjs?id=${numeroVoucher}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getListaVoucherGerencia(req, res) {
        let { idVoucher, dataPesquisaInicio, dataPesquisaFim, page, pageSize } = req.query;

        if (idVoucher) {

            try {
                idVoucher = idVoucher ? idVoucher : ''
                dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : ''
                dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : ''
                page = page ? page : ''
                pageSize = pageSize ? pageSize : ''
                const apiUrl = `${url}/api/resumo-voucher/detalhe-voucher.xsjs?id=${idVoucher}`
                const response = await axios.get(apiUrl)

                if (response.data && response.data.error) {
                    return res.status(400).json({ error: response.data.error });
                }
                return res.json(response.data);
            } catch (error) {
                console.error("Erro no ResumoVoucherControllers.getListaVoucherGerencia:", error);
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

            const apiUrl = `${url}/api/resumo-voucher/detalhe-voucher-dados.xsjs?id=${idVoucher}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&dadosVoucher=${dadosVoucher}&subgrupoEmpresa=${idSubGrupoEmpresa}&idEmpresa=${idEmpresa}&stStatus=${stStatus}&page=${page}&pageSize=${pageSize}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Error in ResumoVoucherControllers.getListaDetalheVoucherDados:", error);
            throw error;
        }
    }

    async getListaVoucherCompleto(req, res) {
        let { idVoucher, numeroVoucher, idSubGrupoEmpresa, idEmpresa, dataPesquisaInicio, dataPesquisaFim, dadosVoucher, stStatus, page, pageSize } = req.query;

        idVoucher = idVoucher ? idVoucher : ''
        numeroVoucher = numeroVoucher ? numeroVoucher : ''
        idSubGrupoEmpresa = idSubGrupoEmpresa ? idSubGrupoEmpresa : ''
        idEmpresa = idEmpresa ? idEmpresa : ''
        dataPesquisaInicio = dataPesquisaInicio ? dataPesquisaInicio : ''
        dataPesquisaFim = dataPesquisaFim ? dataPesquisaFim : ''
        dadosVoucher = dadosVoucher ? dadosVoucher : ''
        stStatus = stStatus ? stStatus : ''
        page = page ? page : ''
        pageSize = pageSize ? pageSize : ''
        try {
            const apiUrl = `${url}/api/administrativo/voucher-completo.xsjs?id=${idVoucher}&dataPesquisaInicio=${dataPesquisaInicio}&dataPesquisaFim=${dataPesquisaFim}&dadosVoucher=${dadosVoucher}&subgrupoEmpresa=${idSubGrupoEmpresa}&idEmpresa=${idEmpresa}&stStatus=${stStatus}&page=${page}&pageSize=${pageSize}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("erro no ResumoVoucherControllers getListaVouchercOMPLETO:", error);
            throw error;
        }
    }

    async getListaEmpresasVoucher(req, res) {
        let { idEmpresa, idSubGrupoEmpresa, page, pageSize } = req.query;

        idEmpresa = idEmpresa ? idEmpresa : '';
        idSubGrupoEmpresa = idSubGrupoEmpresa ? idSubGrupoEmpresa : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {
            const apiUrl = `${url}/api/resumo-voucher/empresa.xsjs?idEmpresa=${idEmpresa}&idSubGrupoEmpresa=${idSubGrupoEmpresa}&page=${page}&pageSize=${pageSize}`;
            const response = await axios.get(apiUrl);

            return res.json(response.data); // Retorna
        } catch (error) {
            console.error("Error in ResumoVoucherControllers.getListaEmpresasVoucher:", error);
            throw error;

        }
    }

    async getDetalheNumeroVoucherDados(req, res) {
        let { numeroVoucher, idSubGrupoEmpresa } = req.query;

        if (!isNaN(numeroVoucher)) {

            idSubGrupoEmpresa = ''
            try {
                const apiUrl = `${url}/api/resumo-voucher/detalhe-voucher-dados.xsjs?dadosVoucher=${numeroVoucher}&subgrupoEmpresa=${idSubGrupoEmpresa}`
                const response = await axios.get(apiUrl)

                return res.json(response.data);
            } catch (error) {
                console.error("Unable to connect to the database:", error)
                throw error;
            }
        }
    }

    async getDetalheIDVoucherDados(req, res) {
        let { idVoucher, idSubGrupoEmpresa } = req.query;

        idVoucher = idVoucher ? idVoucher : ''
        idSubGrupoEmpresa = idSubGrupoEmpresa ? idSubGrupoEmpresa : ''
        try {

            const apiUrl = `${url}/api/resumo-voucher/detalhe-voucher-dados.xsjs?id=${idVoucher}&subgrupoEmpresa=${idSubGrupoEmpresa}`
            const response = await axios.get(apiUrl)

            return res.json(response.data);
        } catch (error) {
            console.error("Unable to connect to the database:", error);
            throw error;
        }
    }

    async getDetalheIDVoucherDadosModal(req, res) {
        let { idVoucher } = req.query;

        if (!isNaN(idVoucher)) {
            idVoucher = Number(idVoucher)

            try {
                const apiUrl = `${url}/api/resumo-voucher/detalhe-voucher-dados.xsjs?id=${idVoucher}`
                const response = await axios.get(apiUrl)

                return res.json(response.data);
            } catch (error) {
                console.error("Unable to connect to the database:", error);
                throw error;
            }
        }
    }

    async getListaTodosClientes(req, res) {
        let { idCliente, numeroCpfCnpj, pageSize, page } = req.query;

        idCliente = idCliente ? idCliente : '';
        numeroCpfCnpj = numeroCpfCnpj ? numeroCpfCnpj : '';
        page = page ? page : '';
        pageSize = pageSize ? pageSize : '';

        try {
            const apiUrl = `${url}/api/gerencia/cliente.xsjs?id=${idCliente}&numeroCpfCnpj=${numeroCpfCnpj}&page=${page}&pageSize=${pageSize}`
            const response = await axios.get(apiUrl);


            return res.json(response.data);
        } catch (error) {
            console.error("erro no ResumoVoucherControllers getListaTodosClientes:", error);
            throw error;
        }
    }

    async autorizacaoEditarStatusVoucher(req, res) {
        try {
            const { error, value } = criarAutorizacaoEditarVoucherSchema.validate(req.body, {

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

            const response = await resumoVoucherService.createAtorizacaoEditarVoucher(
                value.MATRICULA,
                value.SENHA
            );

            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro no ResumoVoucherControllers.autorizacaoEditarStatusVoucher:', error);
            return res.status(500).json({ message: 'Erro ResumoVoucherControllers.autorizacaoEditarStatusVoucher' });

        }
    }

    /*     async autorizacaoEditarStatusVoucher(req, res) {
            let {
                MATRICULA,
                SENHA
            } = req.body;
    
            try {
                const response = await axios.post(`${url}/api/resumo-voucher/autFuncionario.xsjs`, {
                    MATRICULA,
                    SENHA
                })
    
                return res.status(200).json({ message: 'Usuário autorizado com sucesso!' })
            } catch (error) {
                console.error("Erro Verifique os campos do formulário:", error);
                throw error;
            }
        } */

    async postAuthFuncionarioCreateVoucher(req, res) {
        try {
            const { error, value } = schemaListaAjusteExtrato.validate(req.body, {

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

            const response = await resumoVoucherService.createAuthFuncionarioCreateVoucher(
                value.MATRICULA,
                value.SENHA,
                value.IDEMPRESALOGADA,
                value.IDGRUPOEMPRESARIAL,
                value.IDVENDA,
                value.STTIPOTROCA
            );

            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro no ExtratosControllers.postListaAjusteExtrato:', error);
            return res.status(500).json({ message: 'Erro ExtratosControllers.postListaAjusteExtrato' });
        }
    }


    /*     async postAuthFuncionarioCreateVoucher(req, res) {
            try {
                let { MATRICULA, SENHA, IDEMPRESALOGADA, IDGRUPOEMPRESARIAL, IDVENDA, STTIPOTROCA } = req.body;
                const response = await axios.post(`${url}/api/resumo-voucher/auth-funcionario-create-voucher.xsjs`, {
                    MATRICULA,
                    SENHA,
                    IDEMPRESALOGADA,
                    IDGRUPOEMPRESARIAL,
                    IDVENDA,
                    STTIPOTROCA
                })
    
                return res.json(response.data);
            } catch (error) {
                console.error("Error no ResumoVoucherControllers.postAuthFuncionarioCreateVoucher:", error);
                throw error;
            }
        } */

    async postAuthFuncionarioPrintVoucher(req, res) {
        try {
            const { error, value } = createAuthFuncionarioPrintVoucherSchema.validate(req.body, {

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

            const response = await resumoVoucherService.createAuthFuncionarioPrintVoucher(
                value.MATRICULA,
                value.SENHA,
                value.IDEMPRESALOGADA,
                value.IDGRUPOEMPRESARIAL,
                value.IDVOUCHER
            );

            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro no ResumoVoucherControllers.postAuthFuncionarioPrintVoucher:', error);
            return res.status(500).json({ message: 'Erro ResumoVoucherControllers.postAuthFuncionarioPrintVoucher' });
        }
    }

    /*     async postAuthFuncionarioPrintVoucher(req, res) {

            try {
                let { MATRICULA, SENHA, IDEMPRESALOGADA, IDGRUPOEMPRESARIAL, IDVOUCHER } = req.body;
                // const response = await createAuthFuncionarioUpdateVoucher(dados)
                if (!MATRICULA || !SENHA || !IDEMPRESALOGADA || !IDGRUPOEMPRESARIAL || !IDVOUCHER) {
                    return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
                }
                // const response = await createAuthFuncionarioPrintVoucher(dados)
                const response = await axios.post(`${url}/api/resumo-voucher/auth-funcionario-print-voucher.xsjs`, {
                    MATRICULA,
                    SENHA,
                    IDEMPRESALOGADA,
                    IDGRUPOEMPRESARIAL,
                    IDVOUCHER
                })
    
                return res.json(response.data);
            } catch (error) {
                console.error("Error no ResumoVoucherControllers.postAuthFuncionarioPrintVoucher:", error);
                throw error;
            }
        }
     */

    async postAuthFuncionarioUpdateVoucher(req, res) {
        try {
            const { error, value } = createAuthFuncionarioPrintVoucherSchema.validate(req.body, {

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

            const response = await resumoVoucherService.createAuthFuncionarioPrintVoucher(
                value.MATRICULA,
                value.SENHA,
                value.IDEMPRESALOGADA,
                value.IDGRUPOEMPRESARIAL,
                value.IDVOUCHER
            );

            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro no ResumoVoucherControllers.postAuthFuncionarioPrintVoucher:', error);
            return res.status(500).json({ message: 'Erro ResumoVoucherControllers.postAuthFuncionarioPrintVoucher' });
        }
    }

    /*  async postAuthFuncionarioUpdateVoucher(req, res) {
         try {
             let { MATRICULA, SENHA, IDEMPRESALOGADA, IDGRUPOEMPRESARIAL, IDVOUCHER } = req.body;
             if (!MATRICULA || !SENHA || !IDEMPRESALOGADA || !IDGRUPOEMPRESARIAL || !IDVOUCHER) {
                 return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
             }
             const response = await axios.post(`${url}/api/resumo-voucher/auth-funcionario-update-voucher.xsjs`, {
                 MATRICULA,
                 SENHA,
                 IDEMPRESALOGADA,
                 IDGRUPOEMPRESARIAL,
                 IDVOUCHER
             });
             return res.json(response.data);
         } catch (error) {
             console.error("Error no ResumoVoucherControllers.postAuthFuncionarioUpdateVoucher:", error);
             // Retorna mensagem de erro mas não lança exceção, permitindo que a API continue rodando normalmente
             return res.status(500).json({
                 error: error.response?.data || null
             });
         }
     } */

    async putCliente(req, res) {
        try {
            const { error, value } = updateClienteSchema.validate(req.body, {

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

            const response = await resumoVoucherService.createAuthFuncionarioPrintVoucher(
                value.IDCLIENTE,
                value.IDEMPRESA,
                value.DSNOMERAZAOSOCIAL,
                value.DSAPELIDONOMEFANTASIA,
                value.TPCLIENTE,
                value.NUCPFCNPJ,
                value.NURGINSCESTADUAL,
                value.NUINSCMUNICIPAL,
                value.NUCEP,
                value.NUIBGE,
                value.EENDERECO,
                value.NUENDERECO,
                value.ECOMPLEMENTO,
                value.EBAIRRO,
                value.ECIDADE,
                value.SGUF,
                value.EEMAIL,
                value.NUTELCOMERCIAL,
                value.NUTELCELULAR,
                value.DTNASCFUNDACAO,
                value.IDINDICACAOIE,
                value.DSINDICACAOIE,
                value.IDFUNCIONARIO
            );

            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro no ResumoVoucherControllers.putCliente', error);
            return res.status(500).json({ message: 'Erro ResumoVoucherControllers.putCliente' });
        }
    }

    /*  async putCliente(req, res) {
         try {
             let {
                 IDCLIENTE,
                 IDEMPRESA,
                 DSNOMERAZAOSOCIAL,
                 DSAPELIDONOMEFANTASIA,
                 TPCLIENTE,
                 NUCPFCNPJ,
                 NURGINSCESTADUAL,
                 NUINSCMUNICIPAL,
                 NUCEP,
                 NUIBGE,
                 EENDERECO,
                 NUENDERECO,
                 ECOMPLEMENTO,
                 EBAIRRO,
                 ECIDADE,
                 SGUF,
                 EEMAIL,
                 NUTELCOMERCIAL,
                 NUTELCELULAR,
                 DTNASCFUNDACAO,
                 IDINDICACAOIE,
                 DSINDICACAOIE,
                 IDFUNCIONARIO
             } = req.body
 
             if (!IDCLIENTE) {
                 return res.status(400).json({ error: 'IDCLIENTE é obrigatório.' });
             }
 
             if (!IDFUNCIONARIO) {
                 return res.status(400).json({ error: 'IDFUNCIONARIO é obrigatório.' });
             }
 
             if (!NUCPFCNPJ) {
                 return res.status(400).json({ error: 'NUCPFCNPJ é obrigatório.' });
             }
 
             const response = await axios.put(`${url}/api/gerencia/cliente.xsjs`, {
                 IDCLIENTE,
                 IDEMPRESA,
                 DSNOMERAZAOSOCIAL,
                 DSAPELIDONOMEFANTASIA,
                 TPCLIENTE,
                 NUCPFCNPJ,
                 NURGINSCESTADUAL,
                 NUINSCMUNICIPAL,
                 NUCEP,
                 NUIBGE,
                 EENDERECO,
                 NUENDERECO,
                 ECOMPLEMENTO,
                 EBAIRRO,
                 ECIDADE,
                 SGUF,
                 EEMAIL,
                 NUTELCOMERCIAL,
                 NUTELCELULAR,
                 DTNASCFUNDACAO,
                 IDINDICACAOIE,
                 DSINDICACAOIE,
                 IDFUNCIONARIO
             });
 
             return res.status(200).json({ message: 'Cliente atualizado com sucesso!' });
 
         } catch (error) {
             console.error("Erro no ResumoVoucherControllers.putCliente:", error);
             return res.status(400).json({ error: error.message });
         }
     }
  */

    async postCliente(req, res) {
        try {
            const { error, value } = updateClienteSchema.validate(req.body, {

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

            const response = await resumoVoucherService.createAuthFuncionarioPrintVoucher(
                value.IDCLIENTE,
                value.IDEMPRESA,
                value.DSNOMERAZAOSOCIAL,
                value.DSAPELIDONOMEFANTASIA,
                value.TPCLIENTE,
                value.NUCPFCNPJ,
                value.NURGINSCESTADUAL,
                value.NUINSCMUNICIPAL,
                value.NUCEP,
                value.NUIBGE,
                value.EENDERECO,
                value.NUENDERECO,
                value.ECOMPLEMENTO,
                value.EBAIRRO,
                value.ECIDADE,
                value.SGUF,
                value.EEMAIL,
                value.NUTELCOMERCIAL,
                value.NUTELCELULAR,
                value.DTNASCFUNDACAO,
                value.IDINDICACAOIE,
                value.DSINDICACAOIE,
                value.IDFUNCIONARIO
            );

            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro no ResumoVoucherControllers.postCliente', error);
            return res.status(500).json({ message: 'Erro ResumoVoucherControllers.postCliente' });
        }
    }

    /*     async postCliente(req, res) {
            try {
    
                let {
                    IDCLIENTE,
                    IDEMPRESA,
                    DSNOMERAZAOSOCIAL,
                    DSAPELIDONOMEFANTASIA,
                    TPCLIENTE,
                    NUCPFCNPJ,
                    NURGINSCESTADUAL,
                    NUINSCMUNICIPAL,
                    NUCEP,
                    NUIBGE,
                    EENDERECO,
                    NUENDERECO,
                    ECOMPLEMENTO,
                    EBAIRRO,
                    ECIDADE,
                    SGUF,
                    EEMAIL,
                    NUTELCOMERCIAL,
                    NUTELCELULAR,
                    DTNASCFUNDACAO,
                    IDINDICACAOIE,
                    DSINDICACAOIE,
                    IDFUNCIONARIO
                } = req.body
    
                // const response = await createCliente(dados);
    
                // if(!IDCLIENTE) {
                //     return res.status(400).json({ error: 'IDCLIENTE é obrigatório.' });
                // }   
    
                // if(!IDFUNCIONARIO) {
                //     return res.status(400).json({ error: 'IDFUNCIONARIO é obrigatório.' });
                // }
    
                if (!NUCPFCNPJ) {
                    return res.status(400).json({ error: 'NUCPFCNPJ é obrigatório.' });
                }
    
                const response = await axios.post(`${url}/api/gerencia/cliente.xsjs`, {
                    IDEMPRESA,
                    DSNOMERAZAOSOCIAL,
                    DSAPELIDONOMEFANTASIA,
                    TPCLIENTE,
                    NUCPFCNPJ,
                    NURGINSCESTADUAL,
                    NUINSCMUNICIPAL,
                    NUCEP,
                    NUIBGE,
                    EENDERECO,
                    NUENDERECO,
                    ECOMPLEMENTO,
                    EBAIRRO,
                    ECIDADE,
                    SGUF,
                    EEMAIL,
                    NUTELCOMERCIAL,
                    NUTELCELULAR,
                    DTNASCFUNDACAO,
                    IDINDICACAOIE,
                    DSINDICACAOIE,
                    IDFUNCIONARIO
                });
    
                return res.status(200).json(response.data);
            } catch (error) {
                console.error("Erro no ResumoVoucherControllers.postCliente:", error);
                return res.status(400).json({ error: error.message });
            }
        } */

    async postResumoVoucher(req, res) {
        try {
            const { error, value } = createResumoVoucherSchema.validate(req.body, {

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

            const response = await resumoVoucherService.createResumoVoucher(
                value.IDGRUPOEMPRESARIAL,
                value.IDEMPRESAORIGEM,
                value.IDCAIXAORIGEM,
                value.IDNFEDEVOLUCAO,
                value.IDUSRINVOUCHER,
                value.IDVENDEDOR,
                value.IDCLIENTE,
                value.NUCPF,
                value.VRVOUCHER,
                value.IDRESUMOVENDAWEB,
                value.STTIPOTROCA,
                value.MOTIVOTROCA,
                value.IDUSRLIBERACAOCRIACAO,
                value.detVoucher,
                value.produtosVoucher
            );

            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro no ResumoVoucherControllers.postCliente', error);
            return res.status(500).json({ message: 'Erro ResumoVoucherControllers.postCliente' });
        }
    }

    /*     async postResumoVoucher(req, res) {
            try {
                let {
                    IDGRUPOEMPRESARIAL,
                    IDEMPRESAORIGEM,
                    IDCAIXAORIGEM,
                    IDNFEDEVOLUCAO,
                    IDUSRINVOUCHER,
                    IDVENDEDOR,
                    IDCLIENTE,
                    NUCPF,
                    VRVOUCHER,
                    IDRESUMOVENDAWEB,
                    STTIPOTROCA,
                    MOTIVOTROCA,
                    IDUSRLIBERACAOCRIACAO,
                    detVoucher,
                    produtosVoucher
                } = req.body;
    
    
                const response = await axios.post(`${url}/api/resumo-voucher/todos-web.xsjs`, {
                    IDGRUPOEMPRESARIAL,
                    IDEMPRESAORIGEM,
                    IDCAIXAORIGEM,
                    IDNFEDEVOLUCAO,
                    IDUSRINVOUCHER,
                    IDVENDEDOR,
                    IDCLIENTE,
                    NUCPF,
                    VRVOUCHER,
                    IDRESUMOVENDAWEB,
                    STTIPOTROCA,
                    MOTIVOTROCA,
                    IDUSRLIBERACAOCRIACAO,
                    detVoucher,
                    produtosVoucher
                });
                console.log(response.data);
                return res.status(200).json(response.data);
            } catch (error) {
                console.error("Erro no ResumoVoucherControllers.postResumoVoucher:", error);
                return res.status(400).json({ error: error.message });
            }
        } */


    async putResumoVoucher(req, res) {
        try {
            const { error, value } = updateResumoVoucherSchema.validate(req.body, {

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

            const response = await resumoVoucherService.updateResumoVoucher(
                value.STATIVO,
                value.STCANCELADO,
                value.DSMOTIVOTROCASTATUS,
                value.IDFUNCIONARIO,
                value.STSTATUS,
                value.STTIPOTROCA,
                value.IDVOUCHER,
                value.IDEMPRESALOGADA,
                value.IDGRUPOEMPRESARIAL
            );

            return res.status(200).json(response);
        } catch (error) {
            console.log('Erro no ResumoVoucherControllers.putResumoVoucher', error);
            return res.status(500).json({ message: 'Erro ResumoVoucherControllers.putResumoVoucher' });
        }
    }

    /*  async putResumoVoucher(req, res) {
         try {
 
             let { STATIVO, STCANCELADO, DSMOTIVOTROCASTATUS, IDFUNCIONARIO, STSTATUS, STTIPOTROCA, IDVOUCHER, IDEMPRESALOGADA, IDGRUPOEMPRESARIAL } = req.body;
 
             // const response = await updateResumoVoucher(dados);
 
             // if(!IDVOUCHER) {
             //     return res.status(400).json({ error: 'IDVOUCHER é obrigatório.' });
             // }
 
             // if(!IDEMPRESALOGADA) {
             //     return res.status(400).json({ error: 'IDEMPRESALOGADA é obrigatório.' });
             // }
 
             // if(!IDFUNCIONARIO) {
             //     return res.status(400).json({ error: 'IDFUNCIONARIO é obrigatório.' });
             // }
 
             const response = await axios.put(`${url}/api/resumo-voucher/todos-web.xsjs`, {
                 STATIVO,
                 STCANCELADO,
                 DSMOTIVOTROCASTATUS,
                 IDFUNCIONARIO,
                 STSTATUS,
                 STTIPOTROCA,
                 IDVOUCHER,
                 IDEMPRESALOGADA,
                 IDGRUPOEMPRESARIAL
             })
 
             return res.status(200).json(response.data);
         } catch (error) {
             console.error("Erro no ResumoVoucherControllers.putResumoVoucher:", error);
             return res.status(400).json({ error: error.message });
         }
     } */
}


export default new ResumoVoucherControllers();
