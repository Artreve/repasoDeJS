const producto = "Monitor 20 Pulgadas"
//Reemplazar contenido texto
console.log(producto.replace('Pulgadas','"'))

//Extraer o cortar una parte del texto
console.log(producto.slice(0,10))
//posicion de donde quieres empezar a cortar y donde terminar

//Añternativa a slice
console.log.apply(producto.substring(0,10))
//si el valor de inicio es mayor al del final, lo invertira y cortara, esa es la diferencia con el slice

//obtener una letra por su posicion
console.log(producto.charAt(0))