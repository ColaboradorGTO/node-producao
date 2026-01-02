import Joi from 'joi';

const atualizarDescontoFuncionarioSchema = Joi.object({

    DTINICIODESC: Joi.string().allow('')
        .messages({
            'string.base': 'DTINICIODESC deve ser uma string',
            'string.max': 'DTINICIODESC deve ter no máximo 500 caracteres'
        }),

    DTFIMDESC: Joi.string().allow('')
        .messages({
            'string.base': 'DTFIMDESC deve ser uma string',
            'string.max': 'DTFIMDESC deve ter no máximo 500 caracteres'
        }),

    PERCDESCUSUAUTORIZADO: Joi.number().allow('')
        .messages({
            'number.base': 'PERCDESCUSUAUTORIZADO deve ser um numero',
        }),

    MOTIVODESC: Joi.string().allow('')
        .messages({
            'string.base': 'MOTIVODESC deve ser uma string',
            'string.max': 'MOTIVODESC deve ter no máximo 500 caracteres'
        }),

    IDFUNCALTERACAO: Joi.number().required()
        .messages({
            'number.base': 'IDFUNCALTERACAO deve ser um numero',
            'any.required': 'IDFUNCALTERACAO é obrigatório'
        }),

    ID: Joi.number().required()
        .messages({
            'number.base': 'ID deve ser um numero',
            'any.required': 'ID é obrigatório'
        }),
})
export default atualizarDescontoFuncionarioSchema;

