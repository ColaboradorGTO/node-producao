import Joi from "joi";

const atualizarCategoriaPedidosSchema = Joi.object({

    DSCATEGORIAPEDIDO: Joi.string().required()
        .messages({
            "number.base": "O DSCATEGORIAPEDIDO deve ser um número",
            "any.required": "O DSCATEGORIAPEDIDO é obrigatório"
        }),
    TIPOPEDIDO: Joi.string().required()
        .messages({
            "string.base": "TIPOPEDIDO deve ser uma string",
            "any.required": "TIPOPEDIDO é obrigatório"
        }),
    STATIVO: Joi.string().required()
        .messages({
            "string.base": "STATIVO deve ser uma string",
            "any.required": "STATIVO é obrigatório"
        }),
});

export default atualizarCategoriaPedidosSchema;
