//Metodos para objetos

//use strict: nos permite evitar malas practicas en el documento

"use strict";

const producto = {
    nombre: 'Monitor de 20"',
    precio: 300,
    disponible: true
}

Object.seal(producto) //No se pueden agregar ni elimilar propiedades, pero si se puede modificar las existentes

// producto.disponible = false
// producto.imangen = "imagen.jpg"

console.log(Object.isSealed(producto)) //nos permite saber si el objeto esta congelado