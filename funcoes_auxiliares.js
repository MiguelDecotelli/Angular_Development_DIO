numeros = [5, 50, 10, 98, 23];
let i = 0;
// maiorNumero = 0

function gets() {
    // return "Hello World!"
    
    const valor = numeros[i];
    i++;
    return valor;

    // for (let i = 0; i < numeros.length; i++) {
    //     if (numeros[i] > maiorNumero){
    //         maiorNumero = numeros[i]
    //     }
    // }
    // return maiorNumero
}


function print(texto) {
    console.log(texto)
}

module.exports = {gets, print};

// MINHA SOLUÇÃO:


// function gets() {
    
    // maiorNumero = 0
    // for (let i = 0; i < numeros.length; i++) {
    //     if (numeros[i] > maiorNumero){
    //         maiorNumero = numeros[i]
    //     }
    // }
    // return maiorNumero
// }