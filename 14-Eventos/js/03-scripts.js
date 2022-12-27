//eventos del teclado
const busqueda = document.querySelector('.busqueda')
// busqueda.addEventListener('keydown', ()=>{
//     console.log('escribiendo')
// })

// busqueda.addEventListener('keyup', ()=>{
//     console.log('dejo de escribrir')
// })
// busqueda.addEventListener('blur', ()=>{
//     console.log('entro y salio de un imput')
// })
// //esto es bueno para validaciones
// busqueda.addEventListener('copy', ()=>{
//     console.log('copio el contendio')
// })
// busqueda.addEventListener('paste', ()=>{
//     console.log('pega el contendio')
// })
// busqueda.addEventListener('cut', ()=>{
//     console.log('corta el contendio')
// })
// busqueda.addEventListener('input', ()=>{
//     console.log('estoy escuchando el imput')
// })
//este realiza todos los eventos anteriores

//escuchar el contenido del input
// busqueda.addEventListener('imput', (e)=>{
//     console.log(e)
// })

busqueda.addEventListener('input', (e)=>{
    console.log(e.target.value)
})
//ver que contenido se cargo al imput