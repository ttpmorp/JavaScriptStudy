function verificarParImpar(n) {
    if (n === 0) {
        return 'INVÁLIDO';
    } else if (n % 2 === 0) {
        return 'PAR';
    } else {
        return 'ÍMPAR';
    }
}

const n = 0;
const resultado = verificarParImpar(n);
console.log(resultado);
