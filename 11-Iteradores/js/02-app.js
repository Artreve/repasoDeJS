//break y continue
// for (let i = 0; i < 5; i++) {
//     if(i === 5){
//         console.log('este es el 5')
//         break; //detiene le ejecurcion del completamente del for y se sale
//     }
//     console.log(`numero: ${i}`)
    
// }
// for (let i = 0; i < 5; i++) {
//     if(i === 5){
//         console.log('este es el 5')
//        continue; //deja de ejcutar el ciclo en el que estamos dejando de ejucar la siguiente lines
//     }
//     console.log(`numero: ${i}`)
    
// }

const carrito = [
    {nombre: "monito", precio: 500},
    {nombre: "perrito", precio: 600},
    {nombre: "gatito", precio: 700, descuento: true},
    {nombre: "caballito", precio: 200, descuento: true},
    {nombre: "osito", precio:6500},
    {nombre: "cocodrilito", precio: 200},
    {nombre: "carpinchito", precio: 300},
]

for (let i = 0; i < carrito.length; i++) {
   if (carrito[i].descuento){
    console.log(`el articulo ${carrito[i].nombre} posee descuento`)
    continue;
   }
   console.log(carrito[i].nombre)
    
}