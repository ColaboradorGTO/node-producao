import Joi from "joi";

const criarAuthFuncionarioCreateVoucherSchema = Joi.object({
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
    STTIPOTROCA: Joi.string().required()
        .messages({
            "string.base": "STTIPOTROCA deve ser um número",
            "any.required": "O campo STTIPOTROCA é obrigatório"
        }),
});

export default criarAuthFuncionarioCreateVoucherSchema;
