class Pessoa{
    nome;
    idade;
    anoNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoNascimento = 2023 - idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos`);
        
    }
}



const julia = new Pessoa('Julia', 23);
const renan = new Pessoa('Renan', 30);


julia.descrever(julia);
renan.descrever(renan);