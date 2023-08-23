const gastoCombustivel = 10;
const distancia = 100;

// etanol = 4.39;
// gasolina = 5.52; 

const valorCombustivel = 5.52;

if(valorCombustivel === 4.39){
    const gastoMedio = (distancia/gastoCombustivel) * valorCombustivel;
    console.log(gastoMedio.toFixed(2));
}
else if(valorCombustivel === 5.52){
    const gastoMedio = (distancia/gastoCombustivel) * valorCombustivel;
    console.log(gastoMedio.toFixed(2));
}
else{
    console.log("VALOR INVÁLIDO!")
}