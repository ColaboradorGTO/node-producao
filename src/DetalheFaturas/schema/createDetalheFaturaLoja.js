import Joi from "joi";

const createDetalheFaturaLoja = Joi.object({
    IDEMPRESA: Joi.number().allow("", null)
        .messages({
            "number.base": "IDEMPRESA deve ser um número"
        }),
    IDFUNCIONARIO: Joi.number().allow("", null)
        .messages({
            "number.base": "IDFUNCIONARIO deve ser um número"
        }),
    IDDETALHEFATURALOCAL: Joi.number().allow("", null)
        .messages({
            "number.base": "IDDETALHEFATURALOCAL deve ser um número"
        }),
    IDCAIXAWEB: Joi.number().allow("", null)
        .messages({
            "number.base": "IDCAIXAWEB deve ser um número"
        }),
    IDCAIXALOCAL: Joi.number().allow("", null)
        .messages({
            "number.base": "IDCAIXALOCAL deve ser um número"
        }),
    NUESTABELECIMENTO: Joi.string().allow("", null)
        .messages({
            "string.base": "NUESTABELECIMENTO deve ser uma string"
        }),
    NUCARTAO: Joi.string().allow("", null)
        .messages({
            "string.base": "NUCARTAO deve ser uma string",
        }),
    DTPROCESSAMENTO: Joi.string().allow("", null)
        .messages({
            "string.base": "DTPROCESSAMENTO deve ser uma string"
        }),
    HRPROCESSAMENTO: Joi.string().allow("", null)
        .messages({
            "string.base": "HRPROCESSAMENTO deve ser uma string"
        }),
    NUNSU: Joi.string().allow("", null)
        .messages({
            "string.base": "NUNSU deve ser uma string"
        }),
    NUNSUHOST: Joi.string().allow("", null)
        .messages({
            "string.base": "NUNSUHOST deve ser uma string"
        }),
    NUCODAUTORIZACAO: Joi.string().allow("", null)
        .messages({
            "string.base": "NUCODAUTORIZACAO deve ser uma string"
        }),
    VRRECEBIDO: Joi.number().allow("", null)
        .messages({
            "number.base": "VRRECEBIDO deve ser um número",
        }),
    DTHRMIGRACAO: Joi.string().allow("", null)
        .messages({
            "string.base": "DTHRMIGRACAO deve ser uma string",
        }),
    STCANCELADO: Joi.string().allow("", null)
        .messages({
            "string.base": "STCANCELADO deve ser uma string",
        }),
    IDUSRCACELAMENTO: Joi.number().allow("", null)
        .messages({
            "number.base": "IDUSRCACELAMENTO deve ser um número",
        }),
    IDMOVIMENTOCAIXAWEB: Joi.string().allow("", null)
        .messages({
            "string.base": "IDMOVIMENTOCAIXAWEB deve ser uma string",
        }),
    STPIX: Joi.string().allow("", null)
        .messages({
            "string.base": "STPIX deve ser uma string",
        }),
    NUAUTORIZACAO: Joi.string().allow("", null)
        .messages({
            "string.base": "NUAUTORIZACAO deve ser uma string",
        })
});

export default createDetalheFaturaLoja;
