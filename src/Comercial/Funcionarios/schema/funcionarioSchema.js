import Joi from "joi";

const funcionariosSchema = Joi.object({
    DADOS: Joi.number().required()
        .messages({
            "any.required": "DADOS é obrigatório",
            "number.base": "DADOS deve ser um número"
        }),
})

export default funcionariosSchema;