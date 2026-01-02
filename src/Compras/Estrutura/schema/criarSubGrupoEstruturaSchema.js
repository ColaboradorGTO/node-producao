import Joi from "joi";

const criarSubGrupoEstruturaSchema = Joi.object({
    IDGRUPOESTRUTURA: Joi.number().allow()
        .messages({
            "number.base": "IDGRUPOESTRUTURA deve ser um número"
        }),
    DSSUBGRUPOESTRUTURA: Joi.string().allow()
        .messages({
            "string.base": "DSSUBGRUPOESTRUTURA deve ser uma string"
        }),
    DSSUBGRUPOESTRUTURAFIM: Joi.string().allow()
        .messages({
            "string.base": "DSSUBGRUPOESTRUTURAFIM deve ser uma string"
        }),
    CODSUBGRUPOESTRUTURA: Joi.string().allow()
        .messages({
            "string.base": "CODSUBGRUPOESTRUTURA deve ser uma string"
        }),
    IDSUBGRUPOESTRUTURA: Joi.number().allow()
        .messages({
            "number.base": "IDSUBGRUPOESTRUTURA deve ser um número"
        }),
    STATIVO: Joi.string().allow()
        .messages({
            "string.base": "STATIVO deve ser uma string"
        }),
});

export default criarSubGrupoEstruturaSchema;
