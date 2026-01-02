import { Router } from 'express';
import CategoriaReceitaDespesasControllers from '../controllers/CategoriaReceitaDespesa.js';

const categoriaReceitaRoutes = new Router();

categoriaReceitaRoutes.get('/categoria-receita-despesa', CategoriaReceitaDespesasControllers.getListaCategoriaDespesas)
categoriaReceitaRoutes.get('/categoriaReceitaDespesaFinanceira', CategoriaReceitaDespesasControllers.getListaCategoriaDespesasFinanceira)

export default categoriaReceitaRoutes;