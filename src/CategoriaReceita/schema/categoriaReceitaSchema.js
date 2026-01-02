import Joi from 'joi';

const NomeSchema = Joi.object({
    DADOS: Joi.number().required()
        .messages({
            'number.base': 'DADOS deve ser um número',
            'any.required': 'DADOS é obrigatório'
        }),
})

export default NomeSchema;    