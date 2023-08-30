const notas = [];

// Adicionar valores ao array de notas
notas.push(5);
notas.push(7);
notas.push(8);
notas.push(2);
notas.push(5);

// Inicializar a variável 'soma' como 0
let soma = 0;

// Loop que percorre cada nota no array 'notas'
for (let i = 0; i < notas.length; i++) {
    // Obtém a nota atual na posição 'i' do array 'notas'
    const notaAtual = notas[i];
    
    // Adiciona a nota atual à soma
    soma = soma + notaAtual;
}

// Calcula a média das notas dividindo a soma pelo número de notas
const media = soma / notas.length;

// Imprime a média com duas casas decimais
console.log(media.toFixed(2));
