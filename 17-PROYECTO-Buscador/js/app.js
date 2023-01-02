const marca = document.querySelector("#marca");
const selectAños = document.querySelector("#year");
const minimo = document.querySelector("#minimo");
const maximo = document.querySelector("#maximo");
const puertas = document.querySelector("#puertas");
const transmision = document.querySelector("#trasmision");
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
console.log(max);
const min = max - 10;
document.addEventListener("DOMContentLoaded", () => {
  mostrarAutos();
  llenarSelectAnos();
});
marca.addEventListener('change',e=>{
    datosBus.marca=e.target.value
})
marca.addEventListener('change',e=>{
    datosBus.year=e.target.value
})
marca.addEventListener('change',e=>{
    datosBus.minimo=e.target.value
})
marca.addEventListener('change',e=>{
    datosBus.maximo=e.target.value
})
marca.addEventListener('change',e=>{
    datosBus.puerta=e.target.value
})
marca.addEventListener('change',e=>{
    datosBus.transmision=e.target.value
})
marca.addEventListener('change',e=>{
    datosBus.value=e.target.value
})

function mostrarAutos() {
  autos.forEach((auto) => {
    const { marca, modelo, year, puertas, transmision, precio, color } = auto;
    const autoHTML = document.createElement("p");
    autoHTML.textContent = `${marca} - ${modelo} - ${year} - ${puertas} - ${transmision} - ${precio} - ${color}`;
    resultado.appendChild(autoHTML);
  });
}
function llenarSelectAnos() {
  for (let i = max; i > min; i--) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    selectAños.appendChild(option);
  }
}

function filtrarAutos(){
    const resultado = autos.filter(filtrarMarca)
}
function filtrarMarca(auto){
    if(datosBus.marca){
        return auto.marca === datosBus.marca
    }
}
