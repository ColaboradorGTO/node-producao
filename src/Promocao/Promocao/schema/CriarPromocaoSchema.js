import Joi from "joi";

const criarPromocaoSchema = Joi.object({
    DSPROMOCAOMARKETING: Joi.string().required().messages({
        "any.required": "DSPROMOCAOMARKETING é obrigatório",
        "number.base": "DSPROMOCAOMARKETING deve ser uma string"
    }),
    DTHORAINICIO: Joi.string().required().messages({
        "any.required": "DTHORAINICIO é obrigatório",
        "string.base": "DTHORAINICIO deve ser uma string"
    }),
    DTHORAFIM: Joi.string().required().messages({
        "any.required": "DTHORAFIM é obrigatório",
        "string.base": "DTHORAFIM deve ser uma string"
    }),
    TPAPLICADOA: Joi.number().required().messages({
        "any.required": "TPAPLICADOA é obrigatório",
        "number.base": "TPAPLICADOA deve ser um número"
    }),
    APARTIRDEQTD: Joi.number().required().messages({
        "any.required": "APARTIRDEQTD é obrigatório",
        "number.base": "APARTIRDEQTD deve ser um número"
    }),
    APARTIRDOVLR: Joi.number().required().messages({
        "any.required": "APARTIRDOVLR é obrigatório",
        "number.base": "APARTIRDOVLR deve ser um número"
    }),
    TPFATORPROMO: Joi.number().required().messages({
        "any.required": "TPFATORPROMO é obrigatório",
        "number.base": "TPFATORPROMO deve ser um número"
    }),
    FATORPROMOVLR: Joi.number().required().messages({
        "any.required": "FATORPROMOVLR é obrigatório",
        "number.base": "FATORPROMOVLR deve ser um número"
    }),
    FATORPROMOPERC: Joi.number().required().messages({
        "any.required": "FATORPROMOPERC é obrigatório",
        "number.base": "FATORPROMOPERC deve ser um número"
    }),
    TPAPARTIRDE: Joi.number().required().messages({
        "any.required": "TPAPARTIRDE é obrigatório",
        "number.base": "TPAPARTIRDE deve ser um número"
    }),
    VLPRECOPRODUTO: Joi.number().required().messages({
        "any.required": "VLPRECOPRODUTO é obrigatório",
        "number.base": "VLPRECOPRODUTO deve ser um número"
    }),
    STEMPRESAPROMO: Joi.string().required().messages({
        "any.required": "STEMPRESAPROMO é obrigatório",
        "string.base": "STEMPRESAPROMO deve ser uma string"
    }),
    STDETPROMOORIGEM: Joi.string().required().messages({
        "any.required": "STDETPROMOORIGEM é obrigatório",
        "string.base": "STDETPROMOORIGEM deve ser uma string"
    }),
    STDETPROMODESTINO: Joi.string().required().messages({
        "any.required": "STDETPROMODESTINO é obrigatório",
        "string.base": "STDETPROMODESTINO deve ser uma string"
    }),
});

export default criarPromocaoSchema;
