// const primerEnlase = document.querySelector('a')
// primerEnlase.remove()

//Eliminar desde el padre
const navegacion = document.querySelector('.navegacion')
console.log(navegacion.children)

navegacion.removeChild(navegacion.children[2])
//Aqui pasamos la referencia del elemento que deseamos eliminar