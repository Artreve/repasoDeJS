// declaracion de funcion
sumar()
function sumar(){
    console.log(2+2)
}


//expresion de una funcion 
sumar2()
const sumar2 = function(){
    console.log(3+3)
}

//Si ejecutamos esto, tendremos como resultado solamente 4 porque js primero hace un hosting que es como un escaneo de todo nuestro documento y revisa todas las funciones y las variables que debe crear, y en la segunda vuelta realiza el proceso de ejecucion.
