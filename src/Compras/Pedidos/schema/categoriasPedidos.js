import Joi from "joi";

const AtualizarPedidoSchema = Joi.object({

    DSCATEGORIAPEDIDO: Joi.string().required().messages({
        "string.base": "DSCATEGORIAPEDIDO deve ser um string",
        "any.required": "DSCATEGORIAPEDIDO é obrigatório"
    }),

    TIPOPEDIDO: Joi.string().required().messages({
        "string.base": "TIPOPEDIDO deve ser uma string",
        "any.required": "TIPOPEDIDO é obrigatório"
    }),

    STATIVO: Joi.string().required().messages({
        "string.base": "STATIVO deve ser uma string",
        "any.required": "STATIVO é obrigatório"
    }),
});

export default AtualizarPedidoSchema;
