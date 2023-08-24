class Pessoa{
    nome;
    idade;

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos`);
        
    }
}


const julia = new Pessoa();
julia.nome = 'Julia C Silva'
julia.idade = 23

const renan = new Pessoa();
renan.nome = 'Renan J Paula'
renan.idade = 30


julia.descrever();
renan.descrever();