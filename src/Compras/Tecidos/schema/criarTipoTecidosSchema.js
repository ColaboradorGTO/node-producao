import Joi from "joi";

const criarTipoTecidosSchema = Joi.object({
  
    DSTIPOTECIDO: Joi.string().required()
        .messages({
            "string.base": "DSTIPOTECIDO deve ser uma string",
            "any.required": "DSTIPOTECIDO é obrigatório"
        }),
    STATIVO: Joi.string().required()
        .messages({
            "string.base": "STATIVO deve ser uma string",
            "any.required": "STATIVO é obrigatório"
        }),
});

export default criarTipoTecidosSchema;
