/*
3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/
const precoEtiqueta = 100;
const condiçãoPagamento = 'PIX';
const numParcelas = 12;

console.log('Preço da etiqueta: $', precoEtiqueta);
console.log('Condição de pagamento:', condiçãoPagamento);
console.log('Quantas parcelas:', numParcelas);

if (numParcelas === 2) {
    console.log('Preço a ser pago: $', precoEtiqueta, 'Sem juros');
} else if (numParcelas > 2) {
    const precoFinal = precoEtiqueta + (10 * (precoEtiqueta / 100))
    console.log('Preço a ser pago: $', precoFinal,'com 10% de juros');
} else {
    if (condiçãoPagamento === 'Débito') {
        const desconto = precoEtiqueta - (10 * (precoEtiqueta / 100));
        console.log('Preço a ser pago: $', desconto);
    } else if (condiçãoPagamento != 'Débito') {
        const desconto = precoEtiqueta - (15 * (precoEtiqueta / 100));
        console.log('Preço a ser pago: $', desconto.toFixed(2));
    }
}

/* CORREÇÃO EM OUTRO ARQUIVO*/