import { Router } from 'express';
import ClienteControllers from '../controller/clienteController.js';

const InformaticaCliente  = new Router();

InformaticaCliente.get('/clientes', ClienteControllers.getListaCliente)
InformaticaCliente.get('/lista-cliente', ClienteControllers.getListaClienteIformatica)
InformaticaCliente.get('/lista-cliente-credsystem', ClienteControllers.getListaCadastroClienteCredSystem)

export default InformaticaCliente;

