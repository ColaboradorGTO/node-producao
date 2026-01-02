import Joi from "joi";

const updateCadastrarDespesasLojaSchema = Joi.object({
    DTDESPESA: Joi.string().required()
        .messages({
            "string.base": "DTDESPESA deve ser uma string",
            "any.required": "O campo DTDESPESA é obrigatório"
        }),
    IDEMPRESA: Joi.number().required()
        .messages({
            "number.base": "IDEMPRESA deve ser um número",
            "any.required": "O campo IDEMPRESA é obrigatório"
        }),
    IDUSR: Joi.number().required()
        .messages({
            "number.base": "IDUSR deve ser um número",
            "any.required": "O campo IDUSR é obrigatório"
        }),
    IDCATEGORIARECEITADESPESA: Joi.number().required()
        .messages({
            "number.base": "IDCATEGORIARECEITADESPESA deve ser um número",
            "any.required": "O campo IDCATEGORIARECEITADESPESA é obrigatório"
        }),
    IDFUNCIONARIO: Joi.number().allow(null, "")
        .messages({
            "number.base": "IDFUNCIONARIO deve ser um numero"
        }),
    DTDESCONTOFUNCIONARIO: Joi.string().allow(null, "")
        .messages({
            "string.base": "DTDESCONTOFUNCIONARIO deve ser um string"
        }),
    VRDESPESA: Joi.number().required()
        .messages({
            "number.base": "VRDESPESA deve ser um número",
            "any.required": "O campo VRDESPESA é obrigatório"
        }),
    DSPAGOA: Joi.string().required()
        .messages({
            "string.base": "DSPAGOA deve ser uma string",
            "any.required": "O campo DSPAGOA é obrigatório"
        }),
    DSHISTORIO: Joi.string().required()
        .messages({
            "string.base": "DSHISTORIO deve ser uma string",
            "any.required": "O campo DSHISTORIO é obrigatório"
        }),
    TPNOTA: Joi.string().required()
        .messages({
            "string.base": "TPNOTA deve ser uma string",
            "any.required": "O campo TPNOTA é obrigatório"
        }),
    NUNOTAFISCAL: Joi.string().required()
        .messages({
            "string.base": "NUNOTAFISCAL deve ser uma string",
            "any.required": "O campo NUNOTAFISCAL é obrigatório"
        }),
    DSPATHDOCFISCAL: Joi.string().allow(null, "")
        .messages({
            "string.base": "DSPATHDOCFISCAL deve ser uma string"
        }),
    STATIVO: Joi.string().required()
        .messages({
            "string.base": "STATIVO deve ser uma string",
            "any.required": "O campo STATIVO é obrigatório"
        }),
    STCANCELADO: Joi.string().required()
        .messages({
            "string.base": "STCANCELADO deve ser uma string",
            "any.required": "O campo STCANCELADO é obrigatório"
        }),
    IDUSRCACELAMENTO: Joi.number().required()
        .messages({
            "number.base": "IDUSRCACELAMENTO deve ser um numero",
            "any.required": "O campo IDUSRCACELAMENTO é obrigatório"
        }),
    DSMOTIVOCANCELAMENTO: Joi.string().required()
        .messages({
            "string.base": "DSMOTIVOCANCELAMENTO deve ser um string",
            "any.required": "O campo DSMOTIVOCANCELAMENTO é obrigatório"
        }),
});

export default updateCadastrarDespesasLojaSchema;