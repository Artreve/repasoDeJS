const producto = 'Monitor 20\"'
console.log(producto)
console.log(producto.length); //sacar la cantidad de letras de la cadena de texto

console.log(producto.indexOf('Monitor')) // verifica si el contenido de nuestro string tiene la palabra que deseamos buscar y nos da como resultado la posicion de la cadena donde comienza la palabra
console.log(producto.includes('Monitor')) //nos da un valor booleano de la coincidencia del string
//NOTA: estas propiedades verifican Mayus y Mins.