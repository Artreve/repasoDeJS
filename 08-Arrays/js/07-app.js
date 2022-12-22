//Forma imperativa, va a modificar el objeto
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
const producto4 = {
    nombre: "vela",
    precio: 400
}
const producto5 = {
    nombre: "pizarra",
    precio: 400
}
//esta manera de trabajar se llama imperativa
carrito.push(producto)
carrito.push(producto2)
carrito.push(producto3)
carrito.push(producto4)
carrito.push(producto5)

//Eliminar ultimo elemento del arreglo
// carrito.pop()

//Eliminar el primer elemento del arreglo
carrito.shift()

//eliminar algun elemento en el medio del array
carrito.splice(2,1)
//posicion del elemento,cuantos elementos quiero eliminar desde la posicion

console.table(carrito)