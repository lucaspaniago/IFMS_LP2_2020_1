import * as db from "./config/db";
import pessoaController from './controllers/PessoaController';
import faker from 'faker/locale/pt_BR';

export const cadastrarPessoas = () => {
    
    let clientes = [];
    
    const QUANTIDADE_PESSOAS = 2;

    for(let i = 0; i < QUANTIDADE_PESSOAS; i++) {
        const pessoa = {
            nome: faker.name.findName(),
            areaDeAtuacao: faker.name.jobArea(),
            telefone: faker.phone.phoneNumber(),
            endereco: faker.address.streetAddress()
        };

        clientes.push(pessoa);
    }
}