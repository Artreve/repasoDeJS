const mascotaInput = document.querySelector("#mascota");
const propietarioInput = document.querySelector("#propietario");
const telefonoInput = document.querySelector("#telefono");
const fechaInput = document.querySelector("#fecha");
const horaInput = document.querySelector("#hora");
const sintomasInput = document.querySelector("#sintomas");
const formulario = document.querySelector("#nueva-cita");
const citasContainer = document.querySelector("#citas");
let editando;
class Citas {
  constructor() {
    this.citas = [];
  }
  agregarCita(cita) {
    this.citas = [...this.citas, cita];
    console.log(this.citas);
  }
  eliminarCita(id) {
    this.citas = this.citas.filter((cita) => cita.id !== id);
  }
  editarCita(citaActualizada){
    this.citas=this.citas.map(cita => cita.id === citaActualizada.id ? citaActualizada : cita)
  }
}
class UI {
  imprimirAlerta(mensaje, tipo) {
    const divMensaje = document.createElement("div");
    divMensaje.classList.add("text-center", "alert", "d-block", "col-12");
    if (tipo === "error") {
      divMensaje.classList.add("alert-danger");
    } else {
      divMensaje.classList.add("alert-success");
    }
    divMensaje.textContent = mensaje;
    //Agregar al DOM
    document
      .querySelector("#contenido")
      .insertBefore(divMensaje, document.querySelector(".agregar-cita"));
    setTimeout(() => {
      divMensaje.remove();
    }, 5000);
  }
  imprimirCitas({ citas }) /*destructuring*/ {
    this.limpiarHTML();
    citas.forEach((cita) => {
      const { mascota, propietario, telefono, fecha, hora, sintomas, id } =
        cita;
      const divCita = document.createElement("div");
      divCita.classList.add("cita", "p-3");
      divCita.dataset.id = id;

      const mascotaParrafo = document.createElement("h2");
      mascotaParrafo.classList.add("card-tittle", "font-weight-bolder");
      mascotaParrafo.textContent = mascota;

      const propietarioParrafo = document.createElement("p");
      propietarioParrafo.innerHTML = `
      <span class ="font-weight-bolder">Propierario:</span>${propietario}
      `;
      const telefonoParrafo = document.createElement("p");
      telefonoParrafo.innerHTML = `
      <span class ="font-weight-bolder">Telefono:</span>${telefono}
      `;
      const fechaParrafo = document.createElement("p");
      fechaParrafo.innerHTML = `
      <span class ="font-weight-bolder">Fecha:</span>${fecha}
      `;
      const horaParrafo = document.createElement("p");
      horaParrafo.innerHTML = `
      <span class ="font-weight-bolder">Hora:</span>${hora}
      `;
      const sintomasParrafo = document.createElement("p");
      sintomasParrafo.innerHTML = `
      <span class ="font-weight-bolder">Sintomas:</span>${sintomas}
      `;
      //Boton para eliminar cita
      const btnEliminar = document.createElement("button");
      btnEliminar.classList.add("btn", "btn-danger", "mr-2");
      btnEliminar.innerHTML =
        'Eliminar <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>';
      btnEliminar.onclick = () => eliminarCita(id);

      // Añade un botón de editar...
      const btnEditar = document.createElement("button");
      btnEditar.onclick = () => cargarEdicion(cita);
      btnEditar.classList.add("btn", "btn-info");
      btnEditar.innerHTML =
        'Editar <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>';

      divCita.appendChild(mascotaParrafo);
      divCita.appendChild(propietarioParrafo);
      divCita.appendChild(telefonoParrafo);
      divCita.appendChild(fechaParrafo);
      divCita.appendChild(horaParrafo);
      divCita.appendChild(sintomasParrafo);
      divCita.appendChild(btnEliminar);
      divCita.appendChild(btnEditar);
      citasContainer.appendChild(divCita);
    });
  }
  limpiarHTML() {
    while (citasContainer.firstChild) {
      citasContainer.removeChild(citasContainer.firstChild);
    }
  }
}
eventListeners();
function eventListeners() {
  mascotaInput.addEventListener("input", datosCita);
  propietarioInput.addEventListener("input", datosCita);
  telefonoInput.addEventListener("input", datosCita);
  fechaInput.addEventListener("input", datosCita);
  horaInput.addEventListener("input", datosCita);
  sintomasInput.addEventListener("input", datosCita);
  formulario.addEventListener("submit", nuevaCita);
}

const ui = new UI();
const administrarCitas = new Citas();
const citaObj = {
  mascota: "",
  propietario: "",
  telefono: "",
  fecha: "",
  hora: "",
  sintomas: "",
};
function eliminarCita(id) {
  //Eliminar Cita
  administrarCitas.eliminarCita(id);
  //Monstrar Mensaje
  ui.imprimirAlerta("Se elimino correctamente");
  //Refrescar las citas
  ui.imprimirCitas(administrarCitas);
}
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
    sintomas === ""
  ) {
    ui.imprimirAlerta("Todos los campos son obligatorios", "error");
    return;
  }
  if (editando) {
    ui.imprimirAlerta("editado correctamente");
    //pasar el objeto a edicion
    administrarCitas.editarCita({...citaObj})

    //cambiar el texto del boton
    formulario.querySelector('button[type="submit"]').textContent =
      "GuardarCambios";
    editando = false;
  } else {
    //Generar un id unico
    citaObj.id = Date.now();
    //Crear nueva cita
    administrarCitas.agregarCita({ ...citaObj }); //Para evitar que se carguen elementos repetidos, crearemos una copia del objeto global y cuando le pasemos el objeto de cita no le pasaremos el objeto global y asi evitaremos que cada vez que se carge algo, se repitan los valores ya cargados
    ui.imprimirAlerta("Se agrego correctamente");
  }
  reiniciarObjeto();
  formulario.reset(); //reinicia el formulario
  //Mostrar el HTML de las citas
  ui.imprimirCitas(administrarCitas);
}
function reiniciarObjeto() {
  citaObj.mascota = "";
  citaObj.fecha = "";
  citaObj.hora = "";
  citaObj.propietario = "";
  citaObj.sintomas = "";
  citaObj.telefono = "";
}
function cargarEdicion(cita) {
  const { mascota, propietario, telefono, fecha, hora, sintomas, id } = cita;
  //llenar los imputs
  mascotaInput.value = mascota;
  propietarioInput.value = propietario;
  telefonoInput.value = telefono;
  fechaInput.value = fecha;
  horaInput.value = hora;
  sintomasInput.value = sintomas;
  //Llenar el objeto
  citaObj.mascota = mascota;
  citaObj.propietario = propietario;
  citaObj.telefono = telefono;
  citaObj.fecha = fecha;
  citaObj.hora = hora;
  citaObj.sintomas = sintomas;
  citaObj.id = id;
  //cambiar el texto del boton
  formulario.querySelector('button[type="submit"]').textContent =
    "GuardarCambios";
  editando = true;
}
