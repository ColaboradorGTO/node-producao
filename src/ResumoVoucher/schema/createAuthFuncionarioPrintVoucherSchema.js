import Joi from "joi";

const createAuthFuncionarioPrintVoucherSchema = Joi.object({
    MATRICULA: Joi.string().required()
        .messages({
            "string.base": "MATRICULA deve ser um número",
            "any.required": "O campo MATRICULA é obrigatório"
        }),
    SENHA: Joi.string().required()
        .messages({
            "string.base": "SENHA deve ser um número",
            "any.required": "O campo SENHA é obrigatório"
        }),
    IDEMPRESALOGADA: Joi.string().required()
        .messages({
            "string.base": "IDEMPRESALOGADA deve ser um número",
            "any.required": "O campo IDEMPRESALOGADA é obrigatório"
        }),
    IDGRUPOEMPRESARIAL: Joi.string().required()
        .messages({
            "string.base": "IDGRUPOEMPRESARIAL deve ser um número",
            "any.required": "O campo IDGRUPOEMPRESARIAL é obrigatório"
        }),
    IDVOUCHER: Joi.string().required()
        .messages({
            "string.base": "IDVOUCHER deve ser um número",
            "any.required": "O campo IDVOUCHER é obrigatório"
        }),
});

export default createAuthFuncionarioPrintVoucherSchema;
