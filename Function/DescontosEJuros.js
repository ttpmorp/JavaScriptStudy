const p = 100;
const debito = (p * 10) / 100;
const dinheiro = (p * 15) / 100;
const parcela =(p * 10) / 100;

const tipoPag = 'Parcela';

if(tipoPag === 'Débito'){
    console.log( p - debito);
}
else if(tipoPag === 'Dinheiro' || tipoPag ==='Pix'){
    console.log(p - dinheiro);
}
else if(tipoPag === '2x'){
    console.log(p);
}
else if(tipoPag === 'Parcela'){
    console.log(p + parcela);
}