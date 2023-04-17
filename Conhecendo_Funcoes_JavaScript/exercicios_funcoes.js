
function escreverNome(nome){
    return nome;
}

function maiorDeIdade(escreverNome, idade){
    if (idade >= 18){
        console.log(`${escreverNome} tem ${idade} anos e é maior de idade.`);
    }else {
        console.log(`${escreverNome} tem ${idade} anos e é menor de idade.`);
    }
}

maiorDeIdade('Miguel', 40)

// // FORMA DE PAGAMENTO

function aplicarDesconto(preco, desconto) {
    return preco - (preco * (desconto / 100))
}
function aplicarJuros(preco, desconto){
    return preco + (preco * (desconto / 100))
}

let preco = 100;
let formaDePagamento = "\n[1] - Débito \n[2] - Dinheiro ou PIX \n[3] - 2 vezes sem Juros \n[4] - 3 ou mais vezes\n->"

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

readline.question(`Escolha a forma de pagamento: ${formaDePagamento} `, pagamento => {
if (pagamento === '1'){
    console.log(`Valor a ser pago é R$ ${aplicarDesconto(preco,10).toFixed(2)}`)
} else if (pagamento === '2'){
    console.log(`Valor a ser pago é R$ ${aplicarDesconto(preco, 15).toFixed(2)}`)
} else if (pagamento === '3'){
    console.log(`Valor a ser pago é R$ ${preco.toFixed(2)}`)
} else if (pagamento === '4'){
    console.log(`Valor a ser pago é R$ ${aplicarJuros(preco, 10).toFixed(2)}`)
}
readline.close();
});