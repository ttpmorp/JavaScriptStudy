class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return this.peso / (this.altura * this.altura);
    }

    classificarImc() {
        const imc = this.calcularImc();

        if (imc < 18.5) {
            return ('Logo, você está ABAIXO DO PESO!');
        } else if (imc >= 18.5 && imc <= 25) {
            return ('Logo, você está com PESO NORMAL!');
        } else if (imc >= 25 && imc <= 30) {
            return ('Logo, você está ACIMA DO PESO!');
        } else if (imc >= 30 && imc <= 40) {
            return ('Logo, você está OBESO!');
        } else {
            return ('Logo, você está com OBESIDADE GRAVE!')
        }
    }
}

const jose = new Pessoa('jose', 70, 1.75);
console.log(jose.classificarImc());

const julia = new Pessoa('julia', 65, 1.65);
console.log(julia.classificarImc());

