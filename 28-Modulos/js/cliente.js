//ESTO NOS PERMITE TENER TODOS NUESTRO CODIGO LOCALMENTE SIN ACCESO DE OTROS ARCHIVOS MAYORMENTE CUANDO QUEREMOS MANTENER NUESTRAS VARIABLES PRIVADAS
// (function(){
//     console.log('desde un IIFE')
// })()

//Pero si deceamos que algunas variables o funciones puedan verse, insertamos window
// (function(){
//     console.log('desde un IIFE')
//     window.nombreCliente ='Juan'
// })()

//Ahora, si deseamos tener "exportar" ciertas variables, podemos utilizar
 export const nombreCliente = 'Juan';
 export const ahorros = 200;

 //Exportar funciones
 export function mostrarInformacion (nombre,ahorro){
    console.log(`Cliente ${nombre} - Ahorro: ${ahorro}`)
 }

 //Exportar clases
 export class Cliente {
    constructor(nombre, saldo){
        this.nombre = nombre
        this.saldo = saldo
    }
    mostrarInformacion(){
        return `Cliente ${this.nombre} - Ahorro: ${this.ahorro}`
    }
 }
  export default function nuevaFuncion(){
    console.log(' este es el export default')
  }
  //No se puede tener mas de 1 export default