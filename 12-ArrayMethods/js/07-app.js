//.concat:concatenar arreglo
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'Septiembre']
const meses4 =['Octubre','Noviembre','Diciembre']
 const meses3 = meses.concat(meses2,meses4)
 console.log(meses3)

 //spread operador
 const resultado2 = [...meses,...meses2,...meses4]
 console.log(resultado2)
 //este va uniendo dependiendo del orden