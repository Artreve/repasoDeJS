//Agregar objetos dentro de otro objeto
const producto = {
    nombre: 'Monitor de 20"',
    precio: 300,
    disponible: true,
    informacion: {
        medidas:{
            peso: "1kg",
            medida: "1m"
        },
        fabricacion:{
            pais: "China"
        }
    }
}

//acceso
console.log(producto.informacion.fabricacion.pais)