import Joi from "joi";

const AtualizarPromocaoSchema = Joi.object({
    IDRESUMOPROMOCAOMARKETING: Joi.number().required().messages({
        "any.required": "IDRESUMOPROMOCAOMARKETING é obrigatório",
        "number.base": "IDRESUMOPROMOCAOMARKETING deve ser um número"
    }),

    IDMECANICARESUMOPROMOCAOMARKETING: Joi.number().allow(null).messages({
        "number.base": "IDMECANICARESUMOPROMOCAOMARKETING deve ser um número"
    }),

    TPAPARTIRDE: Joi.number().allow(null).messages({
        "number.base": "TPAPARTIRDE deve ser um número"
    }),

    TPAPLICADOA: Joi.number().allow(null).messages({
        "number.base": "TPAPLICADOA deve ser um número"
    }),

    TPFATORPROMO: Joi.number().allow(null).messages({
        "number.base": "TPFATORPROMO deve ser um número"
    }),

    APARTIRDEQTD: Joi.number().allow(null).messages({
        "number.base": "APARTIRDEQTD deve ser um número"
    }),

    APARTIRDOVLR: Joi.number().allow(null).messages({
        "number.base": "APARTIRDOVLR deve ser um número"
    }),

    FATORPROMOVLR: Joi.number().allow(null).messages({
        "number.base": "FATORPROMOVLR deve ser um número"
    }),

    FATORPROMOPERC: Joi.number().allow(null).messages({
        "number.base": "FATORPROMOPERC deve ser um número"
    }),

    VLPRECOPRODUTO: Joi.number().allow(null).messages({
        "number.base": "VLPRECOPRODUTO deve ser um número"
    }),

    DTHORAINICIO: Joi.string().allow(null).messages({
        "string.base": "DTHORAINICIO deve ser um texto"
    }),

    DTHORAFIM: Joi.string().allow(null).messages({
        "string.base": "DTHORAFIM deve ser um texto"
    }),

    DSPROMOCAOMARKETING: Joi.string().allow(null).messages({
        "string.base": "DSPROMOCAOMARKETING deve ser um texto"
    }),

    IDPRODUTO: Joi.string().allow(null).messages({
        "string.base": "IDPRODUTO deve ser uma string"
    }),

    STATIVO: Joi.string().allow(null).messages({
        "string.base": "STATIVO deve ser um texto"
    }),

    STEMPRESAPROMO: Joi.string().allow(null).messages({
        "string.base": "STEMPRESAPROMO deve ser um texto"
    }),

    STDETPROMOORIGEM: Joi.string().allow(null).messages({
        "string.base": "STDETPROMOORIGEM deve ser um texto"
    }),

    STDETPROMODESTINO: Joi.string().allow(null).messages({
        "string.base": "STDETPROMODESTINO deve ser um texto"
    }),

    IDEMPRESA: Joi.number().allow(null).messages({
        "number.base": "IDEMPRESA deve ser um número"
    }),

    IDGRUPOEMDESTINO: Joi.number().allow(null).messages({
        "number.base": "IDGRUPOEMDESTINO deve ser um número"
    }),

    IDSUBGRUPOEMDESTINO: Joi.number().allow(null).messages({
        "number.base": "IDSUBGRUPOEMDESTINO deve ser um número"
    }),

    IDMARCAEMDESTINO: Joi.number().allow(null).messages({
        "number.base": "IDMARCAEMDESTINO deve ser um número"
    }),

    IDFORNECEDOREMDESTINO: Joi.number().allow(null).messages({
        "number.base": "IDFORNECEDOREMDESTINO deve ser um número"
    }),

    IDPRODUTODESTINO: Joi.number().allow(null).messages({
        "number.base": "IDPRODUTODESTINO deve ser um número"
    }),

    IDGRUPOEMORIGEM: Joi.number().allow(null).messages({
        "number.base": "IDGRUPOEMORIGEM deve ser um número"
    }),

    IDSUBGRUPOEMORIGEM: Joi.number().allow(null).messages({
        "number.base": "IDSUBGRUPOEMORIGEM deve ser um número"
    }),

    IDMARCAEMORIGEM: Joi.number().allow(null).messages({
        "number.base": "IDMARCAEMORIGEM deve ser um número"
    }),

    IDFORNECEDOREMORIGEM: Joi.number().allow(null).messages({
        "number.base": "IDFORNECEDOREMORIGEM deve ser um número"
    }),

    IDPRODUTOORIGEM: Joi.string().allow(null).messages({
        "string.base": "IDPRODUTOORIGEM deve ser uma string"
    })
});

export default AtualizarPromocaoSchema;
