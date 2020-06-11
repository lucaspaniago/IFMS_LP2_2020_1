import mongoose from 'mongoose';

const esquema = new mongoose.Schema({
    nome: String,
    areaDeAtuacao: String,
    telefone: String,
    endereco: String,
});

const Pessoa = mongoose.model('Pessoa', esquema);

export default Pessoa;