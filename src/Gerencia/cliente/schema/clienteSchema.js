import Joi from "joi";

const criarClienteSchema = Joi.object({
    IDEMPRESA: Joi.number().required()
        .messages({
            "any.required": "O IDEMPRESA do resumo da OT é obrigatório",
            "number.base": "O IDEMPRESA do resumo da OT deve ser um número"
        }),
    DSNOMERAZAOSOCIAL: Joi.string().required()
        .messages({
            "any.required": "O DSNOMERAZAOSOCIAL do resumo da OT é obrigatório",
            "string.base": "O DSNOMERAZAOSOCIAL da empresa de origem deve ser um número"
        }),
    DSAPELIDONOMEFANTASIA: Joi.string()
        .messages({
            "string.base": "O DSAPELIDONOMEFANTASIA da empresa de destino deve ser uma string"
        }),
    NUCPFCNPJ: Joi.string().allow('')
        .messages({
            "string.base": "A NUCPFCNPJ deve ser uma string"
        }),
    NURGINSCESTADUAL: Joi.string()
        .messages({
            "string.base": "O NURGINSCESTADUAL do operador de expedição deve ser um número"
        }),
    NUINSCMUNICIPAL: Joi.string()
        .messages({
            "string.base": "O NUINSCMUNICIPAL deve ser um número"
        }),
    NUINSCRICAOSUFRAMA: Joi.string()
        .messages({
            "string.base": "A NUINSCRICAOSUFRAMA deve ser um número"
        }),
    TPINDICADORINSCESTADUAL: Joi.string()
        .messages({
            "string.base": "A TPINDICADORINSCESTADUAL deve ser um número"
        }),
    STOPTANTESIMPLES: Joi.string()
        .messages({
            "string.base": "A STOPTANTESIMPLES deve ser um número"
        }),
    NUCEP: Joi.string()
        .messages({
            "string.base": "O NUCEP deve ser um número"
        }),
    NUIBGE: Joi.number()
        .messages({
            "number.base": "O NUIBGE deve ser um numero"
        }),
    EENDERECO: Joi.string()
        .messages({
            "string.base": "O EENDERECO deve ser uma string"
        }),
    NUENDERECO: Joi.string()
        .messages({
            "string.base": "O NUENDERECO deve ser uma string"
        }),
    ECOMPLEMENTO: Joi.string()
        .messages({
            "string.base": "O ECOMPLEMENTO deve ser uma string"
        }),
    EBAIRRO: Joi.string()
        .messages({
            "string.base": "A EBAIRRO deve ser uma string"
        }),
    ECIDADE: Joi.string()
        .messages({
            "string.base": "O ECIDADE deve ser uma string"
        }),
    SGUF: Joi.string()
        .messages({
            "string.base": "A SGUF deve ser uma string"
        }),
    EEMAIL: Joi.string()
        .messages({
            "string.base": "O EEMAIL do usuário de cancelamento deve ser uma string"
        }),
    NUTELCOMERCIAL: Joi.string()
        .messages({
            "string.base": "A NUTELCOMERCIAL deve ser uma string"
        }),
    NUTELCELULAR: Joi.string().allow()
        .messages({
            "string.base": "O NUTELCELULAR deve ser uma string"
        }),
    DTNASCFUNDACAO: Joi.string()
        .messages({
            "string.base": "A DTNASCFUNDACAO uma string"
        }),
    DSOBSERVACAO: Joi.string().allow('')
        .messages({
            "string.base": "A DSOBSERVACAO deve ser uma string"
        }),
    NOCONTATOCLIENTE01: Joi.string().allow('')
        .messages({
            "string.base": "O NOCONTATOCLIENTE01 deve ser uma string"
        }),
    EEMAILCONTATOCLIENTE01: Joi.string().allow('')
        .messages({
            "string.base": "A EEMAILCONTATOCLIENTE01 deve ser uma string"
        }),
    FONECONTATOCLIENTE01: Joi.string()
        .messages({
            "string.base": "A FONECONTATOCLIENTE01 deve ser uma string"
        }),

    DSCARGOCONTATOCLIENTE01: Joi.string()
        .messages({
            "string.base": "A DSCARGOCONTATOCLIENTE01 deve ser um número"
        }),

    NOCONTATOCLIENTE02: Joi.string().allow()
        .messages({
            "string.base": "NOCONTATOCLIENTE02 deve ser um número"
        }),

    EEMAILCONTATOCLIENTE02: Joi.string().allow()
        .messages({
            "string.base": "A quantidade de conferência deve ser uma string"
        }),

    FONECONTATOCLIENTE02: Joi.string().allow()
        .messages({
            "string.base": "FONECONTATOCLIENTE02 deve ser uma string"
        }),

    DSCARGOCONTATOCLIENTE02: Joi.string()
        .messages({
            "string.base": "A DSCARGOCONTATOCLIENTE02 deve ser uma string"
        }),

    STATIVO: Joi.string()
        .messages({
            "string.base": "A STATIVO deve ser uma string"
        }),
})

export default criarClienteSchema;