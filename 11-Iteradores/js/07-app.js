//for of
const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JS']

const carrito = [
    {nombre: "monito", precio: 500},
    {nombre: "perrito", precio: 600},
    {nombre: "gatito", precio: 700},
    {nombre: "caballito", precio: 200},
    {nombre: "osito", precio:6500},
    {nombre: "cocodrilito", precio: 200},
    {nombre: "carpinchito", precio: 300},
]
for (let pendiente of pendientes) {
    console.log(pendiente)
}
for (let producto of carrito) {
    console.log(producto)
    
}