import Joi from "joi";

const atualizarGrupoEstruturaSchema = Joi.object({
    IDGRUPOESTRUTURA: Joi.number().required()
        .messages({
            "number.base": "IDGRUPOESTRUTURA deve ser um número",
            "any.required": "IDGRUPOESTRUTURA é obrigatório"
        }),
    IDGRUPOEMPRESARIAL: Joi.number().allow()
        .messages({
            "number.base": "IDGRUPOEMPRESARIAL deve ser um número"
        }),
    DSGRUPOESTRUTURA: Joi.string().allow()
        .messages({
            "string.base": "DSGRUPOESTRUTURA deve ser uma string"
        }),
    STATIVO: Joi.string().allow()
        .messages({
            "string.base": "STATIVO deve ser uma string"
        }),
});

export default atualizarGrupoEstruturaSchema;
