//Metodo map
const carrito = [
    {nombre: "monito", precio: 500},
    {nombre: "perrito", precio: 600},
    {nombre: "gatito", precio: 700},
    {nombre: "caballito", precio: 200},
    {nombre: "osito", precio:6500},
    {nombre: "cocodrilito", precio: 200},
    {nombre: "carpinchito", precio: 300},
]

//map crea un arreglo nuevo donde estan los elemetos de arreglo
const newArreglo = carrito.map(function(prod){
    return prod
})
console.log(newArreglo)