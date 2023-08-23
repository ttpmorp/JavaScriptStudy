function escrevaNome(nome){
    console.log('Meu nome é: ' + nome);
}

escrevaNome('Júlia');
escrevaNome('Bob');

function verificarIdade(idade){
    if(idade <= 18){
        console.log('Menor de idade!')
    } 
    else{
        console.log('Maior de idade!')
    }
}

verificarIdade(23);