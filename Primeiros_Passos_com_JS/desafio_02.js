
let precoEtanol = 4.25;

let precoGasolina = 5.51

let kmPorLitro = 10;

let kmDistanciaViagem = 450;

let combustivelConsumido = kmDistanciaViagem / kmPorLitro

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Qual o combustível usado na viagem? ', combustivel => {
    if (combustivel === 'etanol') {
        valorViagem = combustivelConsumido * precoEtanol;
        console.log(`A viagem custou R$ ${valorViagem.toFixed(2)}`);
    } else if (combustivel === 'gasolina') {
        valorViagem = combustivelConsumido * precoGasolina;
        console.log(`A viagem custou R$ ${valorViagem.toFixed(2)}`);
    }
    readline.close();
  });



