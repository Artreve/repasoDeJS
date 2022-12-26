const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]
//comprobar si un valor existe en un arreglo
const resultado = meses.includes('Enero')
console.log(resultado)
//este solo funciona con arreglos de indices, no en arreglos de objetos

const resultado2 = carrito.some(product=>{return product.nombre = 'Celular'})
//con este vemos si existe el elemento en un arreglo de objetos. Tambien acepta de indices