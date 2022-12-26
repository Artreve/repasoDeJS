//fine: crear nuevo arreglo con la condicion que estamos realizando solamente al primer elemento que encuentre del arreglo
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]
let resultado = carrito.find(product => product.precio === 100)
console.log(resultado)