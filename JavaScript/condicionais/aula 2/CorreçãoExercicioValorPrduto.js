/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
1- À vista Débito, recebe 10% de desconto;
2- À vista no Dinheiro ou PIX, recebe 15% de desconto;
3- Em duas vezes, preço normal de etiqueta sem juros;
4- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;

Para resolver o problema as condições de pagamento foram enumeradas e usadas nos condicionais
*/
const precoEtiqueta = 100;
const condiçãoPagamento = 1;

console.log('Preço da etiqueta: $', precoEtiqueta);
console.log('Condição de pagamento:', condiçãoPagamento);

if (condiçãoPagamento === 1) {
    console.log('Preço a ser pago: $', precoEtiqueta - (precoEtiqueta * 0.1));
} else if (condiçãoPagamento === 2) {
    console.log('Preço a ser pago: $', precoEtiqueta - (precoEtiqueta * 0.15));
} else if (condiçãoPagamento === 3) {
    console.log('Preço a ser pago: $', precoEtiqueta);
} else {
    console.log('Preço a ser pago: $', precoEtiqueta + (precoEtiqueta * 0.1));
}