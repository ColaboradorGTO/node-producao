import Joi from 'joi';

const vendaVendedorSchema = Joi.object({
    IDVENDEDOR: Joi.number().required()
    .messages({
        'number.base': 'IDVENDEDOR deve ser uma number.',
        'any.required': 'IDVENDEDOR é um campo obrigatório.'
    }),
    IDVENDADETALHE: Joi.string()
    .messages({
        'string.base': 'IDVENDADETALHE deve ser uma string.',
    })
})

export default vendaVendedorSchema;