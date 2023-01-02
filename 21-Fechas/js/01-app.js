//Metodos de fechas
const diaHoy = new Date();
let valor;
valor =diaHoy;
valor = diaHoy.getFullYear()//año actual
valor = diaHoy.getMonth()//mes actual
valor = diaHoy.getMinutes()//minutos actual
valor = diaHoy.getHours()//hora actual
console.log(diaHoy)
valor = diaHoy.setFullYear(2004)//modificamos el valor de de la fecha
//esto tambien podemos hacerlo con los demas
//NOTA: No valides con JS porque cualquiera puede moficicar sus fechas desde la pc 