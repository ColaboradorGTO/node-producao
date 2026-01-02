import Joi from "joi";

const criarAutorizacaoEditarVoucherSchema = Joi.object({
    MATRICULA: Joi.string().required()
    .messages({
        "string.base": "MATRICULA deve ser um número",
        "any.required": "O campo MATRICULA é obrigatório"
    }),
    SENHA: Joi.string().allow()
    .messages({
        "string.base": "SENHA deve ser um número",
        "any.required": "O campo SENHA é obrigatório"
    }),
});

export default criarAutorizacaoEditarVoucherSchema;
                