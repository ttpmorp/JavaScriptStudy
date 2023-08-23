const peso = 150;
const altura = 1.67;

const imc = peso / (altura * altura);

console.log('Seu IMC é igual a', imc.toFixed(2));

if(imc < 18.5){
    console.log('Logo, você está ABAIXO DO PESO!');
}
else if(imc >= 18.5 && imc <= 25){
    console.log('Logo, você está com PESO NORMAL!');
}
else if(imc >= 25 && imc <= 30){
    console.log('Logo, você está ACIMA DO PESO!');
}
else if(imc >= 30 && imc <= 40){
    console.log('Logo, você está OBESO!');
}
else {
    console.log('Logo, você está com OBESIDADE GRAVE!')
}