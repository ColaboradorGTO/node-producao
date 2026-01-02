import Joi from "joi";

const atualizarProdutoImagemSchema = Joi.object({
    IDIMAGEMPRODUTO: Joi.number().required()
        .messages({
            "number.base": "IDIMAGEMPRODUTO deve ser um número",
            "any.required": "IDIMAGEMPRODUTO é obrigatório"
        }),
    STATIVO: Joi.string().required()
        .messages({
            "string.base": "STATIVO deve ser uma string",
            "any.required": "STATIVO é obrigatório"
        }),
});

export default atualizarProdutoImagemSchema;

