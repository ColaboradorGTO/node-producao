import Joi from "joi";

const createStatusDivergenciaSchema = Joi.object({
    DESCRICAODIVERGENCIA: Joi.string().required()
        .messages({
            "string.base": "DESCRICAODIVERGENCIA deve ser um número",
            "any.required": "DESCRICAODIVERGENCIA é obrigatório"
        }),
    STATIVO: Joi.string().required()
        .messages({
            "string.base": "STATIVO deve ser uma string",
            "any.required": "STATIVO é obrigatório"
        }),
    IDUSRCRIACAO: Joi.number().required()
        .messages({
            "number.base": "IDUSRCRIACAO deve ser um numero",
            "any.required": "IDUSRCRIACAO é obrigatório"
        }),
});

export default createStatusDivergenciaSchema;