import Joi from "joi";

const createClienteSchema = Joi.object({

    IDEMPRESA: Joi.number().required()
        .messages({
            "number.base": "IDEMPRESA deve ser um número",
            "any.required": "O campo IDEMPRESA é obrigatório"
        }),
    DSNOMERAZAOSOCIAL: Joi.string().required()
        .messages({
            "string.base": "DSNOMERAZAOSOCIAL deve ser uma string",
            "any.required": "O campo DSNOMERAZAOSOCIAL é obrigatório"
        }),
    DSAPELIDONOMEFANTASIA: Joi.string().allow()
        .messages({
            "string.base": "DSAPELIDONOMEFANTASIA deve ser uma string",
            "any.required": "O campo DSAPELIDONOMEFANTASIA é obrigatório"
        }),
    TPCLIENTE: Joi.string().required()
        .messages({
            "string.base": "TPCLIENTE deve ser uma string",
            "any.required": "O campo TPCLIENTE é obrigatório"
        }),
    NUCPFCNPJ: Joi.string().required()
        .messages({
            "string.base": "NUCPFCNPJ deve ser uma string",
            "any.required": "O campo NUCPFCNPJ é obrigatório"
        }),
    NURGINSCESTADUAL: Joi.string().required()
        .messages({
            "string.base": "NURGINSCESTADUAL deve ser uma string",
            "any.required": "O campo NURGINSCESTADUAL é obrigatório"
        }),
    NUINSCMUNICIPAL: Joi.string().required()
        .messages({
            "string.base": "NUINSCMUNICIPAL deve ser uma string",
            "any.required": "O campo NUINSCMUNICIPAL é obrigatório"
        }),
    NUCEP: Joi.string().required()
        .messages({
            "string.base": "NUCEP deve ser uma string",
            "any.required": "O campo NUCEP é obrigatório"
        }),
    NUIBGE: Joi.number().required()
        .messages({
            "number.base": "NUIBGE deve ser um número",
            "any.required": "O campo NUIBGE é obrigatório"
        }),
    EENDERECO: Joi.string().required()
        .messages({
            "string.base": "EENDERECO deve ser uma string",
            "any.required": "O campo EENDERECO é obrigatório"
        }),
    NUENDERECO: Joi.string().required()
        .messages({
            "string.base": "NUENDERECO deve ser uma string",
            "any.required": "O campo NUENDERECO é obrigatório"
        }),
    ECOMPLEMENTO: Joi.string().required()
        .messages({
            "string.base": "ECOMPLEMENTO deve ser uma string",
            "any.required": "O campo ECOMPLEMENTO é obrigatório"
        }),
    EBAIRRO: Joi.string().required()
        .messages({
            "string.base": "EBAIRRO deve ser uma string",
            "any.required": "O campo EBAIRRO é obrigatório"
        }),
    ECIDADE: Joi.string().required()
        .messages({
            "string.base": "ECIDADE deve ser uma string",
            "any.required": "O campo ECIDADE é obrigatório"
        }),
    SGUF: Joi.string().required()
        .messages({
            "string.base": "SGUF deve ser uma string",
            "any.required": "O campo SGUF é obrigatório"
        }),
    EEMAIL: Joi.string().allow()
        .messages({
            "string.base": "EEMAIL deve ser uma string",
        }),
    NUTELCOMERCIAL: Joi.string().allow()
        .messages({
            "string.base": "NUTELCOMERCIAL deve ser uma string",
        }),
    NUTELCELULAR: Joi.string().allow()
        .messages({
            "string.base": "NUTELCELULAR deve ser uma string",
            "any.required": "O campo NUTELCELULAR é obrigatório"
        }),
    DTNASCFUNDACAO: Joi.string().allow()
        .messages({
            "string.base": "DTNASCFUNDACAO deve ser uma string",
            "any.required": "O campo DTNASCFUNDACAO é obrigatório"
        }),
    IDINDICACAOIE: Joi.number().allow()
        .messages({
            "number.base": "IDINDICACAOIE deve ser um número",
            "any.required": "O campo IDINDICACAOIE é obrigatório"
        }),
    DSINDICACAOIE: Joi.string().allow()
        .messages({
            "string.base": "DSINDICACAOIE deve ser uma string",
            "any.required": "O campo DSINDICACAOIE é obrigatório"
        }),
    IDFUNCIONARIO: Joi.number().allow()
        .messages({
            "number.base": "IDFUNCIONARIO deve ser um número",
            "any.required": "O campo IDFUNCIONARIO é obrigatório"
        })
});

export default createClienteSchema;
