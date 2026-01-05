import Joi from "joi";

const createResumoVoucherSchema = Joi.object({
    IDGRUPOEMPRESARIAL: Joi.number().required()
        .messages({
            "number.base": "IDGRUPOEMPRESARIAL deve ser um número",
            "any.required": "O campo IDGRUPOEMPRESARIAL é obrigatório"
        }),

    IDEMPRESAORIGEM: Joi.number().required()
        .messages({
            "number.base": "IDEMPRESAORIGEM deve ser um número",
            "any.required": "O campo IDEMPRESAORIGEM é obrigatório"
        }),

    IDCAIXAORIGEM: Joi.number().required()
        .messages({
            "number.base": "IDCAIXAORIGEM deve ser um número",
            "any.required": "O campo IDCAIXAORIGEM é obrigatório"
        }),

    IDNFEDEVOLUCAO: Joi.number().allow(null)
        .messages({
            "number.base": "IDNFEDEVOLUCAO deve ser um número"
        }),

    IDUSRINVOUCHER: Joi.number().required()
        .messages({
            "number.base": "IDUSRINVOUCHER deve ser um número",
            "any.required": "O campo IDUSRINVOUCHER é obrigatório"
        }),

    IDVENDEDOR: Joi.number().required()
        .messages({
            "number.base": "IDVENDEDOR deve ser um número",
            "any.required": "O campo IDVENDEDOR é obrigatório"
        }),

    IDCLIENTE: Joi.number().required()
        .messages({
            "number.base": "IDCLIENTE deve ser um número",
            "any.required": "O campo IDCLIENTE é obrigatório"
        }),

    NUCPF: Joi.string()
        .min(11)
        .max(14)
        .required()
        .messages({
            "string.base": "NUCPF deve ser uma string numérica",
            "string.min": "NUCPF deve ter 11 ou 14 caracteres",
            "string.max": "NUCPF deve ter 11 ou 14 caracteres",
            "any.required": "O campo NUCPF é obrigatório"
        }),

    VRVOUCHER: Joi.number()
        .precision(2)
        .required()
        .messages({
            "number.base": "VRVOUCHER deve ser um número",
            "any.required": "O campo VRVOUCHER é obrigatório"
        }),

    IDRESUMOVENDAWEB: Joi.number().required()
        .messages({
            "number.base": "IDRESUMOVENDAWEB deve ser um número",
            "any.required": "O campo IDRESUMOVENDAWEB é obrigatório"
        }),

    STTIPOTROCA: Joi.string()
        .valid("DEFEITO", "DESISTENCIA", "TAMANHO", "OUTRO")
        .required()
        .messages({
            "any.only": "STTIPOTROCA deve ser DEFEITO, DESISTENCIA, TAMANHO ou OUTRO",
            "any.required": "O campo STTIPOTROCA é obrigatório"
        }),

    MOTIVOTROCA: Joi.string()
        .max(255)
        .required()
        .messages({
            "string.base": "MOTIVOTROCA deve ser uma string",
            "string.max": "MOTIVOTROCA deve ter no máximo 255 caracteres",
            "any.required": "O campo MOTIVOTROCA é obrigatório"
        }),

    IDUSRLIBERACAOCRIACAO: Joi.number().required()
        .messages({
            "number.base": "IDUSRLIBERACAOCRIACAO deve ser um número",
            "any.required": "O campo IDUSRLIBERACAOCRIACAO é obrigatório"
        }),

    detVoucher: Joi.object({
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
                "any.required": "O campo detVoucher.STSTATUS é obrigatório"
            }),

        DSMOTIVOTROCASTATUS: Joi.string()
            .max(255)
            .allow(null)
            .messages({
                "string.max": "DSMOTIVOTROCASTATUS deve ter no máximo 255 caracteres"
            })
    }).required()
        .messages({
            "any.required": "O objeto detVoucher é obrigatório"
        }),

    produtosVoucher: Joi.array()
        .items(
            Joi.object({
                IDVENDADETALHE: Joi.string().required()
                    .messages({
                        "any.required": "IDVENDADETALHE é obrigatório"
                    }),

                IDPRODUTO: Joi.string().required()
                    .messages({
                        "any.required": "IDPRODUTO é obrigatório"
                    }),

                QTD: Joi.number().positive().required()
                    .messages({
                        "number.base": "QTD deve ser um número",
                        "number.positive": "QTD deve ser maior que zero",
                        "any.required": "QTD é obrigatório"
                    }),

                VRUNIT: Joi.number().precision(2).required()
                    .messages({
                        "number.base": "VRUNIT deve ser um número",
                        "any.required": "VRUNIT é obrigatório"
                    }),

                VRTOTALBRUTO: Joi.number().precision(2).required()
                    .messages({
                        "number.base": "VRTOTALBRUTO deve ser um número",
                        "any.required": "VRTOTALBRUTO é obrigatório"
                    }),

                VRDESCONTO: Joi.number().precision(2).required()
                    .messages({
                        "number.base": "VRDESCONTO deve ser um número",
                        "any.required": "VRDESCONTO é obrigatório"
                    }),

                VRTOTALLIQUIDO: Joi.number().precision(2).required()
                    .messages({
                        "number.base": "VRTOTALLIQUIDO deve ser um número",
                        "any.required": "VRTOTALLIQUIDO é obrigatório"
                    }),

                VDESC: Joi.number().precision(2).required()
                    .messages({
                        "number.base": "VDESC deve ser um número",
                        "any.required": "VDESC é obrigatório"
                    }),

                STTROCA: Joi.string().valid("True", "False").required()
                    .messages({
                        "any.only": "STTROCA deve ser 'True' ou 'False'",
                        "any.required": "STTROCA é obrigatório"
                    })
            })
        )
        .min(1)
        .required()
        .messages({
            "array.min": "Deve existir ao menos um produto em produtosVoucher",
            "any.required": "O campo produtosVoucher é obrigatório"
        })
});

export default createResumoVoucherSchema;