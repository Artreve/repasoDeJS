// Async Await 

function descargarClientes() {
    return new Promise((resolve, reject) => {
        const error = true;

        setTimeout( () => {
            if(!error) {
                resolve('El Listado de Clientes se descargo correctamente'); 
            } else {
                reject('No se pudo aplicar el descuento');
                
            }            
        }, 3000);

    });
}

// Async await
//Asyc debe tener la funcion padre y await la funcion donde debemos detener la ejecucion (mayormente la de consultas de apis o db)
async function ejecutar() {
    try {
        const respuesta = await descargarClientes(); // Deten la ejecución hasta que se reciba una respuesta de la funcion...
        console.log(respuesta);
    } catch (error) {
        console.log(error)
    }

}
ejecutar();

console.log( 2 + 2); // Este código se continua ejecutando mientras que el await sigue esperando por su respuesta