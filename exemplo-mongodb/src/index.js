import * as db from "./config/db";
import contatoCtrl from './controllers/ContatoController';

// let criarNovoContato = async () => {
//     db.conectarBD();

//     const contato = {
//         nome: 'Lucas Paniago',
//         telefone: '(67) 99999-9999',
//         email: 'lucas@email.com',
//         dataNascimento: new Date()
//     }
//     await contatoCtrl.salvar(contato);

//     db.desconectarBD();
// }

let recuperarContatos = async () => {
    db.conectarBD();

    //const contatos = await contatoCtrl.recuperarTodos();

    const contatos = await contatoCtrl.recuperarPorNome('Pan');

    contatos.forEach(contato => console.log(contato));

    db.desconectarBD();
}

// criarNovoContato();
recuperarContatos();