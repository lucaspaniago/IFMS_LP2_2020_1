/**
 * file system - trabalho com arquivos / abre arquivos
 */
import fs from 'fs';
/**
 * Consegue apontar para o file system (fs)
 */
import path from 'path';
import excelToJason from 'convert-excel-to-json';

import Municipio from '../entity/Municipio';

export default class ArrecadacaoDAO {
    carregarArrecadacoesDosMunicipios() {
        let municipios = [];

        /**
         * Aponta para o arquivo da planilha de dados
         */
        let caminhoArquivo = path.resolve(__dirname, '../../data/dados.xls');

        let dados = excelToJason({
            source: fs.readFileSync(caminhoArquivo),
            //Intevalo das células do excel - se não colocar nada ele assume que é a primeira planilha
            range: 'A4:P185'
        })

        dados.Plan1.forEach(elemento => {
            let nome = elemento.A;

            /**values -> traz todos os valores de um objeto
             * Object.values devolve todos os valores das propriedades existentes dentro de um objeto
             * console.log(Object.values(elemento));
             */
            let valores = Object.values(elemento);
            let arrecadacoes = valores.slice(1, valores.length);
            let municipio = new Municipio(nome, arrecadacoes);
            municipios.push(municipio);

        })

        return municipios;
    }
}

