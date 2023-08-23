function calcularStatus(n1, n2, n3) {
    const media = (n1 + n2 + n3) / 3;
    let status = '';

    if (media < 5) {
        status = 'REPROVADO';
    } else if (media >= 5 && media <= 7) {
        status = 'RECUPERAÇÃO';
    } else {
        status = 'PASSOU DE SEMESTRE';
    }

    return status;
}

const n1 = 1;
const n2 = 9;
const n3 = 4;

const statusFinal = calcularStatus(n1, n2, n3);

console.log(`O status é: ${statusFinal}`);
