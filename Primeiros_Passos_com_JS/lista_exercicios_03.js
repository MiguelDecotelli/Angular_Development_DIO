let preco = 100;
let formaDePagamento = "\n[1] - Débito \n[2] - Dinheiro ou PIX \n[3] - 2 vezes sem Juros \n[4] - 3 ou mais vezes\n->"

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

readline.question(`Escolha a forma de pagamento: ${formaDePagamento} `, pagamento => {
if (pagamento === '1'){
    console.log(`Valor a ser pago é R$ ${(preco * .9).toFixed(2)}`)
} else if (pagamento === '2'){
    console.log(`Valor a ser pago é R$ ${(preco * .85).toFixed(2)}`)
} else if (pagamento === '3'){
    console.log(`Valor a ser pago é R$ ${(preco).toFixed(2)}`)
} else if (pagamento === '4'){
    console.log(`Valor a ser pago é R$ ${(preco * 1.1).toFixed(2)}`)
}
readline.close();
});