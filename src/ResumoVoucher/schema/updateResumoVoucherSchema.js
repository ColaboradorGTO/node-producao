import Joi from "joi";

const updateResumoVoucherSchema = Joi.object({
    STATIVO: Joi.string().allow()
        .messages({
            "string.base": "STATIVO deve ser um número",
        }),
    STCANCELADO: Joi.string().allow()
        .messages({
            "string.base": "STCANCELADO deve ser um número",
        }),
    DSMOTIVOTROCASTATUS: Joi.string().allow()
        .messages({
            "string.base": "DSMOTIVOTROCASTATUS deve ser um número",
        }),
    IDFUNCIONARIO: Joi.string().allow()
        .messages({
            "string.base": "IDFUNCIONARIO deve ser um número",
        }),
    STSTATUS: Joi.string().allow()
        .messages({
            "string.base": "STSTATUS deve ser um número",
        }),
    STTIPOTROCA: Joi.string().allow()
        .messages({
            "string.base": "STTIPOTROCA deve ser um número",
        }),
    IDVOUCHER: Joi.string().allow()
        .messages({
            "string.base": "IDVOUCHER deve ser um número",
        }),
    IDEMPRESALOGADA: Joi.string().allow()
        .messages({
            "string.base": "IDEMPRESALOGADA deve ser um número",
        }),
    IDGRUPOEMPRESARIAL: Joi.string().allow()
        .messages({
            "string.base": "IDGRUPOEMPRESARIAL deve ser um número",
        }),
});
export default updateResumoVoucherSchema;
