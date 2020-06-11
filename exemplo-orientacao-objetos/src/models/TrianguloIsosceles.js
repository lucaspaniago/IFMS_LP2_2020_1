import Triangulo from "./Triangulo";

class TrianguloIsosceles extends Triangulo {

    #lado;

    constructor(arestas) {
        super(arestas);
        this.#lado = arestas.lado;
        this.calcularAltura();
    }

    calcularAltura () {
        const meiaBase = this.base / 2;
        let subtracaoDePotencias = Math.pow(meiaBase, 2) - Math.pow(this.#lado, 2);
        subtracaoDePotencias = subtracaoDePotencias < 0 ? subtracaoDePotencias * -1 : subtracaoDePotencias;
        this.altura = Math.sqrt(subtracaoDePotencias);
    }
}

export default TrianguloIsosceles;