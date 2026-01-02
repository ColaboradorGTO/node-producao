import Joi from "joi";

const produtosSchema = Joi.object({
    DADOS: Joi.number().required()
        .messages({
            "any.required": "O DADOS é obrigatório",
            "number.base": "O DADOS deve ser um número"
        }),
})

export default produtosSchema;