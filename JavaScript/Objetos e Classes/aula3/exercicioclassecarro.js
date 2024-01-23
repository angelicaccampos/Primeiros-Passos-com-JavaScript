class Carro {
    marca;
    cor;
    gastoMedioCombustivelKm;

    constructor(marca, cor, gastoMedioCombustivelKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioCombustivelKm = gastoMedioCombustivelKm;

    }

    calcularGastosKm(distanciaKm, preco ){
        return distanciaKm * this.gastoMedioCombustivelKm * preco;
    }
}

const uno = new Carro('Fiat', 'perto', 1/12);
console.log("O valor gasto é: $",uno.calcularGastosKm(55,6).toFixed(2));
const palio = new Carro('Fiat', 'perto', 1/10);
console.log("O valor gasto é: $",palio.calcularGastosKm(55,6).toFixed(2));