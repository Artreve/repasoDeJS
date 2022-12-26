//reducter: tomar una gran cantidad de datos, los une y nos entrega un resultado
const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

let resultado = carrito.reduce((total, producto)=> total + producto.precio, 0)
//(valor acumulado,valor a acumular), valor a iniciar (opcional)
