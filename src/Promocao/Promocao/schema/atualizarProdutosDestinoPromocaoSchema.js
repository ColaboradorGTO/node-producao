import Joi from "joi";

const AtualizarProdutoDestinoPromocaoSchema = Joi.object({
    IDRESUMOPROMOCAOMARKETING: Joi.number().required().messages({
        "any.required": "IDRESUMOPROMOCAOMARKETING é obrigatório",
        "number.base": "IDRESUMOPROMOCAOMARKETING deve ser um número"
    }),

    STATIVO: Joi.string().required().messages({
        "string.base": "STATIVO deve ser um número"
    }),

    IDPRODUTODESTINO: Joi.string().required().messages({
        "string.base": "IDPRODUTODESTINO deve ser um número"
    }),
});

export default AtualizarProdutoDestinoPromocaoSchema;
