import Joi from "joi";

const atualizarCampanhaEmpresaSchema = Joi.object({
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

    IDCAMPANHA: Joi.number().required()
        .messages({
            "number.base": "IDCAMPANHA deve ser um numero",
            "any.required": "IDCAMPANHA é obrigatório"
        }),
});

export default atualizarCampanhaEmpresaSchema;
