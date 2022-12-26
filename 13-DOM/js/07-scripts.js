const encabezado = document.querySelector('.contenido-hero h1').textContent
console.log(encabezado)

// console.log(encabezado.innerHTML)
// console.log(encabezado.textContent)
// console.log(encabezado.innerText)// si en el CSS - visibility: hidden; no lo va a encontrar

//cambiamos de valor 
document.querySelector('.contenido-hero h1').textContent = 'nuevo heading'

const imagen = document.querySelector('.card img')
imagen.src ='./img/hacer2.jpg'
