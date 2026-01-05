import Joi from "joi";

const criarAuthFuncionarioCreateVoucherSchema = Joi.object({
    MATRICULA: Joi.string().required()
        .messages({
            "string.base": "MATRICULA deve ser uma string",
            "any.required": "O campo MATRICULA é obrigatório"
        }),
    SENHA: Joi.string().required()
        .messages({
            "string.base": "SENHA deve ser uma string",
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
    IDVENDA: Joi.string().required()
        .messages({
            "string.base": "IDVENDA deve ser uma string",
            "any.required": "O campo IDVENDA é obrigatório"
        }),
    STTIPOTROCA: Joi.string().allow(null, "")
        .messages({
            "string.base": "STTIPOTROCA deve ser um número"
        }),
});

export default criarAuthFuncionarioCreateVoucherSchema;
