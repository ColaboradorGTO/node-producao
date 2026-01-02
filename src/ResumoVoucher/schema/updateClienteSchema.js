import Joi from "joi";

const updateClienteSchema = Joi.object({
    IDCLIENTE: Joi.string().required()
        .messages({
            "string.base": "MATRICULA deve ser um número",
            "any.required": "O campo MATRICULA é obrigatório"
        }),
    IDEMPRESA: Joi.string().allow()
        .messages({
            "string.base": "SENHA deve ser um número",
            "any.required": "O campo SENHA é obrigatório"
        }),
    DSNOMERAZAOSOCIAL: Joi.string().allow()
        .messages({
            "string.base": "SENHA deve ser um número",
            "any.required": "O campo SENHA é obrigatório"
        }),
    DSAPELIDONOMEFANTASIA: Joi.string().allow()
        .messages({
            "string.base": "SENHA deve ser um número",
            "any.required": "O campo SENHA é obrigatório"
        }),
    TPCLIENTE: Joi.string().allow()
        .messages({
            "string.base": "SENHA deve ser um número",
            "any.required": "O campo SENHA é obrigatório"
        }),
    NUCPFCNPJ: Joi.string().allow()
        .messages({
            "string.base": "SENHA deve ser um número",
            "any.required": "O campo SENHA é obrigatório"
        }),
    NURGINSCESTADUAL: Joi.string().allow()
        .messages({
            "string.base": "SENHA deve ser um número",
            "any.required": "O campo SENHA é obrigatório"
        }),
    NUINSCMUNICIPAL: Joi.string().allow()
        .messages({
            "string.base": "SENHA deve ser um número",
            "any.required": "O campo SENHA é obrigatório"
        }),
    NUCEP: Joi.string().allow()
        .messages({
            "string.base": "SENHA deve ser um número",
            "any.required": "O campo SENHA é obrigatório"
        }),
    NUIBGE: Joi.string().allow()
        .messages({
            "string.base": "SENHA deve ser um número",
            "any.required": "O campo SENHA é obrigatório"
        }),
    EENDERECO: Joi.string().allow()
        .messages({
            "string.base": "SENHA deve ser um número",
            "any.required": "O campo SENHA é obrigatório"
        }),
    NUENDERECO: Joi.string().allow()
        .messages({
            "string.base": "SENHA deve ser um número",
            "any.required": "O campo SENHA é obrigatório"
        }),
    ECOMPLEMENTO: Joi.string().allow()
        .messages({
            "string.base": "SENHA deve ser um número",
            "any.required": "O campo SENHA é obrigatório"
        }),
    EBAIRRO: Joi.string().allow()
        .messages({
            "string.base": "SENHA deve ser um número",
            "any.required": "O campo SENHA é obrigatório"
        }),
    ECIDADE: Joi.string().allow()
        .messages({
            "string.base": "SENHA deve ser um número",
            "any.required": "O campo SENHA é obrigatório"
        }),
    SGUF: Joi.string().allow()
        .messages({
            "string.base": "SENHA deve ser um número",
            "any.required": "O campo SENHA é obrigatório"
        }),
    EEMAIL: Joi.string().allow()
        .messages({
            "string.base": "SENHA deve ser um número",
            "any.required": "O campo SENHA é obrigatório"
        }),
    NUTELCOMERCIAL: Joi.string().allow()
        .messages({
            "string.base": "SENHA deve ser um número",
            "any.required": "O campo SENHA é obrigatório"
        }),
    NUTELCELULAR: Joi.string().allow()
        .messages({
            "string.base": "SENHA deve ser um número",
            "any.required": "O campo SENHA é obrigatório"
        }),
    DTNASCFUNDACAO: Joi.string().allow()
        .messages({
            "string.base": "SENHA deve ser um número",
            "any.required": "O campo SENHA é obrigatório"
        }),
    IDINDICACAOIE: Joi.string().allow()
        .messages({
            "string.base": "SENHA deve ser um número",
            "any.required": "O campo SENHA é obrigatório"
        }),
    DSINDICACAOIE: Joi.string().allow()
        .messages({
            "string.base": "SENHA deve ser um número",
            "any.required": "O campo SENHA é obrigatório"
        }),
    IDFUNCIONARIO: Joi.string().allow()
        .messages({
            "string.base": "SENHA deve ser um número",
            "any.required": "O campo SENHA é obrigatório"
        }),
});

export default updateClienteSchema;
