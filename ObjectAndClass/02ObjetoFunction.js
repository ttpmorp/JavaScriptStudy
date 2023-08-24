const pessoa = {
    nome: 'Julia C Silva',
    idade: 23,

    descrever: function() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos`);
    }
};

/* Colocando esses valores, altera o valor da função do objeto
pessoa.nome = 'Bob';
pessoa.idade = 30; */

pessoa.descrever();
