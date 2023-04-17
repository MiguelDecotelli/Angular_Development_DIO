
class Carro {
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm.toFixed(2);
    }
    descricao() {
        console.log(`O carro ${this.carro} da cor ${this.cor} consome ${this.gastoMedioPorKm}`);
    }
    
    calcularConsumo(distancia, combustivel){
        const consumoCalculado = distancia * this.gastoMedioPorKm * combustivel;
        return `O Valor gasto para o ${this.marca} foi de R$ ${consumoCalculado.toFixed(2)}.`
    }
}

const onix = new Carro('Chevrolet', 'Chumbo', 1/10);


console.log(onix);

console.log(onix.calcularConsumo(70, 5))
