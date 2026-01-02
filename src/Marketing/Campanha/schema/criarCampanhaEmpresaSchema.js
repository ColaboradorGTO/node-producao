import Joi from "joi";

const criarCampanhaEmpresaSchema = Joi.object({
    DSCAMPANHA: Joi.string().allow()
        .messages({
            "string.base": "DSCAMPANHA deve ser uma string"
        }),

    IDOPERADOR: Joi.number().allow()
        .messages({
            "number.base": "IDOPERADOR deve ser um numero"
        }),

    DTINICIO: Joi.string().allow('')
        .messages({
            "string.base": "DTINICIO deve ser uma string"
        }),

    DTFINAL: Joi.string().allow('')
        .messages({
            "string.base": "DTFINAL deve ser uma string"
        }),

    VRPERCDESCONTO: Joi.number().allow('')
        .messages({
            "number.base": "VRPERCDESCONTO deve ser um numero"
        }),

    EMPRESAS: Joi.array()
        .items(
            Joi.number().integer()
                .messages({
                    "number.base": "EMPRESAS deve conter apenas números"
                })
        )
        .allow()
        .messages({
            "array.base": "EMPRESAS deve ser um array"
        })


});

export default criarCampanhaEmpresaSchema;
