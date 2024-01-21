console.log('VAMOS CALCULAR O SEU IMC');

function calculo(peso, altura) {
    console.log('O seu IMC é:', (peso / (altura * altura)).toFixed(2));
    return peso / (altura * altura);
}

function classificacao(imc) {
    if (imc < 18.5) {
        return 'Situação: Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        return 'Situação: Peso normal';
    } else if (imc >= 25 && imc < 30) {
        return 'Situação: Acima do peso';
    } else if (imc >= 30 && imc < 40) {
        return 'Situação: Obeso';
    } else {
        return 'Situação: Obsesidade Grave';
    }
}

function main() {
    const peso = 50;
    const altura = 1.62;
    const imc = calculo(peso, altura);
    console.log(classificacao(imc));
}
main();