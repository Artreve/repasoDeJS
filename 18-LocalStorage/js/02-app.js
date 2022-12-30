//Obtner datos almacenados
const nombreProd = localStorage.getItem('nombre')

const producJSON = localStorage.getItem('producto')
console.log(JSON.parse(producJSON))
