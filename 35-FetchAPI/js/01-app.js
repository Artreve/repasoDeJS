const cargarTxtBtn = document.querySelector("#cargarTxt");
cargarTxtBtn.addEventListener("click", obtenerDatos);

function obtenerDatos() {
  const url = "../data/datos.txt";
  //fetch funciona como promise, pero no es necesario la estructura del mismo, porque fetch ya tiene incluido el resolve y rejet
  fetch(url).then((respuesta) => {
    console.log(respuesta);
    return respuesta.text();//transformamos la respuesta a texto
  })
  .then(datos=>console.log(datos))
  .catch(error=>console.log(error))
}
