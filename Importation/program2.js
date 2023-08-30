const { gets, print } = require('./randow'); // Importa funções 'gets' e 'print' (assumindo que essas funções são providas em './randow')

const numerosSorteados = []; // Cria um array vazio chamado 'numerosSorteados' para armazenar os números inseridos pelo usuário

// Loop para sortear e armazenar 5 números
for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets(); // Obtém um número do usuário (assumindo que a função 'gets' coleta entradas do usuário)
    numerosSorteados.push(numeroSorteado); // Adiciona o número sorteado ao array 'numerosSorteados'
}

let maiorValor = 0; // Inicializa a variável 'maiorValor' com 0

// Loop para encontrar o maior valor no array 'numerosSorteados'
for (let i = 0; i < numerosSorteados.length; i++) {
    const numeroSorteado = numerosSorteados[i]; // Obtém o número atual do array 'numerosSorteados'
    if (numeroSorteado > maiorValor) { // Verifica se o número atual é maior que 'maiorValor'
        maiorValor = numeroSorteado; // Atribui o número atual a 'maiorValor' se ele for maior
    }
}

print(maiorValor); // Imprime o maior valor encontrado no array 'numerosSorteados' usando a função 'print'

