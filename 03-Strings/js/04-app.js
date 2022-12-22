//Metodos que nos permite eliminar espacios en blanco al inicio y al final
const producto = "                   Monitor 20 Pulgadas                     "
console.log(producto.trimStart());
//Eliminar espacio al final
console.log(producto.trimEnd(producto))

//para ahorrar en espacio hacemos lo siguiente
console.log(producto.trim().trimEnd());
console.log(producto.trim());