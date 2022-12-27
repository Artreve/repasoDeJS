console.log(1)
document.addEventListener('DOMContentLoaded', () =>{
    console.log('documento listo')
})
console.log(3)
//si ejecutamos esto tendremos el siguiente resultado
//1,3,2 esto sucede porque los eventos esperan la caga de todo el documento para poder ejecutarse