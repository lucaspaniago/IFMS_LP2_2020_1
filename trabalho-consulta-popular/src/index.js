import * as db from "./config/db";
import pessoaController from './controllers/PessoaController';
import * as popular from './popular';

let recuperarPessoasPorNome = async (nomeConsulta) => {
    db.conectarBD();

    const pessoas = await pessoaController.recuperarPorNome(nomeConsulta);

    pessoas.forEach(pessoa => console.log(pessoa));
    
    db.desconectarBD();
}

let recuperarPessoasPorEndereco = async (endercoConsulta) => {
    db.conectarBD();

    const pessoas = await pessoaController.recuperarPorEndereco(endercoConsulta);

    pessoas.forEach(pessoa => console.log(pessoa));
    
    db.desconectarBD();
}

/**
 * Professor, o código só funcionou quando as 3 funções abaixo são rodadas individualmente. Tentei várias coisas, mas não consegui fazer com que funcionassem em sequência. A abertura e fechamento do BD de uma interfere no funcionamento das demais.
 */

popular.cadastrarPessoas();

//recuperarPessoasPorNome('a');
//recuperarPessoasPorEndereco('an');