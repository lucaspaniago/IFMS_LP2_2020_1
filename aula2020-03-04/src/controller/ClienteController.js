/**
 * Importa a classe Cliente com a função required (forma antiga do JS)
 */
//const Cliente = require('../model/Cliente')

/**
 * Importa a classe cliente com a palavra reservada import (forma mais moderna - ES6)
 */
import Cliente from '../model/Cliente';

export default class ClienteController {
    criarCliente(nome, endereco, cpf, telefone) {
        /**
         * Instancia um novo objeto da classe CLiente
         */
        let cliente = new Cliente(nome, endereco, cpf, telefone);

        // cliente.nome = nome;
        // cliente.endereco = endereco;
        // cliente.cpf = cpf;
        // cliente.telefone = telefone;

        return cliente;
    }
}

//module.exports = ClienteController;