import Joi from "joi";

const atualizarResumoOrdemTransferenciaSchema = Joi.object({
    IDSTDIVERGENCIA: Joi.number().allow()
        .messages({
            "number.base": "IDSTDIVERGENCIA deve ser um número"
        }),
    OBSDIVERGENCIA: Joi.string().allow()
        .messages({
            "string.base": "OBSDIVERGENCIA deve ser uma string"
        }),
    IDUSRAJUSTE: Joi.number().allow('')
        .messages({
            "numero.base": "IDUSRAJUSTE deve ser um numero"
        }),
    IDRESUMOOT: Joi.number().required()
        .messages({
            "number.base": "IDRESUMOOT deve ser um numero",
            "any.required": "IDRESUMOOT é obrigatório"
        }),
});

export default atualizarResumoOrdemTransferenciaSchema;

