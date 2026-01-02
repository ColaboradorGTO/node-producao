import Joi from "joi";

const produtoImagemItemSchema = Joi.object({
    IDProduto: Joi.string().required()
        .messages({
            "string.base": "IDProduto deve ser uma string",
            "any.required": "IDProduto é obrigatório"
        }),

    IDForProduto: Joi.number().required()
        .messages({
            "number.base": "IDForProduto deve ser um número",
            "any.required": "IDForProduto é obrigatório"
        }),

    IDFabProduto: Joi.number().required()
        .messages({
            "number.base": "IDFabProduto deve ser um número",
            "any.required": "IDFabProduto é obrigatório"
        }),

    IDSubEstrutProduto: Joi.number().required()
        .messages({
            "number.base": "IDSubEstrutProduto deve ser um número",
            "any.required": "IDSubEstrutProduto é obrigatório"
        })
});

const criarProdutoImagemSchema = Joi.object({
    IDRESUMOPEDIDO: Joi.number().allow(null)
        .messages({
            "number.base": "IDRESUMOPEDIDO deve ser um número"
        }),

    NUREF: Joi.string().required()
        .messages({
            "string.base": "NUREF deve ser uma string",
            "any.required": "NUREF é obrigatório"
        }),

    IMAGEM: Joi.string().required()
        .messages({
            "string.base": "IMAGEM deve ser uma string",
            "any.required": "IMAGEM é obrigatório"
        }),

    STATIVO: Joi.string().valid("True", "False").required()
        .messages({
            "string.base": "STATIVO deve ser uma string",
            "any.only": "STATIVO deve ser 'True' ou 'False'",
            "any.required": "STATIVO é obrigatório"
        }),

    IDPRODIMAGEM: Joi.array()
        .items(produtoImagemItemSchema)
        .min(1)
        .required()
        .messages({
            "array.base": "IDPRODIMAGEM deve ser um array",
            "array.min": "IDPRODIMAGEM deve conter ao menos um item",
            "any.required": "IDPRODIMAGEM é obrigatório"
        })
});

export default criarProdutoImagemSchema;
