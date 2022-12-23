//como llamar y hacer llamar a las funciones
iniciarApp();
function iniciarApp(){
    console.log('iniciando app...');
    segundaFuncion();
}
function segundaFuncion(){
    console.log('desde la segunda funcion')
    usuarioAutenticado("Juan")
}

function usuarioAutenticado(usuario){
    console.log('Autenticando Usuario..... espere')
    console.log(`Usuario autenticado: ${usuario}`)
}