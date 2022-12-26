//Fine index, nos permite saber en que indice de nuestro arreglo se encuentra nuestro elemento
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]
 const indice = meses.findIndex(mes => mes === 'Abril');
 console.log(indice)
 //si no existe un elemento, nos dara -1

 const indice2 = carrito.findIndex(produt => produt.precio === 400)
 console.log(indice2)
 //fineIndex, solo retorta el primer valor que encuentre dentro del arreglo