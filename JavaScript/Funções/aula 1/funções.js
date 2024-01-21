function nomeFuncao(valor) {
    console.log('Meu nome é:', valor);
}
nomeFuncao('Angelica');

function numerosMultiplica(valor) {
    return valor * valor;
}
const multiplicador = numerosMultiplica(4);
console.log(multiplicador);

function numerosSoma(valor) {
    return valor + valor;
}
console.log(numerosSoma(1) + numerosSoma(1));

function incrementaJuros(valor, percentualJuros) {
    const valorAcrecimo = (percentualJuros / 100) * valor;
    return valor + valorAcrecimo;
}
console.log(incrementaJuros(100, 10));
console.log(incrementaJuros(100, 15));


function nomeFuncao(valor) {
    return 'Meu nome é ' + valor;
}

function verificarIdade(idade) {
    if (idade < 18) {
        console.log(nomeFuncao('Angelica, ') + ' Menor de idade');
    } else {
        console.log(nomeFuncao('Angelica, ') +'Maior de idade');
    }
}
verificarIdade(18);
