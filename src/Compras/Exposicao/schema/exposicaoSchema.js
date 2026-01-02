import Joi from "joi";

const ExposicaoSchema = Joi.object({
    DADOS: Joi.number().allow()
    .messages({
        "number.base": "DADOS deve ser um número"
    }),

});

export default ExposicaoSchema;