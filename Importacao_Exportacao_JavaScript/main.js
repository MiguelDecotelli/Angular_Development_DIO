// const functions = require('./funcoes_auxiliares');
// console.log(functions.gets());
// functions.print("Tha'ts my secret Cap, I'm always angry!")

const { gets, print } = require('./funcoes_auxiliares');

let maiorValorEncontrado = 0;
for (let i = 0; i < numeros.length; i++) {
    const numeroSorteado = gets();
    if (numeroSorteado > maiorValorEncontrado) {
        maiorValorEncontrado = numeroSorteado;
    }
}


print(maiorValorEncontrado)
