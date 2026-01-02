import Joi from "joi";

const atualizarCampanhaClienteSchema = Joi.object({
    IDCAMPANHA: Joi.number().allow()
        .messages({
            "number.base": "IDCAMPANHA deve ser um número"
        }),
    NUCPFCNPJ: Joi.string().allow()
        .messages({
            "string.base": "NUCPFCNPJ deve ser uma string"
        }),
    EENDERECO: Joi.string().allow('')
        .messages({
            "string.base": "EENDERECO deve ser uma string"
        }),
    NUENDERECO: Joi.string().allow('')
        .messages({
            "string.base": "NUENDERECO deve ser uma string"
        }),
    ECOMPLEMENTO: Joi.string().allow('')
        .messages({
            "string.base": "ECOMPLEMENTO deve ser uma string"
        }),
    EBAIRRO: Joi.string().allow('')
        .messages({
            "string.base": "EBAIRRO deve ser uma string"
        }),
    ECIDADE: Joi.string().allow('')
        .messages({
            "string.base": "ECIDADE deve ser uma string"
        }),
    SGUF: Joi.string().allow('')
        .messages({
            "string.base": "SGUF deve ser uma string"
        }),
    NUCEP: Joi.string().allow('')
        .messages({
            "string.base": "NUCEP deve ser uma string"
        }),
    EEMAIL: Joi.string().allow('')
        .messages({
            "string.base": "EEMAIL deve ser uma string"
        }),
    NUTELEFONE: Joi.string().allow('')
        .messages({
            "string.base": "NUTELEFONE deve ser uma string"
        }),
    NOME: Joi.string().allow('')
        .messages({
            "string.base": "NOME deve ser uma string"
        }),
    ID: Joi.number().required()
        .messages({
            "numero.base": "ID deve ser um numero",
            "any.required": "ID é obrigatório"
        }),
});

export default atualizarCampanhaClienteSchema;