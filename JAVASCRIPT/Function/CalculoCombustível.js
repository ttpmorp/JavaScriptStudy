const preco_combustivel = 5.79;
const gasto_combustivel = 10;
const distancia_viagem = 100;

const valor_viagem = (distancia_viagem / gasto_combustivel) * preco_combustivel;

 console.log(valor_viagem.toFixed(2));