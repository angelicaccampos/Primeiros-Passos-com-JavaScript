class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC(peso, altura) {
        return this.peso / (this.altura * this.altura);
    }
    classificarIMC() {
        const imc = this.calcularIMC();

        if (imc < 18.5) {
            return ('Situação: Abaixo do peso');
        } else if (imc >= 18.5 && imc < 25) {
            return ('Situação: Peso normal');
        } else if (imc >= 25 && imc < 30) {
            return ('Situação: Acima do peso');
        } else if (imc >= 30 && imc < 40) {
            return ('Situação: Obeso');
        } else {
            return ('Situação: Obsesidade Grave');
        }
    }
}
const angelica = new Pessoa('Angelica', 50, 1.62);
console.log(angelica.calcularIMC().toFixed(2));
console.log(angelica.classificarIMC());


