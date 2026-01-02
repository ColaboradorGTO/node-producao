import Joi from "joi";

const atualizarStatusDivergenciaSchema = Joi.object({
    DESCRICAODIVERGENCIA: Joi.string().allow()
    .messages({
        "string.base": "DESCRICAODIVERGENCIA deve ser um número"
    }),
    STATIVO: Joi.string().allow()
    .messages({
        "string.base": "STATIVO deve ser uma string"
    }),
    IDSTATUSDIVERGENCIA: Joi.number().required()
    .messages({
        "number.base": "IDSTATUSDIVERGENCIA deve ser um numero",
        "any.required": "IDSTATUSDIVERGENCIA é obrigatório"
    }),

});

export default atualizarStatusDivergenciaSchema;