//Agregar elemento en el LS
localStorage.setItem('nombre', 'juan')
//(llave, valor)
sessionStorage.setItem('nombre', 'juan')

//estos solo guardan elemento JSON
//cargar un objeto
 const prod ={
    nombre: 'Monitor',
    precio: 500
 }
 const prodString = JSON.stringify(prod)
 localStorage.setItem('producto', prodString)

 