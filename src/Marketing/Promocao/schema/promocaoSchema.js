import Joi from "joi";

const criarProdutoPromocaoSchema = Joi.object({
    DSPROMO: Joi.string().required()
        .messages({
            "string.base": "DSPROMO deve ser uma string",
            "any.required": "DSPROMO é obrigatório"
        }),

    VRPERCDESCONTO: Joi.number().allow(null)
        .messages({
            "number.base": "VRPERCDESCONTO deve ser um número"
        }),

    VRPRECODESCONTO: Joi.number().allow(null)
        .messages({
            "number.base": "VRPRECODESCONTO deve ser um número"
        }),

    VRAPARTIRDE: Joi.number().allow(null)
        .messages({
            "number.base": "VRAPARTIRDE deve ser um número"
        }),

    VRLIMITEDE: Joi.number().allow(null)
        .messages({
            "number.base": "VRLIMITEDE deve ser um número"
        }),

    QTDAPARTIRDE: Joi.number().integer().allow(null)
        .messages({
            "number.base": "QTDAPARTIRDE deve ser um número",
            "number.integer": "QTDAPARTIRDE deve ser um número inteiro"
        }),

    QTDLIMITEDE: Joi.number().integer().allow(null)
        .messages({
            "number.base": "QTDLIMITEDE deve ser um número",
            "number.integer": "QTDLIMITEDE deve ser um número inteiro"
        }),

    DTINICIOPROMO: Joi.string().isoDate().required()
        .messages({
            "string.base": "DTINICIOPROMO deve ser uma string",
            "string.isoDate": "DTINICIOPROMO deve estar no formato YYYY-MM-DD",
            "any.required": "DTINICIOPROMO é obrigatório"
        }),

    DTFIMPROMO: Joi.string().isoDate().required()
        .messages({
            "string.base": "DTFIMPROMO deve ser uma string",
            "string.isoDate": "DTFIMPROMO deve estar no formato YYYY-MM-DD",
            "any.required": "DTFIMPROMO é obrigatório"
        }),

    STATIVO: Joi.string().valid("True", "False").required()
        .messages({
            "string.base": "STATIVO deve ser uma string",
            "any.only": "STATIVO deve ser 'True' ou 'False'",
            "any.required": "STATIVO é obrigatório"
        }),

    IDGRUPO: Joi.number().integer().required()
        .messages({
            "number.base": "IDGRUPO deve ser um número",
            "number.integer": "IDGRUPO deve ser um número inteiro",
            "any.required": "IDGRUPO é obrigatório"
        }),

    PRODUTOS: Joi.array()
        .items(Joi.string().required())
        .min(1)
        .required()
        .messages({
            "array.base": "PRODUTOS deve ser um array",
            "array.min": "PRODUTOS deve conter ao menos um produto",
            "any.required": "PRODUTOS é obrigatório"
        }),

    EMPRESAS: Joi.array()
        .items(Joi.string().required())
        .min(1)
        .required()
        .messages({
            "array.base": "EMPRESAS deve ser um array",
            "array.min": "EMPRESAS deve conter ao menos uma empresa",
            "any.required": "EMPRESAS é obrigatório"
        })
});

export default criarProdutoPromocaoSchema;
