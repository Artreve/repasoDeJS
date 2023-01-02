const marca = document.querySelector("#marca");
const anos = document.querySelector("#year");
const minimo = document.querySelector("#minimo");
const maximo = document.querySelector("#maximo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#transmision");
const color = document.querySelector("#color");
const resultado = document.querySelector("#resultado");
const datosBus = {
  marca: "",
  year: "",
  minimo: "",
  maximo: "",
  puerta: "",
  transmision: "",
  color: "",
};
const max = new Date().getFullYear();
// console.log(max);
const min = max - 10;
document.addEventListener("DOMContentLoaded", () => {
  mostrarAutos(autos);
  llenarSelectAnos();
});
marca.addEventListener("change", (e) => {
  datosBus.marca = e.target.value;
  filtrarAuto();
});
anos.addEventListener("change", (e) => {
  datosBus.year = parseInt(e.target.value); //convertimos los valores a enteros, ya que se depositan strings
  filtrarAuto();
});
minimo.addEventListener("change", (e) => {
  datosBus.minimo = e.target.value;
  filtrarAuto();
});
maximo.addEventListener("change", (e) => {
  datosBus.maximo = e.target.value;
  filtrarAuto();
});
puertas.addEventListener("change", (e) => {
  datosBus.puerta = parseInt(e.target.value);
  filtrarAuto();
});
transmision.addEventListener("change", (e) => {
  datosBus.transmision = e.target.value;
  filtrarAuto();
});
color.addEventListener("change", (e) => {
  datosBus.color = e.target.value;
  filtrarAuto();
});

function mostrarAutos(autos) {
  limpiarHTML();
  autos.forEach((auto) => {
    const { marca, modelo, year, puertas, transmision, precio, color } = auto;
    const autoHTML = document.createElement("p");
    autoHTML.textContent = `${marca} - ${modelo} - ${year} - ${puertas} - ${transmision} - ${precio} - ${color}`;
    resultado.appendChild(autoHTML);
  });
}
//Limpiar el html
function limpiarHTML() {
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }
}
function llenarSelectAnos() {
  for (let i = max; i > min; i--) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    anos.appendChild(option); //ApendChild no borra el contenido anterior
  }
}

function filtrarAuto() {
  const resultado = autos
    .filter(filtrarMarca)
    .filter(filtrarAnio)
    .filter(filtrarMinimo)
    .filter(filtrarMaximo)
    .filter(filtrarPuerta)
    .filter(filtrarTrans)
    .filter(filtrarColor);
    if(resultado.length){
      mostrarAutos(resultado);

    }else{
      cartelNoResultado()
    }
}
function cartelNoResultado(){
  limpiarHTML()
  const noResultado = document.createElement('div')
      noResultado.classList.add('alerta','error')
      noResultado.textContent = 'No se encontraron resultados'
      resultado.appendChild(noResultado)
}
function filtrarMarca(auto) {
  const { marca } = datosBus;
  if (marca) {
    return auto.marca === marca;
  }
  return auto; //mantener la referencia si no tengo valores en el filtro
}
function filtrarAnio(auto) {
  const { year } = datosBus;
  if (year) {
    return auto.year === year;
  }
  return auto;
}

function filtrarMinimo(auto) {
  const { minimo } = datosBus;
  if (minimo) {
    return auto.precio >= minimo;
  }
  return auto;
}
function filtrarMaximo(auto) {
  const { maximo } = datosBus;
  if (maximo) {
    return auto.precio <= maximo;
  }
  return auto;
}
function filtrarPuerta(auto) {
  const { puerta } = datosBus;
  if (puerta) {
    return auto.puertas === puerta;
  }
  return auto;
}
function filtrarTrans(auto) {
  const { transmision } = datosBus;
  if (transmision) {
    return auto.transmision === transmision;
  }
  return auto;
}
function filtrarColor(auto) {
  const { color } = datosBus;
  if (color) {
    return auto.color === color;
  }
  return auto;
}
