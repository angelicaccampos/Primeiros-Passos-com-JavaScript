const { gets, print } = require('./exercicioMaiorNumeroSorteado');

const numsSorteados = [];

for (let index = 0; index < 5; index++) {
    const numsSorteado = gets();
    numsSorteados.push(numsSorteado)
}

let maiorValor = -1;
for (let index = 0; index < numsSorteados.length; index++) {
    const numsSorteado = numsSorteados[index];
    if (numsSorteado > maiorValor) {
        maiorValor = numsSorteado;
    }
}
let menorValor = 100;
for (let index = 0; index < numsSorteados.length; index++) {
    const numsSorteado = numsSorteados[index];
    if (numsSorteado < menorValor) {
        menorValor = numsSorteado;
    }
}

print(numsSorteados);
print(maiorValor);
print(menorValor);