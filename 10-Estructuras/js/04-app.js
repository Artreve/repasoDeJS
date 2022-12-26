const dinero = 500;
const total_a_pagar =300;
const tarjeta = true

if(dinero <= total_a_pagar){
   console.log('si podemos pagar');
}else if(tarjeta){
    console.log("si podemos pagar");
}else{
   console.log('fondos insuficientes');
}