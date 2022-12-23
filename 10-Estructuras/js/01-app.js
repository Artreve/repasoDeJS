const puntaje = 1001;

if(puntaje == 1000){
    console.log('si es igual')
}

if (puntaje != 1000){
    console.log("si, es distinto")
}

if (puntaje === "1000"){
    console.log ('si es igual')
}else{
    console.log('no es igual')
}

//== operador no estricto
//=== operador estricto: este no solo verifica el valor sino tambien el tipo de dato

if (puntaje !== "1000"){
    console.log ('si es diferente')
}else{
    console.log('no es diferente')
}