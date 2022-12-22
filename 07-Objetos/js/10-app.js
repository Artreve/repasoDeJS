//Unir dos objetos
const producto = {
    nombre: 'Monitor de 20"',
    precio: 300,
    disponible: true
}
const medidas ={
    peso:"1kg",
    medida:"1m"
}
 const resultado = Object.assign(producto, medidas);

 //otra alternativa
 const resultado2 = {...producto,medidas
}

console.log(resultado)
console.log(resultado2)