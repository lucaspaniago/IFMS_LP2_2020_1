class Cliente {

    #cpf;

    constructor() {
        this.nome = '';
        this.#cpf = '';;
        this.dataNascimento = '';
        this.endereco = '';
        //Congela o objeto e não permite que seja acrescentado nenhum novo atributo
        Object.freeze(this);
    }

    get cpf() {
        return this.#cpf;
    }

    set cpf(cpf) {
        let valido = cpf.length === 11;
        if(valido) {
            let cont = 1;
            for(let i; i < cpf.length; i++) {
                if(cpf[i] ===[i - 1]) {
                    cont++;
                }
            }
        }
        
        this.#cpf = cont < 11? cpf : this.#cpf;
    }
}

export default Cliente;