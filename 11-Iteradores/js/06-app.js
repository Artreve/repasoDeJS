//forEanch

const pendientes = ['Tarea', 'Comer', 'Proyecto', 'Estudiar JS']
pendientes.forEach(element => {
    console.log(element)
});
const carrito = [
    {nombre: "monito", precio: 500},
    {nombre: "perrito", precio: 600},
    {nombre: "gatito", precio: 700},
    {nombre: "caballito", precio: 200},
    {nombre: "osito", precio:6500},
    {nombre: "cocodrilito", precio: 200},
    {nombre: "carpinchito", precio: 300},
]
carrito.forEach((producto,index) => console.log(`${index} : ${producto}`))

const newArreglo = carrito.map(producto=>producto.nombre)

console.log(newArreglo)