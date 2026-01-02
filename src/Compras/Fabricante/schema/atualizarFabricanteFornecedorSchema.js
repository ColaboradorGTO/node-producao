import Joi from "joi";

const atualizarFabricanteFornecedorSchema = Joi.object({
    IDFABRICANTEFORN: Joi.number().required()
        .messages({
            "number.base": "IDFABRICANTE deve ser um número",
            "any.required": "IDFABRICANTE é obrigatório"
        }),

    IDFABRICANTE: Joi.number().allow()
        .messages({
            "number.base": "IDFABRICANTE deve ser um numero"
        }),
    IDFORNECEDOR: Joi.number().allow()
        .messages({
            "number.base": "IDFORNECEDOR deve ser uma numero"
        }),
    STATIVO: Joi.string().allow()
        .messages({
            "string.base": "STATIVO deve ser uma string"
        }),
});

export default atualizarFabricanteFornecedorSchema;