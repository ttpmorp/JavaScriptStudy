function calcularGastoMedioCombustivel(gastoCombustivel, distancia, valorCombustivel) {
    if (valorCombustivel === 4.39 || valorCombustivel === 5.52) {
        const gastoMedio = (distancia / gastoCombustivel) * valorCombustivel;
        return gastoMedio.toFixed(2);
    } else {
        return "VALOR INVÁLIDO!";
    }
}

const gastoCombustivel = 10;
const distancia = 100;
const valorCombustivel = 5.52;

const gastoMedioCalculado = calcularGastoMedioCombustivel(gastoCombustivel, distancia, valorCombustivel);

console.log(gastoMedioCalculado);
