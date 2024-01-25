// crie um programa que percorre uma lista de numeros e imprime somente os pares

const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let index = 0; index < numeros.length; index++) {
    const pares = numeros[index];

    if (pares % 2 == 0) {
        console.log(pares);
    }
}