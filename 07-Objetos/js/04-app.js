//Acceder a valores de un objeto y asignarlo a una variable
const producto = {
    nombre: 'Monitor de 20"',
    precio: 300,
    disponible: true
}


// producto.nombre
// const nombre = producto.nombre;
// console.log(nombre)

//Destructuring ...seria desestructuracion?
const {nombre, precio } = producto
console.log(nombre)
console.log(precio)