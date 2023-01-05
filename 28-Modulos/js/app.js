import { Empresa } from "./empresa"
import nuevaFuncion, { nombreCliente,ahorros, mostrarInformacion, Cliente } from "./cliente"
//importamos
nuevaFuncion()
console.log(nombreCliente)
console.log(ahorros)
console.log(mostrarInformacion(nombreCliente,ahorros))
const cliente = new Cliente(nombreCliente,ahorros)
console.log(cliente.mostrarInformacion)

const empresa = new Empresa ('Juan',100,'Caja de Ahorro')
console.log(empresa)


