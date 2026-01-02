import Joi from "joi";

const atualizarTipoTecidosSchema = Joi.object({
    IDTPTECIDO: Joi.number().required()
        .messages({
            "number.base": "IDTPTECIDO deve ser um número",
            "any.required": "IDTPTECIDO é obrigatório"
        }),
    DSTIPOTECIDO: Joi.string().allow()
        .messages({
            "string.base": "DSTIPOTECIDO deve ser uma string"
        }),
    STATIVO: Joi.string().allow()
        .messages({
            "string.base": "STATIVO deve ser uma string"
        }),
});

export default atualizarTipoTecidosSchema;
