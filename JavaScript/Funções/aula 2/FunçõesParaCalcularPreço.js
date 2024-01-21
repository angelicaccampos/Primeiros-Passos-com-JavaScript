console.log('NOTA DA COMPRA');

function calcualrPrecoFinal(precoEtiqueta, condiçãoPagamento, numParcelas) {
    if (numParcelas === 2) {
        console.log('Preço a ser pago: $', precoEtiqueta, 'Sem juros');
    } else if (numParcelas > 2) {
        const precoFinal = precoEtiqueta + (10 * (precoEtiqueta / 100))
        console.log('Preço a ser pago: $', precoFinal, 'com 10% de juros');
    } else {
        if (condiçãoPagamento === 'Débito') {
            const desconto = precoEtiqueta - (10 * (precoEtiqueta / 100));
            console.log('Preço a ser pago: $', desconto);
        } else if (condiçãoPagamento != 'Débito') {
            const desconto = precoEtiqueta - (15 * (precoEtiqueta / 100));
            console.log('Preço a ser pago: $', desconto.toFixed(2));
        }
    }
}

(function () {
    const precoEtiqueta = 100;
    const condiçãoPagamento = 'Débito';
    const numParcelas = 0;
    console.log('Preço da etiqueta: $', precoEtiqueta);
    console.log('Condição de pagamento:', condiçãoPagamento);
    console.log('Quantas parcelas:', numParcelas);
    console.log(calcualrPrecoFinal(precoEtiqueta, condiçãoPagamento, numParcelas));
})();