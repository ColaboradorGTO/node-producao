import Joi from "joi";

const criarCadastroTransportador = Joi.object({

    IDGRUPOEMPRESARIAL: Joi.number().allow()
        .messages({
            "number.base": "IDGRUPOEMPRESARIAL deve ser um número"
        }),
    IDSUBGRUPOEMPRESARIAL: Joi.number().allow()
        .messages({
            "number.base": "IDSUBGRUPOEMPRESARIAL deve ser um número"
        }),
    NORAZAOSOCIAL: Joi.string().allow()
        .messages({
            "string.base": "NORAZAOSOCIAL deve ser uma string"
        }),
    NOFANTASIA: Joi.string().allow()
        .messages({
            "string.base": "NOFANTASIA deve ser um número"
        }),
    NUCNPJ: Joi.string().allow()
        .messages({
            "string.base": "NUCNPJ deve ser uma string"
        }),
    NUINSCESTADUAL: Joi.string().allow()
        .messages({
            "string.base": "NUINSCESTADUAL deve ser uma string"
        }),
    NUINSCMUNICIPAL: Joi.string().allow(null, "")
        .messages({
            "string.base": "NUINSCMUNICIPAL deve ser uma string"
        }),
    NUIBGE: Joi.string().allow()
        .messages({
            "string.base": "NUIBGE ser uma string"
        }),
    EENDERECO: Joi.string().allow()
        .messages({
            "string.base": "EENDERECO deve ser uma string"
        }),
    ENUMERO: Joi.string().allow()
        .messages({
            "string.base": "ENUMERO deve ser uma string"
        }),
    ECOMPLEMENTO: Joi.string().allow()
        .messages({
            "string.base": "ECOMPLEMENTO deve ser uma string"
        }),
    EBAIRRO: Joi.string().allow()
        .messages({
            "string.base": "EBAIRRO dev ser uma string"
        }),
    ECIDADE: Joi.string().allow()
        .messages({
            "string.base": "ECIDADE deve ser uma string"
        }),
    SGUF: Joi.string().allow()
        .messages({
            "string.base": "SGUF deve ser uma string"
        }),
    NUCEP: Joi.string().allow()
        .messages({
            "string.base": "NUCEP deve ser uma string"
        }),
    EEMAIL: Joi.string().allow()
        .messages({
            "string.base": "EEMAI deve ser uma string"
        }),

    NUTELEFONE1: Joi.string().allow(null, "")
        .messages({
            "string.base": "NUTELEFONE1 ser uma string"
        }),
    NUTELEFONE2: Joi.string().allow(null, "")
        .messages({
            "string.base": "NUTELEFONE2 ser uma string"
        }),
    NUTELEFONE3: Joi.string().allow(null, "")
        .messages({
            "string.base": "NUTELEFONE3 ser uma string"
        }),

    NOREPRESENTANTE: Joi.string().allow(null, "")
        .messages({
            "string.base": "NOREPRESENTANTE ser uma string"
        }),
    DTCADASTRO: Joi.string().allow()
        .messages({
            "string.base": "DTCADASTRO ser uma string"
        }),
    DTULTATUALIZACAO: Joi.string().allow()
        .messages({
            "string.base": "DTULTATUALIZACAO ser uma string"
        }),
    STATIVO: Joi.string().allow()
        .messages({
            "string.base": "STATIVO ser uma string"
        }),
});

export default criarCadastroTransportador;

