import Joi from "joi";

const CriarPedidoSchema = Joi.object({
    IDGRUPOEMPRESARIAL: Joi.number().required().messages({
        "number.base": "IDGRUPOEMPRESARIAL deve ser um número",
        "any.required": "IDGRUPOEMPRESARIAL é obrigatório"
    }),

    IDSUBGRUPOEMPRESARIAL: Joi.number().required().messages({
        "number.base": "IDSUBGRUPOEMPRESARIAL deve ser um número",
        "any.required": "IDSUBGRUPOEMPRESARIAL é obrigatório"
    }),

    IDCOMPRADOR: Joi.number().required().messages({
        "number.base": "IDCOMPRADOR deve ser um número",
        "any.required": "IDCOMPRADOR é obrigatório"
    }),

    IDCONDICAOPAGAMENTO: Joi.number().required().messages({
        "number.base": "IDCONDICAOPAGAMENTO deve ser um número",
        "any.required": "IDCONDICAOPAGAMENTO é obrigatório"
    }),

    IDFORNECEDOR: Joi.string().required().messages({
        "string.base": "IDFORNECEDOR deve ser uma string",
        "any.required": "IDFORNECEDOR é obrigatório"
    }),

    IDTRANSPORTADORA: Joi.number().required().messages({
        "number.base": "IDTRANSPORTADORA deve ser um número",
        "any.required": "IDTRANSPORTADORA é obrigatório"
    }),

    IDANDAMENTO: Joi.number().required().messages({
        "number.base": "IDANDAMENTO deve ser um número",
        "any.required": "IDANDAMENTO é obrigatório"
    }),

    MODPEDIDO: Joi.string().required().messages({
        "string.base": "MODPEDIDO deve ser uma string",
        "any.required": "MODPEDIDO é obrigatório"
    }),

    NOVENDEDOR: Joi.string().required().messages({
        "string.base": "NOVENDEDOR deve ser uma string",
        "any.required": "NOVENDEDOR é obrigatório"
    }),

    EEMAILVENDEDOR: Joi.string().required().messages({
        "string.base": "EEMAILVENDEDOR deve ser uma string",
        "any.required": "EEMAILVENDEDOR é obrigatório"
    }),

    DTPEDIDO: Joi.date().required().messages({
        "date.base": "DTPEDIDO deve ser uma data válida",
        "any.required": "DTPEDIDO é obrigatório"
    }),

    DTPREVENTREGA: Joi.date().required().messages({
        "date.base": "DTPREVENTREGA deve ser uma data válida",
        "any.required": "DTPREVENTREGA é obrigatório"
    }),

    TPFRETE: Joi.string().required().messages({
        "string.base": "TPFRETE deve ser uma string",
        "any.required": "TPFRETE é obrigatório"
    }),

    DESCPERC01: Joi.number().required().messages({
        "number.base": "DESCPERC01 deve ser um número",
        "any.required": "DESCPERC01 é obrigatório"
    }),

    DESCPERC02: Joi.number().required().messages({
        "number.base": "DESCPERC02 deve ser um número",
        "any.required": "DESCPERC02 é obrigatório"
    }),

    DESCPERC03: Joi.number().required().messages({
        "number.base": "DESCPERC03 deve ser um número",
        "any.required": "DESCPERC03 é obrigatório"
    }),

    PERCCOMISSAO: Joi.number().required().messages({
        "number.base": "PERCCOMISSAO deve ser um número",
        "any.required": "PERCCOMISSAO é obrigatório"
    }),

    VRTOTALLIQUIDO: Joi.number().required().messages({
        "number.base": "VRTOTALLIQUIDO deve ser um número",
        "any.required": "VRTOTALLIQUIDO é obrigatório"
    }),

    OBSPEDIDO: Joi.string().required().messages({
        "string.base": "OBSPEDIDO deve ser uma string",
        "any.required": "OBSPEDIDO é obrigatório"
    }),

    OBSPEDIDO2: Joi.string().required().messages({
        "string.base": "OBSPEDIDO2 deve ser uma string",
        "any.required": "OBSPEDIDO2 é obrigatório"
    }),

    DTFECHAMENTOPEDIDO: Joi.date().required().messages({
        "date.base": "DTFECHAMENTOPEDIDO deve ser uma data válida",
        "any.required": "DTFECHAMENTOPEDIDO é obrigatório"
    }),

    DTCADASTRO: Joi.date().required().messages({
        "date.base": "DTCADASTRO deve ser uma data válida",
        "any.required": "DTCADASTRO é obrigatório"
    }),

    TPARQUIVO: Joi.string().required().messages({
        "string.base": "TPARQUIVO deve ser uma string",
        "any.required": "TPARQUIVO é obrigatório"
    }),

    STDISTRIBUIDO: Joi.string().required().messages({
        "string.base": "STDISTRIBUIDO deve ser uma string",
        "any.required": "STDISTRIBUIDO é obrigatório"
    }),

    STAGRUPAPRODUTO: Joi.string().required().messages({
        "string.base": "STAGRUPAPRODUTO deve ser uma string",
        "any.required": "STAGRUPAPRODUTO é obrigatório"
    }),

    STCANCELADO: Joi.string().required().messages({
        "string.base": "STCANCELADO deve ser uma string",
        "any.required": "STCANCELADO é obrigatório"
    }),

    TPFISCAL: Joi.string().required().messages({
        "string.base": "TPFISCAL deve ser uma string",
        "any.required": "TPFISCAL é obrigatório"
    }),

    STRASCUNHO: Joi.string().required().messages({
        "string.base": "STRASCUNHO deve ser uma string",
        "any.required": "STRASCUNHO é obrigatório"
    }),
});

export default CriarPedidoSchema;
