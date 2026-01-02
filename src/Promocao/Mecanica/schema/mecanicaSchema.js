import Joi from "joi";

const criarMecanicaAtivaSchema = Joi.object({
    DESCRICAO: Joi.string().required()
        .messages({
            "any.required": "DESCRICAO é obrigatório",
            "string.base": "DESCRICAO deve ser uma string"
        }),

    APLICACAODESTINO: Joi.number().required()
        .messages({
            "any.required": "APLICACAODESTINO é obrigatório",
            "number.base": "APLICACAODESTINO deve ser um numero"
        }),
    MECANICA: Joi.number().required()
        .messages({
            "any.required": "MECANICA é obrigatório",
            "number.base": "MECANICA deve ser um numero"
        }),
    TIPODESCONTO: Joi.number().required()
        .messages({
            "any.required": "TIPODESCONTO é obrigatório",
            "number.base": "TIPODESCONTO deve ser um numero"
        }),
})

export default criarMecanicaAtivaSchema;