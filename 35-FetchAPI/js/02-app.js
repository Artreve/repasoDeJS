const cargarJSONBtn = document.querySelector("#cargarJSON");
cargarJSONBtn.addEventListener("click", obtenerDatos);
function obtenerDatos() {
  const url = "../data/empleado.json";
  fetch(url).then((respuesta) =>  respuesta.json() //convertimos a JSON
).then(respuesta =>{
    console.log(respuesta)
  })
}
