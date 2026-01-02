import Joi from "joi";

const atualizarUnidadesMedidasSchema = Joi.object({
    IDUNIDADEMEDIDA: Joi.number().required()
        .messages({
            "number.base": "IDUNIDADEMEDIDA deve ser um número",
            "any.required": "IDUNIDADEMEDIDA é obrigatório"
        }),
    DSUNIDADE: Joi.string().allow()
        .messages({
            "string.base": "DSUNIDADE deve ser uma string"
        }),
    DSSIGLA: Joi.string().allow()
        .messages({
            "string.base": "DSSIGLA deve ser uma string"
        }),
    DTULTATUALIZACAO: Joi.string().allow()
        .messages({
            "number.base": "DTULTATUALIZACAO deve ser uma string"
        }),
    STATIVO: Joi.string().allow()
        .messages({
            "string.base": "STATIVO deve ser uma string"
        }),
});

export default atualizarUnidadesMedidasSchema;
