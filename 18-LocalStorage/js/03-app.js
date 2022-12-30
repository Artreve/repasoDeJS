//Eliminar elemento del LS
localStorage.removeItem('nombre')

//Actualizar un registro 
const mesesArray = JSON.parse(localStorage.getItem('meses'))
mesesArray.push('NuevoMes')
localStorage.setItem('meses', JSON.stringify(mesesArray))
