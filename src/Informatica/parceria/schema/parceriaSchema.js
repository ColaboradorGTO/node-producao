import Joi from "joi";

const parceriaSchema = Joi.object({
    DADOS: Joi.number().allow()
    .messages({
        "number.base": "O DADOS deve ser um número"
    }),
});

export default parceriaSchema;