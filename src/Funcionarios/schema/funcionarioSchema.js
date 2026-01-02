import Joi from "joi";

const funcionarioSchema = Joi.object({
    DADOS: Joi.number().allow()
    .messages({
        "number.base": "DADOS deve ser um número"
    }),
});

export default funcionarioSchema;