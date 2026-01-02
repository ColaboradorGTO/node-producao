import Joi from "joi";

const updateDetalheFaturaLoja = Joi.object({
    STCANCELADO: Joi.string().allow("")
        .messages({
            "string.base": "STCANCELADO deve ser uma string"
        }),
    IDUSRCACELAMENTO: Joi.number().allow("")
        .messages({
            "number.base": "IDUSRCACELAMENTO deve ser um número"
        }),
    TXTMOTIVOCANCELAMENTO: Joi.string().allow()
        .messages({
            "string.base": "TXTMOTIVOCANCELAMENTO deve ser uma string"
        }),
    IDDETALHEFATURA: Joi.number().required()
        .messages({
            "number.base": "IDDETALHEFATURA deve ser um número",
            "any.required": "O campo IDDETALHEFATURA é obrigatório"
        }),
});

export default updateDetalheFaturaLoja;
