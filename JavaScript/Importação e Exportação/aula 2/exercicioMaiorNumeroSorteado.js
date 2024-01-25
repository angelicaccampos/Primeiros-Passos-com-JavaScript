/**
 * Uma sala tem cinco alunos e para cada cada foi sorteado um numero de 1-100
 * Faça um program que receba os 5 numeros sorteados para os alunos e mostre o mais numero
 */

const numsSorteado = [2, 63, 58, 41, 26];
let i = 0;

function gets() {
    const valores = numsSorteado[i];
    i++;
    return valores;

}

function print(texto) {
    console.log(texto);
}

module.exports = { gets, print }
