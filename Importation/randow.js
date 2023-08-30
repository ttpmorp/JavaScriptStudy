const entradas = [5, 50, 10, 98, 23]; // Valores de entrada fictícios

let i = 0; // Índice para controlar qual valor de entrada será usado

function gets() {
    const valor = entradas[i]; // Obtém o valor atual do array 'entradas'
    i++; // Incrementa o índice para apontar para o próximo valor de entrada
    return valor; // Retorna o valor obtido
}

function print(texto) {
    console.log(texto); // Imprime o texto no console
}

// Exporta as funções 'gets' e 'print' para uso em outros módulos
module.exports = { gets, print };
