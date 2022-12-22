//Metodos para objetos

//use strict: nos permite evitar malas practicas en el documento

"use strict";

const producto = {
    nombre: 'Monitor de 20"',
    precio: 300,
    disponible: true
}

Object.freeze(producto) //toma el objeto que quieres que no sea modificado

producto.disponible = false
producto.imgange = "imagen.jpg"

console.log(Object.isFrozen(producto)) //nos permite saber si el objeto esta congelado

