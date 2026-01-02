import Joi from "joi";

const createResumoVoucherSchema = Joi.object({
    IDGRUPOEMPRESARIAL: Joi.string().allow()
        .messages({
            "string.base": "IDGRUPOEMPRESARIAL deve ser um número",
        }),
    IDEMPRESAORIGEM: Joi.string().allow()
        .messages({
            "string.base": "IDEMPRESAORIGEM deve ser um número",
        }),
    IDCAIXAORIGEM: Joi.string().allow()
        .messages({
            "string.base": "IDCAIXAORIGEM deve ser um número",
        }),
    IDNFEDEVOLUCAO: Joi.string().allow()
        .messages({
            "string.base": "IDNFEDEVOLUCAO deve ser um número",
        }),
    IDUSRINVOUCHER: Joi.string().allow()
        .messages({
            "string.base": "IDUSRINVOUCHER deve ser um número",
        }),
    IDVENDEDOR: Joi.string().allow()
        .messages({
            "string.base": "IDVENDEDOR deve ser um número",
        }),
    IDCLIENTE: Joi.string().allow()
        .messages({
            "string.base": "IDCLIENTE deve ser um número",
        }),
    VRVOUCHER: Joi.string().allow()
        .messages({
            "string.base": "VRVOUCHER deve ser um número",
        }),
    IDRESUMOVENDAWEB: Joi.string().allow()
        .messages({
            "string.base": "IDRESUMOVENDAWEB deve ser um número",
        }),
    MOTIVOTROCA: Joi.string().allow()
        .messages({
            "string.base": "MOTIVOTROCA deve ser um número",
        }),
    IDUSRLIBERACAOCRIACAO: Joi.string().allow()
        .messages({
            "string.base": "IDUSRLIBERACAOCRIACAO deve ser um número",
        }),
    detVoucher: Joi.string().allow()
        .messages({
            "string.base": "detVoucher deve ser um número",
        }),
    produtosVoucher: Joi.string().allow()
        .messages({
            "string.base": "produtosVoucher deve ser um número",
        }),
});

export default createResumoVoucherSchema;
