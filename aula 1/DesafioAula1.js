/*
Faça um program para calcular o alor de uma viagem de carro.

 Valor do combustivel
 Gasto médio do combustivel do carro por km
 Distancia em km do trajeto da viagem

Imprima o valor gasto na viagem

*/
console.log("Valor da viagem");

const PrecoCombustivel = 5;
const GastoMedioCombustivel = 8;
const Distancia = 1000;

const TotalCombustivel = Distancia / GastoMedioCombustivel;
const ValorTotal = TotalCombustivel * PrecoCombustivel

console.log("O valor do etanol é: $", PrecoCombustivel);
console.log("O Gasto Medio Combustivel é:", GastoMedioCombustivel, "Km/L");
console.log("A Distancia total é:", Distancia, "Km");
console.log("O valor total da viagem é: $", ValorTotal.toFixed(2));
