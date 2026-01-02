import Joi from "joi";

const cadastroVinculoTamanhoCategoriaSchema = Joi.object({
    IDCATEGORIAPEDIDO: Joi.number().required().messages({
        "number.base": "IDCATEGORIAPEDIDO deve ser um número",
        "any.required": "IDCATEGORIAPEDIDO é obrigatório"
    }),

    IDTAMANHO: Joi.number().required().messages({
        "number.base": "IDTAMANHO deve ser um número",
        "any.required": "IDTAMANHO é obrigatório"
    }),

    STATIVO: Joi.string().required().messages({
        "string.base": "STATIVO deve ser uma string",
        "any.required": "STATIVO é obrigatório"
    }),
});

export default cadastroVinculoTamanhoCategoriaSchema;
