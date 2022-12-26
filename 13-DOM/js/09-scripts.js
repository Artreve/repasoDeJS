//traversing dom: recorrer el documento
const navegacion = document.querySelector('.navegacion')
// console.log(navegacion.childNodes)//los espacios en blancos son considerados como elementos (los salto de linea)

// console.log(navegacion.children)//muestrs elementos reales

const card = document.querySelector('.card')
// console.log(card.children[1].children[1].textContent)

// card.children[0].src ='../img/hacer3.jpg'
// console.log(card.children[0])

//Traversing del hijo al padre
// console.log(card.parentElement)//encuentra al padre

//Traversing al hermano
// console.log(card.nextElementSibling)
// console.log(card.nextElementSibling.nextElementSibling)

const ultimoCard = document.querySelector('.card:nth-child(4)')

console.log(navegacion.firstElementChild)
//Acceder al primer nodo

console.log(navegacion.lastElementChild)
//acceder al ultimo nodo