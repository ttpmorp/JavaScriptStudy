// Definição do preço do combustível, consumo de combustível e distância da viagem
const preco_combustivel = 5.79;
const gasto_combustivel = 10;
const distancia_viagem = 100;

// Cálculo do valor da viagem
const valor_viagem = (distancia_viagem / gasto_combustivel) * preco_combustivel;

// Imprime o valor da viagem formatado com duas casas decimais
console.log(valor_viagem.toFixed(2));
