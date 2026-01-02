import Joi from "joi";

const criarFabricanteSchema = Joi.object({

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

export default criarFabricanteSchema;