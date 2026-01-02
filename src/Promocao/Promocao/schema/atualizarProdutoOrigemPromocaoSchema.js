import Joi from "joi";

const AtualizarProdutoOrigemPromocaoSchema = Joi.object({
    IDRESUMOPROMOCAOMARKETING: Joi.number().required().messages({
        "any.required": "IDRESUMOPROMOCAOMARKETING é obrigatório",
        "number.base": "IDRESUMOPROMOCAOMARKETING deve ser um número"
    }),

    STATIVO: Joi.string().required().messages({
        "any.required": "STATIVO é obrigatório",
        "number.base": "STATIVO deve ser um número"
    }),

    IDPRODUTOORIGEM: Joi.string().required().messages({
        "any.required": "IDPRODUTOORIGEM é obrigatório",
        "string.base": "IDPRODUTOORIGEM deve ser um número"
    }),
});

export default AtualizarProdutoOrigemPromocaoSchema;
