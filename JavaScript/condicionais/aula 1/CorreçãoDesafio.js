/*
Faça um program para calcular o alor de uma viagem de carro.

Serão cinco variaveis:

1- Preço do etanol
2- Preço da gasolina
3- O tipo de combustivel que está no carro 
4- Gasto médio do combustivel do carro por km
5- Distancia em km do trajeto da viagem

Imprima o valor gasto na viagem

*/
console.log("Valor da viagem");

const PrecoEtanol = 4;
const PrecoGasolina = 5;
const TipoCombustivel = 'Gasolina';
const GastoMedioCombustivel = 10;
const Distancia = 100;

const TotalCombustivel = Distancia / GastoMedioCombustivel;

console.log("O valor do etanol é: $", PrecoEtanol);
console.log("O valor da gasolina é: $", PrecoGasolina);
console.log("O Tipo de Combustivel é:", TipoCombustivel);
console.log("O Gasto Medio Combustivel é:", GastoMedioCombustivel, "Km/L");
console.log("A Distancia total é:", Distancia, "Km");

if (TipoCombustivel === 'Etanol') {
    const ValorGasto = TotalCombustivel * PrecoEtanol;
    console.log("O valor total da viagem é: $", ValorGasto.toFixed(2));
} else {
    const ValorGasto = TotalCombustivel * PrecoGasolina;
    console.log("O valor total da viagem é: $", ValorGasto.toFixed(2));
}
