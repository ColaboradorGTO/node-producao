import Joi from "joi";

const nomeSchema = Joi.object({
    DADOS: Joi.string().allow()
        .messages({
            "string.base": "DADOS deve ser uma string",
        }),
});

export default nomeSchema;
