// funciones que retornas valores
function sumar (a,b){
    return a+b;
}

const resultado= sumar(2,3)
console.log(resultado)

let total = 0;
function  agregarCarrito(precio){
    return total+= precio
 }
function calcularImpuestos(total){
    return total * 1.15 //impuestos
}
total = agregarCarrito(300);
total = agregarCarrito(200);
total = agregarCarrito(400);

const totalAPagar = calcularImpuestos(total)
console.log(total)
console.log(`El total a pagar es de: ${totalAPagar}`)