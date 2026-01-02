import Joi from "joi";

const atualizarCondicaoPagamentoSchema = Joi.object({
    IDCONDICAOPAGAMENTO: Joi.number().allow()
        .messages({
            "number.base": "IDCONDICAOPAGAMENTO deve ser um número"
        }),
    IDGRUPOEMPRESARIAL: Joi.number().allow()
        .messages({
            "number.base": "IDGRUPOEMPRESARIAL deve ser um número"
        }),
    DSCONDICAOPAG: Joi.string().allow('')
        .messages({
            "string.base": "DSCONDICAOPAG deve ser uma string"
        }),
    STPARCELADO: Joi.string().required()
        .messages({
            "any.required": "STPARCELADO é obrigatório",
            "string.base": "STPARCELADO deve ser um número"
        }),
    NUPARCELAS: Joi.number().allow()
        .messages({
            "number.base": "NUPARCELAS deve ser um número"
        }),
    NUNDIA1PAG: Joi.number().allow()
        .messages({
            "number.base": "NUNDIA1PAG deve ser um número"
        }),
    NUNDIA2PAG: Joi.number().allow()
        .messages({
            "number.base": "NUNDIA2PAG deve ser um número"
        }),
    NUNDIA3PAG: Joi.number().allow()
        .messages({
            "number.base": "NUNDIA3PAG deve ser um número"
        }),
    NUNDIA4PAG: Joi.number().allow()
        .messages({
            "number.base": "NUNDIA4PAG deve ser um número"
        }),
    NUNDIA5PAG: Joi.number().allow()
        .messages({
            "number.base": "NUNDIA5PAG deve ser um número"
        }),
    NUNDIA6PAG: Joi.number().allow()
        .messages({
            "number.base": "NUNDIA6PAG deve ser um número"
        }),
    NUNDIA7PAG: Joi.number().allow()
        .messages({
            "number.base": "NUNDIA7PAG deve ser um número"
        }),
    NUNDIA8PAG: Joi.number().allow()
        .messages({
            "number.base": "NUNDIA8PAG deve ser um número"
        }),
    NUNDIA9PAG: Joi.number().allow()
        .messages({
            "number.base": "NUNDIA9PAG deve ser um número"
        }),
    NUNDIA10PAG: Joi.number().allow()
        .messages({
            "number.base": "NUNDIA10PAG deve ser um número"
        }),
    NUNDIA11PAG: Joi.number().allow()
        .messages({
            "number.base": "NUNDIA11PAG deve ser um número"
        }),
    NUNDIA12PAG: Joi.number().allow()
        .messages({
            "number.base": "NUNDIA12PAG deve ser um número"
        }),
    DTULTALTERACAO: Joi.string().allow()
        .messages({
            "string.base": "DTULTALTERACAO deve ser uma string"
        }),
    QTDDIAS: Joi.number().allow()
        .messages({
            "number.base": "QTDDIAS deve ser um número"
        }),
    STATIVO: Joi.string().allow()
        .messages({
            "string.base": "STATIVO deve ser uma string"
        }),
    IDTPDOCUMENTO: Joi.number().allow()
        .messages({
            "number.base": "IDTPDOCUMENTO deve ser um número"
        }),
});

export default atualizarCondicaoPagamentoSchema;