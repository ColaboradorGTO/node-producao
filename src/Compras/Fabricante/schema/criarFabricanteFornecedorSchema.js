import Joi from "joi";

const criarFabricanteFornecedorSchema = Joi.object({

    IDFABFORN: Joi.number().allow()
        .messages({
            "number.base": "IDFABFORN deve ser um numero"
        }),
    IDFABRICANTE: Joi.number().allow()
        .messages({
            "number.base": "IDFABRICANTE deve ser uma numero"
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

export default criarFabricanteFornecedorSchema;