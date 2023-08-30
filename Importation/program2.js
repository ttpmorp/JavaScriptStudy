const { gets, print } = require('./randow');

const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets(); // Assumindo que essa função obtém entradas do usuário
    numerosSorteados.push(numeroSorteado);
}

let maiorValor = 0;

for (let i = 0; i < numerosSorteados.length; i++) {
    const numeroSorteado = numerosSorteados[i];
    if (numeroSorteado > maiorValor) {
        maiorValor = numeroSorteado;
    }
}

print(maiorValor);
