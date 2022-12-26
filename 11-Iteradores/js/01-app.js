//fot lop
// for (let i = 0; i < 10; i++) {
//     console.log(`numero = ${i}`)
    
// }
// for (let i = 0; i <= 20; i++) {
//     if(i%2 === 0){
//         console.log(`el numero ${i} es par`)
//     }else{
//         console.log(`el numero ${i} es impar`)
//     }
// }

const carrito = [
    {nombre: "monito", precio: 500},
    {nombre: "perrito", precio: 600},
    {nombre: "gatito", precio: 700},
    {nombre: "caballito", precio: 200},
    {nombre: "osito", precio:6500},
    {nombre: "cocodrilito", precio: 200},
    {nombre: "carpinchito", precio: 300},
]

for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i].nombre);  
}