// Faça um programa q dado um numero imprime a sua tabuada 

const num = 2;

console.log('TABUADA DO', num);

for (let index = 0; index < 11; index++) {
    const tabuada = num * index;
    console.log(num, 'x', index, '=', tabuada);
}
