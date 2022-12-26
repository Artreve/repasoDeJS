const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]
//spread operator  con arreglo de indices
const meses2 = ['Agosto',...meses];
console.log(meses2)
//Agrego agosto al principio del array
//NOTA: NO PONER ..."STRING" PORQUE ESTE CREARA UN ARREGLO POR CADA LETRA
const product = {product:'Disco', precio: 200}
const carrito2 = {...carrito, product}
//NO SE PONE ... EN OBJETOS