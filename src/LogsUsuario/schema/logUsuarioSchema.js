import Joi from "joi";

const criarLogsSchema = Joi.object({
    IDFUNCIONARIO: Joi.string().allow("", null)
        .messages({
            "string.base": "IDFUNCIONARIO deve ser uma string"
        }),
    PATHFUNCAO: Joi.string().allow("", null)
        .messages({
            "string.base": "PATHFUNCAO deve ser uma string"
        }),
    DADOS: Joi.string().allow("", null)
        .messages({
            "string.base": "DADOS deve ser uma string"
        }),
    IP: Joi.string().allow("", null)
        .messages({
            "string.base": "IP deve ser uma string"
        }),
});

export default criarLogsSchema;
