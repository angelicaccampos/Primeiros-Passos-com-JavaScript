const notas = [];

notas.push(5);
notas.push(8);
notas.push(2);
notas.push(5);
notas.push(8);

console.log('Quantidade de notas:', notas.length, '\n');
console.log('\nBoletin:');

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const element = notas[i];
    console.log('Nota', i + 1, '=', notas[i]);
    soma = soma + element;
}

const mediaNotas = soma / notas.length;
console.log('\nMédia final:', mediaNotas);
