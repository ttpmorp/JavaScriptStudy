// Definição da função calcularValorViagem
function calcularValorViagem(precoCombustivel, gastoCombustivel, distanciaViagem) {
    const valorViagem = (distanciaViagem / gastoCombustivel) * precoCombustivel;
    return valorViagem.toFixed(2); // Retorna o valor da viagem formatado com duas casas decimais
}

// Valores utilizados para os cálculos
const precoCombustivel = 5.79;
const gastoCombustivel = 10;
const distanciaViagem = 100;

// Chamada da função calcularValorViagem com os argumentos dados
const valorViagemCalculado = calcularValorViagem(precoCombustivel, gastoCombustivel, distanciaViagem);

// Imprime o valor calculado da viagem
console.log(valorViagemCalculado);
