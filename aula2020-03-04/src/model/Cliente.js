/**
 * Deixa pública a classe Cliente com a forma mais moderna (ES6)
 */
export default class Cliente {
    
    /*constructor() {
        this.nome = '';
        this.endereco = '';
        this.cpf = '';
        this.telefone = '';
    }*/

    constructor(nome, endereco, cpf, telefone) {
        this.nome = nome;
        this.endereco = endereco;
        this.cpf = cpf;
        this.telefone = telefone;
    }
}

/**
 * Deixa pública (Exporta) a classe cliente da foma antiga (old school) do JS
 */
//module.exports = Cliente;