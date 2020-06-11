import * as db from "./config/db";
import pessoaController from './controllers/PessoaController';
import * as popular from './popular';

// let cadastrarPessoas(pessoas) {
//     for
// }

let recuperarPessoasPorNome = async (nomeConsulta) => {
    db.conectarBD();

    const pessoas = await pessoaController.recuperarPorNome(nomeConsulta);

    pessoas.forEach(pessoa => console.log(pessoa));

    db.desconectarBD();
}


recuperarPessoasPorNome('San');