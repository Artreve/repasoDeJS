//Desestructuracion con arreglos
const numeros = [10,20,30,40,50]

const [primero, segundo, tercero] = numeros;
console.log(tercero)

//Pero si no queremos los dos primero valores, pero si el tercero, no podemos agregar esto
// const [ tercero] = numeros;
//porque estaria tomando solo el elemento de la primera posicion, para ello debemos 

const [ , , tercero2] = numeros;
console.log(tercero2)

//ahora si queremos que el resto de los valores sean array podemos hacer lo siguiente
const [primero2, ...segundo2] = numeros
console.log(segundo2)