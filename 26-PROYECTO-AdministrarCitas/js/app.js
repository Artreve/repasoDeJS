const mascotaInput = document.querySelector("#mascota");
const propietarioInput = document.querySelector("#propietario");
const telefonoInput = document.querySelector("#telefono");
const fechaInput = document.querySelector("#fecha");
const horaInput = document.querySelector("#hora");
const sintomasInput = document.querySelector("#sintomas");
const formulario = document.querySelector("#nueva-cita");
const citasContainer = document.querySelector("#citas");

class Citas {
  constructor() {
    this.citas = [];
  }
}
class UI {
    imprimirAlerta(mensaje,tipo){
        const divMensaje = document.createElement('div')
        divMensaje.classList.add('text-center','alert','d-block','col-12')
        if(tipo === 'error'){
            divMensaje.classList.add('alert-danger')
        }else{
            divMensaje.classList.add('alert-success')
        }
        divMensaje.textContent = mensaje
        //Agregar al DOM
        document.querySelector('#contenido').insertBefore(divMensaje,document.querySelector('.agregar-cita'))
        setTimeout(() => {
            divMensaje.remove()
        }, 5000);
    }
}
eventListeners();
function eventListeners() {
  mascotaInput.addEventListener("input", datosCita);
  propietarioInput.addEventListener("input", datoPropie);
  telefonoInput.addEventListener("input", datosTel);
  fechaInput.addEventListener("input", datosFecha);
  horaInput.addEventListener("input", datosHora);
  sintomasInput.addEventListener("input", datosSintomas);
  formulario.addEventListener("submit", nuevaCita);
}

const ui = new UI();
const citas = new Citas();
const citaObj = {
  mascota: "",
  propietario: "",
  telefono: "",
  fecha: "",
  hora: "",
  sintomas: "",
};
function datosCita(e) {
  citaObj[e.target.name] = e.target.value; //para que esto funcione, cada input debe tener un name con el mismo nombre
}
function nuevaCita(e) {
  e.preventDefault();
  //estrar info de obj de cira
  const { mascota, propietario, telefono, fecha, hora, sintomas } = citaObj;
  //validar
  if (
    mascota === "" ||
    propietario === "" ||
    telefono === "" ||
    fecha === "" ||
    hora === "" ||
    sintomas
  ) {
    ui.imprimirAlerta('Todos los campos son obligatorios','error')
    return;
  }
}
