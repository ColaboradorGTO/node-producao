import Joi from "joi";

const atualizarCoresSchema = Joi.object({
    IDCOR: Joi.number().required()
        .messages({
            "number.base": "IDCOR deve ser um número",
            "any.required": "IDCOR é obrigatório"
        }),
    IDGRUPOCOR: Joi.number().allow()
        .messages({
            "number.base": "IDGRUPOCOR deve ser um número"
        }),
    DSCOR: Joi.string().allow('')
        .messages({
            "string.base": "DSCOR deve ser uma string"
        }),
    STATIVO: Joi.string().allow('')
        .messages({
            "string.base": "STATIVO deve ser uma string"
        }),
});

export default atualizarCoresSchema;
