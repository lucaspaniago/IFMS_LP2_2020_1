import Pessoa from '../models/Pessoa';

const controller = {
    cadastrar: async (pessoa) => await Pessoa.create(pessoa),

    // recuperarTodos: async () => await Contato.find(),

    recuperarPorNome: async (nomeConsulta) => await Pessoa.find({
        nome: {
            '$regex': nomeConsulta,
            '$options': 'i' //Ignora letras maiúsculas e minúsculas
        }
    }),

    recuperarPorEndereco: async (enderecoConsulta) => await Pessoa.find({
        nome: {
            '$regex': enderecoConsulta,
            '$options': 'i' //Ignora letras maiúsculas e minúsculas
        }
    })
};

export default controller;