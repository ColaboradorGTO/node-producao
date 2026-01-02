import Joi from "joi";

const detalheSchema = Joi.object({
    NUMEROCOLETOR: Joi.number().required()
        .messages({
            "number.base": "O campo NUMEROCOLETOR deve ser um número.",
            "any.required": "O campo NUMEROCOLETOR é obrigatório."
        }),
    IDPRODUTO: Joi.string().required()
        .messages({
            "string.base": "O campo IDPRODUTO deve ser uma string.",
            "any.required": "O campo IDPRODUTO é obrigatório."
        }),
    CODIGODEBARRAS: Joi.string().required()
        .messages({
            "string.base": "O campo CODIGODEBARRAS deve ser uma string.",
            "any.required": "O campo CODIGODEBARRAS é obrigatório."
        }),
    DSPRODUTO: Joi.string().required()
        .messages({
            "string.base": "O campo DSPRODUTO deve ser uma string.",
            "any.required": "O campo DSPRODUTO é obrigatório."
        }),
    TOTALCONTAGEMGERAL: Joi.number().required()
        .messages({
            "number.base": "O campo TOTALCONTAGEMGERAL deve ser um número.",
            "any.required": "O campo TOTALCONTAGEMGERAL é obrigatório."
        }),
    PRECOCUSTO: Joi.number().required()
        .messages({
            "number.base": "O campo PRECOCUSTO deve ser um número.",
            "any.required": "O campo PRECOCUSTO é obrigatório."
        }),
    PRECOVENDA: Joi.number().required()
        .messages({
            "number.base": "O campo PRECOVENDA deve ser um número.",
            "any.required": "O campo PRECOVENDA é obrigatório."
        })
});

const criarDetalheBalancoAvulsoSchema = Joi.object({
    INSBALANCO: Joi.number().valid(0, 1).required()
        .messages({
            "any.only": "O campo INSBALANCO deve ser 0 ou 1.",
            "any.required": "O campo INSBALANCO é obrigatório."
        }),

    IDEMPRESA: Joi.number().required()
        .messages({
            "number.base": "O campo IDEMPRESA deve ser um número.",
            "any.required": "O campo IDEMPRESA é obrigatório."
        }),

    DSRESUMOBALANCO: Joi.string()
        .messages({
            "string.base": "O campo DSRESUMOBALANCO deve ser uma string."
        }),

    DTABERTURA: Joi.string()
        .messages({
            "string.base": "O campo DTABERTURA deve ser uma string."
        }),

    DTFECHAMENTO: Joi.string().allow(null).allow("")
        .messages({
            "string.base": "O campo DTFECHAMENTO deve ser uma string."
        }),

    QTDTOTALITENS: Joi.number()
        .messages({
            "number.base": "O campo QTDTOTALITENS deve ser um número."
        }),

    QTDTOTALSOBRA: Joi.number()
        .messages({
            "number.base": "O campo QTDTOTALSOBRA deve ser um número."
        }),

    QTDTOTALFALTA: Joi.number()
        .messages({
            "number.base": "O campo QTDTOTALFALTA deve ser um número."
        }),

    TXTOBSERVACAO: Joi.string()
        .messages({
            "string.base": "O campo TXTOBSERVACAO deve ser uma string."
        }),

    STATIVO: Joi.string()
        .messages({
            "string.base": "O campo STATIVO deve ser uma string."
        }),

    det: Joi.when("INSBALANCO", {
        is: 1,
        then: Joi.array().items(detalheSchema).min(1).required()
            .messages({
                "array.base": "O campo det deve ser um array.",
                "array.min": "O array det deve conter ao menos 1 item.",
                "any.required": "O campo det é obrigatório quando INSBALANCO = 1."
            }),
        otherwise: Joi.forbidden()
    })
});

export default criarDetalheBalancoAvulsoSchema;
