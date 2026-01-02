import Joi from 'joi';

const atualizarFuncionarioSchema = Joi.object({

    NOFUNCIONARIO: Joi.string().allow('')
        .messages({
            'string.base': 'NOFUNCIONARIO deve ser uma string',
            'string.max': 'NOFUNCIONARIO deve ter no máximo 500 caracteres'
        }),

    NUCPF: Joi.string().allow('')
        .messages({
            'string.base': 'NUCPF deve ser uma string',
            'string.max': 'NUCPF deve ter no máximo 11 caracteres'
        }),

    NOLOGIN: Joi.string().allow('')
        .messages({
            'string.base': 'NOLOGIN deve ser uma string',
            'string.max': 'NOLOGIN deve ter no máximo 500 caracteres'
        }),

    PWSENHA: Joi.string().allow('')
        .messages({
            'string.base': 'PWSENHA deve ser uma string',
            'string.max': 'PWSENHA deve ter no máximo 500 caracteres'
        }),

    DSFUNCAO: Joi.string().allow('')
        .messages({
            'string.base': 'DSFUNCAO deve ser uma string',
            'string.max': 'DSFUNCAO deve ter no máximo 500 caracteres'
        }),

    DSTIPO: Joi.string().allow('')
        .messages({
            'string.base': 'DSTIPO deve ser uma string',
            'string.max': 'DSTIPO deve ter no máximo 500 caracteres'
        }),

    PERC: Joi.number().allow('')
        .messages({
            'number.base': 'PERC deve ser um número',
            'any.required': 'PERC é obrigatório'
        }),

    VALORSALARIO: Joi.number().allow('')
        .messages({
            'number.base': 'VALORSALARIO deve ser um número',
            'any.required': 'VALORSALARIO é obrigatório'
        }),

    VALORDISPONIVEL: Joi.number().allow('')
        .messages({
            'number.base': 'VALORDISPONIVEL deve ser um número',
            'any.required': 'VALORDISPONIVEL é obrigatório'
        }),

    MOTIVODESC: Joi.string().allow('')
        .messages({
            'string.base': 'MOTIVODESC deve ser uma string',
            'string.max': 'motivo desconto deve ter no máximo 500 caracteres'
        }),

    STCONVENIO: Joi.string().allow('')
        .messages({
            'string.base': 'STCONVENIO deve ser uma string',
            'string.max': 'STCONVENIO deve ter no máximo 500 caracteres'
        }),

    STDESCONTOFOLHA: Joi.string().allow('')
        .messages({
            'string.base': 'STDESCONTOFOLHA deve ser uma string',
            'string.max': 'STDESCONTOFOLHA deve ter no máximo 500 caracteres'
        }),
    STLOJA: Joi.string().allow('')
        .messages({
            'string.base': 'STLOJA deve ser uma string',
            'string.max': 'STLOJA deve ter no máximo 500 caracteres'
        }),
    DATA_ADMISSAO: Joi.string().allow('')
        .messages({
            'string.base': 'DTADMISSAO deve ser uma string',
            'string.max': 'DTADMISSAO deve ter no máximo 500 caracteres'
        }),

    ID: Joi.number().allow('')
        .messages({
            'number.base': 'ID deve ser um número',
            'any.required': 'ID é obrigatório'
        }),



})
export default atualizarFuncionarioSchema;

