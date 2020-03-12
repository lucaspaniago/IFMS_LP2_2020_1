import ArrecadacaoDAO from './ArrecadacaoDAO';

const descricao = `
    Testa as operações de leitura sobre a planilha de dados de arrecadações 
    de tributos sobre exploração mineral nos municípios do estado do Paraná.
`;

var dao;

describe(descricao, () => {

    beforeAll(() => dao = new ArrecadacaoDAO());

    test('deve carregar as arrecadacoes de todos os municipios', ()=> {
        let municipios = dao.carregarArrecadacoesDosMunicipios();
        
        /**
         * espera que o vetor de municípios tenha 182 muncípios dentro dele. 
         * Ou seja, os 182 municípios existentes na planilha de dados
         */
        expect(municipios.length).toBe(182);

    });
});