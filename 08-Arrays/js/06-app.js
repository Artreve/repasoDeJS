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
//forma declarativa: expresa la logica sin describir tanto en el flujo de control. Este no modifica el objeto
let resul = [...carrito, producto]
 resul = [producto3,...carrito]