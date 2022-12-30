//variables
const btnEnviar = document.querySelector("#enviar");
const formulario = document.querySelector("#enviar-mail");
//Aplicando expresion regular. Es la manera mas profecional de relizar una validacion
const er =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

//varibles de los imputs
const email = document.querySelector("#email");
const asunto = document.querySelector("#asunto");
const mensaje = document.querySelector("#mensaje");
eventListeners();
function eventListeners() {
  document.addEventListener("DOMContentLoaded", iniciarApp);
  //campos de form
  email.addEventListener("blur", validarForm);
  asunto.addEventListener("blur", validarForm);
  mensaje.addEventListener("blur", validarForm);

  //fomulario
  formulario.addEventListener("submit", enviarEmail);
}

//funciones
function iniciarApp() {
  btnEnviar.disabled = true;
}

function validarForm(e) {
  //validamos que el campo no este vacio

  if (e.target.value.length > 0) {
    //Eliminar Error
    const error = document.querySelector("p.error");
    if (error) {
      error.remove();
    }
    e.target.classList.remove("border", "border-red-500");
    e.target.classList.add("border", "border-green-500"); //clases de taiwild
  } else {
    e.target.classList.remove("border", "border-green-500");
    e.target.classList.add("border", "border-red-500");
    mostrarError("Todos los campos son obligatorios");
  }
  if (e.target.type === "email") {
    //const resultado = e.target.value.indexOf('@')//Busca en el string un arroba

    if (er.test(e.target.value)) {
      const error = document.querySelector("p.error");
      if (error) {
        error.remove();
      }
      e.target.classList.remove("border", "border-red-500");
      e.target.classList.add("border", "border-green-500");
    } else {
      e.target.classList.remove("border", "border-green-500");
      e.target.classList.add("border", "border-red-500");
      mostrarError("Todos los campos son obligatorios");
      mostrarError("correo no valido");
    }
  }

  if (
    er.test(email.value) !== "" &&
    asunto.value !== "" &&
    mensaje.value !== ""
  ) {
    btnEnviar.disabled = false;
    console.log("estoy en el test");
    btnEnviar.classList.remove("cursor-not-allowed", "opacity-50");
  }
}

function mostrarError(mensaje) {
  const mensajeError = document.createElement("p");
  mensajeError.textContent = mensaje;
  mensajeError.classList.add(
    "border",
    "border-red-500",
    "backgraund-red-100",
    "text-red-500",
    "p-3",
    "mt-5",
    "text-center"
  );
  const errores = document.querySelectorAll(".error");
  if (errores.length === 0) {
    formulario.appendChild(mensajeError);
  }
}

function enviarEmail(e) {
  e.preventDefault();

  const spiner = document.querySelector('#spinner')
  spiner.style.display = 'flex'
  setTimeout(()=>{
    //desaparecemos el spinner
    spiner.style.display ='none'
    //mensaje
    const parrafo = document.createElement('p')
    parrafo.textContent = 'El mensaje se envio correctamente'
    parrafo.classList.add("border",
    "border-red-500",
    "backgraund-red-100",
    "text-green-500",
    "p-3",
    "m-5",
    "text-center")
    //cargamos en el documento
    formulario.insertBefore(parrafo, spiner)
  }, 3000)
}
