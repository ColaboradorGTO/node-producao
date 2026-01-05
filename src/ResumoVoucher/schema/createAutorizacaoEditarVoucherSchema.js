import Joi from "joi";

const criarAutorizacaoEditarVoucherSchema = Joi.object({
    SENHA: Joi.string().required()
        .messages({
            "number.base": "SENHA deve ser uma string",
            "any.required": "O campo SENHA é obrigatório"
        }),

    MATRICULA: Joi.string().required()
        .messages({
            "number.base": "MATRICULA deve ser uma string",
            "any.required": "O campo MATRICULA é obrigatório"
        }),

});

export default criarAutorizacaoEditarVoucherSchema;