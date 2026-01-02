import Joi from "joi";

const atualizarfornecedorSchema = Joi.object({
    IDGRUPOEMPRESARIAL: Joi.number().required().messages({
        "number.base": "IDGRUPOEMPRESARIAL deve ser um número",
        "any.required": "IDGRUPOEMPRESARIAL é obrigatório"
    }),

    IDSUBGRUPOEMPRESARIAL: Joi.number().required().messages({
        "number.base": "IDSUBGRUPOEMPRESARIAL deve ser um número",
        "any.required": "IDSUBGRUPOEMPRESARIAL é obrigatório"
    }),

    MODPEDIDO: Joi.string().required().messages({
        "string.base": "MODPEDIDO deve ser um texto",
        "any.required": "MODPEDIDO é obrigatório"
    }),

    NORAZAOSOCIAL: Joi.string().required().messages({
        "string.base": "NORAZAOSOCIAL deve ser um texto",
        "any.required": "NORAZAOSOCIAL é obrigatório"
    }),

    NOFANTASIA: Joi.string().allow(null, "").messages({
        "string.base": "NOFANTASIA deve ser um texto"
    }),

    NUCNPJ: Joi.string().required().messages({
        "string.base": "NUCNPJ deve ser um texto",
        "any.required": "NUCNPJ é obrigatório"
    }),

    NUINSCESTADUAL: Joi.string().allow(null, "").messages({
        "string.base": "NUINSCESTADUAL deve ser um texto"
    }),

    NUINSCMUNICIPAL: Joi.string().allow(null, "").messages({
        "string.base": "NUINSCMUNICIPAL deve ser um texto"
    }),

    NUIBGE: Joi.string().allow(null, "").messages({
        "string.base": "NUIBGE deve ser um texto"
    }),

    EENDERECO: Joi.string().required().messages({
        "string.base": "EENDERECO deve ser um texto",
        "any.required": "EENDERECO é obrigatório"
    }),

    ENUMERO: Joi.string().allow(null, "").messages({
        "string.base": "ENUMERO deve ser um texto"
    }),

    ECOMPLEMENTO: Joi.string().allow(null, "").messages({
        "string.base": "ECOMPLEMENTO deve ser um texto"
    }),

    EBAIRRO: Joi.string().required().messages({
        "string.base": "EBAIRRO deve ser um texto",
        "any.required": "EBAIRRO é obrigatório"
    }),

    ECIDADE: Joi.string().required().messages({
        "string.base": "ECIDADE deve ser um texto",
        "any.required": "ECIDADE é obrigatório"
    }),

    SGUF: Joi.string().length(2).required().messages({
        "string.base": "SGUF deve ser um texto",
        "string.length": "SGUF deve conter 2 caracteres",
        "any.required": "SGUF é obrigatório"
    }),

    NUCEP: Joi.string().required().messages({
        "string.base": "NUCEP deve ser um texto",
        "any.required": "NUCEP é obrigatório"
    }),

    EEMAIL: Joi.string().email().allow(null, "").messages({
        "string.email": "EEMAIL deve ser um e-mail válido"
    }),

    NUTELEFONE1: Joi.string().allow(null, "").messages({
        "string.base": "NUTELEFONE1 deve ser um texto"
    }),

    NUTELEFONE2: Joi.string().allow(null, "").messages({
        "string.base": "NUTELEFONE2 deve ser um texto"
    }),

    NUTELEFONE3: Joi.string().allow(null, "").messages({
        "string.base": "NUTELEFONE3 deve ser um texto"
    }),

    NOREPRESENTANTE: Joi.string().allow(null, "").messages({
        "string.base": "NOREPRESENTANTE deve ser um texto"
    }),

    DTCADASTRO: Joi.string().allow(null).messages({
        "string.base": "DTCADASTRO deve ser uma data válida"
    }),

    DTULTATUALIZACAO: Joi.string().allow(null).messages({
        "string.base": "DTULTATUALIZACAO deve ser uma string"
    }),

    STATIVO: Joi.string().required().messages({
        "string.base": "STATIVO deve ser um texto",
        "any.required": "STATIVO é obrigatório"
    }),

    IDCONDPAGPADRAO: Joi.number().allow(null).messages({
        "number.base": "IDCONDPAGPADRAO deve ser um número"
    }),

    IDTRANSPORTADORAPADRAO: Joi.number().allow(null).messages({
        "number.base": "IDTRANSPORTADORAPADRAO deve ser um número"
    }),

    TPPEDIDOPADRAO: Joi.string().allow(null, "").messages({
        "string.base": "TPPEDIDOPADRAO deve ser um texto"
    }),

    NOVENDEDORPADRAO: Joi.string().allow(null, "").messages({
        "string.base": "NOVENDEDORPADRAO deve ser um texto"
    }),

    TPFRETEPADRAO: Joi.string().allow(null, "").messages({
        "string.base": "TPFRETEPADRAO deve ser um texto"
    }),

    TPARQUIVOPADRAO: Joi.string().allow(null, "").messages({
        "string.base": "TPARQUIVOPADRAO deve ser um texto"
    }),

    TPFISCALPADRAO: Joi.string().allow(null, "").messages({
        "string.base": "TPFISCALPADRAO deve ser um texto"
    }),

    EMAILVENDEDORPADRAO: Joi.string().email().allow(null, "").messages({
        "string.email": "EMAILVENDEDORPADRAO deve ser um e-mail válido"
    }),

    IDFORNECEDOR: Joi.string().required().messages({
        "string.base": "IDFORNECEDOR deve ser um texto",
        "any.required": "IDFORNECEDOR é obrigatório"
    })
});

export default atualizarfornecedorSchema;
