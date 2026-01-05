import Joi from "joi";

const updateResumoVoucherSchema = Joi.object({
    IDVOUCHER: Joi.number().required()
        .messages({
            "number.base": "IDVOUCHER deve ser um número",
            "any.required": "O campo IDVOUCHER é obrigatório"
        }),

    IDGRUPOEMPRESARIAL: Joi.number().required()
        .messages({
            "number.base": "IDGRUPOEMPRESARIAL deve ser um número",
            "any.required": "O campo IDGRUPOEMPRESARIAL é obrigatório"
        }),

    IDEMPRESALOGADA: Joi.number().required()
        .messages({
            "number.base": "IDEMPRESALOGADA deve ser um número",
            "any.required": "O campo IDEMPRESALOGADA é obrigatório"
        }),

    IDFUNCIONARIO: Joi.number().required()
        .messages({
            "number.base": "IDFUNCIONARIO deve ser um número",
            "any.required": "O campo IDFUNCIONARIO é obrigatório"
        }),

    STSTATUS: Joi.string()
        .valid(
            "NOVO",
            "EM ANALISE",
            "LIBERADO PARA O CLIENTE",
            "FINALIZADO",
            "CANCELADO",
            "NEGADO"
        )
        .required()
        .messages({
            "any.only": "STSTATUS possui valor inválido",
            "any.required": "O campo STSTATUS é obrigatório"
        }),

    STTIPOTROCA: Joi.string()
        .valid("DEFEITO", "DESISTENCIA", "TAMANHO", "OUTRO")
        .required()
        .messages({
            "any.only": "STTIPOTROCA possui valor inválido",
            "any.required": "O campo STTIPOTROCA é obrigatório"
        }),

    DSMOTIVOTROCASTATUS: Joi.string()
        .max(255)
        .allow(null)
        .messages({
            "string.max": "DSMOTIVOTROCASTATUS deve ter no máximo 255 caracteres"
        }),

    STATIVO: Joi.string()
        .valid("True", "False")
        .required()
        .messages({
            "any.only": "STATIVO deve ser 'True' ou 'False'",
            "any.required": "O campo STATIVO é obrigatório"
        }),

    STCANCELADO: Joi.string()
        .valid("True", "False")
        .required()
        .messages({
            "any.only": "STCANCELADO deve ser 'True' ou 'False'",
            "any.required": "O campo STCANCELADO é obrigatório"
        })
});

export default updateResumoVoucherSchema;