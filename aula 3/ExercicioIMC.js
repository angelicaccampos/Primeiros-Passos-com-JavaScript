/*
2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obsesidade Grave;
*/

console.log('Vamos calcular o seu IMC')

const peso = 50;
const altura = 1.62;
const imc = peso / (altura * altura);

console.log('O seu IMC é:', imc.toFixed(2));

if (imc < 18.5) {
    console.log('Situação: Abaixo do peso');
} else if (imc >= 18.5 && imc < 25) {
    console.log('Situação: Peso normal');
} else if (imc >= 25 && imc < 30) {
    console.log('Situação: Acima do peso');
} else if (imc >= 30 && imc < 40) {
    console.log('Situação: Obeso');
} else {
    console.log('Situação: Obsesidade Grave');
}