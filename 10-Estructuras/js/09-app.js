// Operador ternario
const autenticado = true;
const puedePagar = true;
 console.log (autenticado ? 'si esta autenticado' : 'no esta autenticado')
console.log(autenticado && puedePagar ? 'si puede pagar' : 'no esta autenticado')
 
//ternario anidado
console.log(autenticado ? puedePagar ? 'si esta autenticado':'si esta autenticado, no puede pagar' : 'no estra auntenicado')