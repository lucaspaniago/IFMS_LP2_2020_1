//const ClienteController = require('./controller/ClienteController');
//const Cliente = require('./model/Cliente');

import ClienteController from './controller/ClienteController';
import  Cliente from './model/Cliente';

let nome = 'Lucas Lopes Paniago';
let endereco = 'Rua Goiás, 1829';
let cpf = '00776617109';
let telefone = '999401987';

let clienteController = new ClienteController();

let cliente = clienteController.criarCliente(nome, endereco, cpf, telefone);

console.log(cliente);

