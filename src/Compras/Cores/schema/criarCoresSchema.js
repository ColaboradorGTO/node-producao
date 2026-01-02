import Joi from "joi";

const criarCoresSchema = Joi.object({
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

export default criarCoresSchema;
