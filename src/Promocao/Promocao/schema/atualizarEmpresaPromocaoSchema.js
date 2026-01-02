import Joi from "joi";

const AtualizarEmpresaPromocaoSchema = Joi.object({
    IDRESUMOPROMOCAOMARKETING: Joi.number().required().messages({
        "any.required": "IDRESUMOPROMOCAOMARKETING é obrigatório",
        "number.base": "IDRESUMOPROMOCAOMARKETING deve ser um número"
    }),
    STATIVO: Joi.string().required().messages({
        "any.required": "STATIVO é obrigatório",
        "string.base": "STATIVO deve ser uma string"
    }),
    IDEMPRESA: Joi.number().required().messages({
        "any.required": "IDEMPRESA é obrigatório",
        "number.base": "IDEMPRESA deve ser um número"
    }),
    IDEMPRESAPROMOCAOMARKETING: Joi.number().allow(null).messages({
        "any.required": "IDEMPRESAPROMOCAOMARKETING é obrigatório",
        "number.base": "IDEMPRESAPROMOCAOMARKETING deve ser um número"
    }),
});

export default AtualizarEmpresaPromocaoSchema;
