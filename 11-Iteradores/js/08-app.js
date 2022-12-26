const automovil = {
    modelo: 'camaro',
    year: 1696,
    Motor: '6.0'
}

for (const propiedad in automovil) {
   console.log(`${automovil[propiedad]}`)
}
//for in itera en los valos de los objetos mientras que el for of en el de arreglos