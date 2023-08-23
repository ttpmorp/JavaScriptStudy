function calcularValorViagem(precoCombustivel, gastoCombustivel, distanciaViagem) {
    const valorViagem = (distanciaViagem / gastoCombustivel) * precoCombustivel;
    return valorViagem.toFixed(2);
}

const precoCombustivel = 5.79;
const gastoCombustivel = 10;
const distanciaViagem = 100;

const valorViagemCalculado = calcularValorViagem(precoCombustivel, gastoCombustivel, distanciaViagem);

console.log(valorViagemCalculado);
