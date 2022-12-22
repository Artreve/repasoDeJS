// const meses =["enero","febrero","marzo","abril","mayo","junio","julio","agosto"]

// //Agregar elemento al final del array
// meses.push("septiembre")

// console.log(meses)

//Ejemplo con carrito

const carrito = [];
const producto = {
    nombre: "Monitor",
    precio: 400
}
const producto2 = {
    nombre: "tablet",
    precio: 400
}
const producto3 = {
    nombre: "celular",
    precio: 400
}
//esta manera de trabajar se llama imperativa
carrito.push(producto)
carrito.push(producto2)

//agregar un elemento en la primera posicion del array
carrito.unshift(producto3)

console.log(carrito)