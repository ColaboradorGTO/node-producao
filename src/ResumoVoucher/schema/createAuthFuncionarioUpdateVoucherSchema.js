import Joi from "joi";

const createAuthFuncionarioUpdateVoucherSchema = Joi.object({
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
    IDEMPRESALOGADA: Joi.number().required()
        .messages({
            "number.base": "IDEMPRESALOGADA deve ser um número",
            "any.required": "O campo IDEMPRESALOGADA é obrigatório"
        }),
    IDGRUPOEMPRESARIAL: Joi.number().required()
        .messages({
            "number.base": "IDGRUPOEMPRESARIAL deve ser um número",
            "any.required": "O campo IDGRUPOEMPRESARIAL é obrigatório"
        }),
    IDVOUCHER: Joi.number().required()
        .messages({
            "number.base": "IDVOUCHER deve ser um número",
            "any.required": "O campo IDVOUCHER é obrigatório"
        }),
});

export default createAuthFuncionarioUpdateVoucherSchema;
