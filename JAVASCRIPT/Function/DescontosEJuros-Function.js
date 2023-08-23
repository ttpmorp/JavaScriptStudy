function aplicarDesconto(valor, desconto){
    return(valor - (valor * desconto / 100));
}
function aplicarJuros(valor, juros){
    return valor + (valor  *(juros / 100));
}

const p = 100;
const tipoPag = 'Parcela';

if(tipoPag === 'Débito'){
console.log(aplicarDesconto(p, 10));
}
else if(tipoPag === 'Dinheiro' || tipoPag ==='Pix'){
console.log(aplicarDesconto(p, 15));
}
else if(tipoPag === '2x'){
console.log(p);
}
else if(tipoPag === 'Parcela'){
console.log(aplicarJuros(p, 10));
}


//Cálculo porcentagem de duas formas diferente
console.log(200 * 10 / 100); // normal
console.log(200 * 0.10); // ponto flutuante
// resultado o mesmo