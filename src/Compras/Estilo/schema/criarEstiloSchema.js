import Joi from "joi";

const criarEstiloSchema = Joi.object({

    IDGRUPOESTRUTURAANTIGA: Joi.number().allow('')
        .messages({
            "number.base": "IDGRUPOESTRUTURAANTIGA deve ser um número"
        }),
    IDESTILO: Joi.number().allow('')
        .messages({
            "number.base": "IDESTILO deve ser um numero"
        }),
    DSESTILO: Joi.string().allow('')
        .messages({
            "string.base": "DSESTILO deve ser uma string"
        }),
    IDGRUPOESTRUTURA: Joi.number().allow('')
        .messages({
            "number.base": "IDGRUPOESTRUTURA deve ser um número"
        }),
    STATIVO: Joi.string().required()
        .messages({
            "string.base": "STATIVO deve ser uma string"
        }),
});

export default criarEstiloSchema;
