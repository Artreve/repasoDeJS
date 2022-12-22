//Metodos de iteracion de arrays

const carrito = [
    {nombre: "monito", precio: 500},
    {nombre: "perrito", precio: 600},
    {nombre: "gatito", precio: 700},
    {nombre: "caballito", precio: 200},
    {nombre: "osito", precio:6500},
    {nombre: "cocodrilito", precio: 200},
    {nombre: "carpinchito", precio: 300},
]

// for (let index = 0; index < carrito.length; index++) {
//     // console.table(carrito[index])  
// }

carrito.forEach(function(produc){
    console.log(produc)
})