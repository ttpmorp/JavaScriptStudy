function calcularIMC(peso, altura) {
    const imc = peso / (altura * altura);
    let status = '';

    if (imc < 18.5) {
        status = 'ABAIXO DO PESO';
    } else if (imc >= 18.5 && imc <= 25) {
        status = 'PESO NORMAL';
    } else if (imc >= 25 && imc <= 30) {
        status = 'ACIMA DO PESO';
    } else if (imc >= 30 && imc <= 40) {
        status = 'OBESO';
    } else {
        status = 'OBESIDADE GRAVE';
    }

    return {
        imc: imc.toFixed(2),
        status: status
    };
}

const peso = 150;
const altura = 1.67;

const resultadoIMC = calcularIMC(peso, altura);

console.log(`Seu IMC é igual a ${resultadoIMC.imc}`);
console.log(`Logo, você está ${resultadoIMC.status}!`);
