//Eventos del mouse
const nav = document.querySelector('.navegacion')

//registrar un evento
nav.addEventListener('click',()=>{
    console.log('click en nav')
})

nav.addEventListener('mouseenter',()=>{
    console.log('cuando colocamos el puntero en el navegador')
})

nav.addEventListener('mouseenter',()=>{
    console.log('sacando el puntero del nodo')
})

// mousedown - similar al click
//dbclick - doble click
//mouseup - cuando sueltas el mouse
