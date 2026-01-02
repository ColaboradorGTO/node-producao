import Joi from "joi";

const updateFaturaSchema = Joi.object({
    NUCODAUTORIZACAO: Joi.string().allow("")
    .messages({
        "string.base": "NUCODAUTORIZACAO deve ser uma string"
    }),
    VRRECEBIDO: Joi.number().allow()
    .messages({
        "number.base": "VRRECEBIDO deve ser um número"
    }),
    STCANCELADO: Joi.string().allow("")
    .messages({
        "string.base": "STCANCELADO deve ser uma string"
    }),
    STPIX: Joi.string().allow("")
    .messages({
        "number.base": "STPIX deve ser uma string"
    }),
    NUAUTORIZACAO: Joi.string().allow("")
    .messages({
        "string.base": "NUAUTORIZACAO deve ser uma string"
    }),
    IDDETALHEFATURA: Joi.number().required()
    .messages({
        "number.base": "IDDETALHEFATURA deve ser um número",
        "any.required": "O campo IDDETALHEFATURA é obrigatório"
    })
});

export default updateFaturaSchema;
