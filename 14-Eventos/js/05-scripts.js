//eventos scroll
window.addEventListener('scroll', ()=>{
    const premium = document.querySelector('.premium')
const ubicacion = premium.getBoundingClientRect()
//obtenemos informacion de la ubicacion del nodo
    console.log(ubicacion)
    if(ubicacion.top < 784 /*pixeles*/){
        console.log('El elemento ya es visible')
    }else{
        console.log('Aún no lo veo')
    }
})