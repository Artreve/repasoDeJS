//Eventos en un formulario
const formulario = document.querySelector("#formulario");

// formulario.addEventListener('submit', (e)=>{
//     e.preventDefault
//     //evitamos que se envie el formulario

//     console.log(e)
// })

formulario.addEventListener("submit", validarForm);
function validarForm(e) {
  e.preventDefault();
  console.log("Capturando una api");
  console.log(e.target.action);
}
