import Joi from "joi";

const atualizarFabricanteSchema = Joi.object({
    IDFABRICANTE: Joi.number().required()
        .messages({
            "number.base": "IDFABRICANTE deve ser um número",
            "any.required": "IDFABRICANTE é obrigatório"
        }),

    DSFABRICANTE: Joi.string().allow()
        .messages({
            "string.base": "DSFABRICANTE deve ser uma string"
        }),
    DTULTATUALIZACAO: Joi.string().allow()
        .messages({
            "string.base": "DTULTATUALIZACAO deve ser uma string"
        }),
    DTCADASTRO: Joi.string().allow()
        .messages({
            "string.base": "DTCADASTRO deve ser uma string"
        }),
    STATIVO: Joi.string().allow()
        .messages({
            "string.base": "STATIVO deve ser uma string"
        }),

});

export default atualizarFabricanteSchema;