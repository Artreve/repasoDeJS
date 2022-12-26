//&&
const usuario = true;
const puede_pagar =true;
const tarjeta = true

if(usuario <= puede_pagar ){
   console.log('si pode comprar');
}else if(!usuario){
    console.log("inicia sesion o crea una cuenta");
}else if (!puede_pagar){
   console.log('fondos insuficientes');
}else{
    console.log('no puede comprar')
}