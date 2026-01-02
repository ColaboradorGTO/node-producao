import Joi from "joi";

const criarUnidadesMedidasSchema = Joi.object({

    DSUNIDADE: Joi.string().required()
        .messages({
            "string.base": "DSUNIDADE deve ser uma string",
            "any.required": "DSUNIDADE é obrigatório"
        }),
    DSSIGLA: Joi.string().required()
        .messages({
            "string.base": "DSSIGLA deve ser uma string",
            "any.required": "DSSIGLA é obrigatório"
        }),
    DTCADASTRO: Joi.string().allow()
        .messages({
            "number.base": "DTCADASTRO deve ser uma string"
        }),

    DTULTATUALIZACAO: Joi.string().allow()
        .messages({
            "number.base": "DTULTATUALIZACAO deve ser uma string"
        }),
    STATIVO: Joi.string().required()
        .messages({
            "string.base": "STATIVO deve ser uma string",
            "any.required": "STATIVO é obrigatório"
        }),
});

export default criarUnidadesMedidasSchema;
