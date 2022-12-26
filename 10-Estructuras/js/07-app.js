//||
const efectivo =300;
const credito = 1000;
const disponible = efectivo + credito;
const total_pagar = 600;

if (efectivo > total_pagar || credito > total_pagar){
    console.log('SI PODEMOS PAGAR')
}else{
    console.log('FONDOS INSUFICIENTES')
}