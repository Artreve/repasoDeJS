// //Crear HTML
// const enlase = document.createElement("a");

// //Agregandole texto
// enlase.textContent = "nuevo enlase";

// //añandiendo href
// // enlase.href = "/nuevo-enlase";
// enlase.target = "_black";

// //agregar clases
// enlase.classList.add("nueva_clase");

// //Agregar funciones
// enlase.onclick = alerta;

// console.log(enlase);

// //seleccionar la navegacion
// const navegacion = document.querySelector(".navegacion");
// // navegacion.appendChild(enlase)

// //agregar a html
// navegacion.insertBefore(enlase, navegacion.children[1]);
// //(que vamos ingresar, donde los vamos a ingresar)

// function alerta() {
//   alert("Diste clic");
// }

//Crear CARD
const parrafo1 = document.createElement("p");
parrafo1.textContent = "Conciertos";
parrafo1.classList.add("categoria", "concierto");
const parrafo2 = document.createElement("p");
parrafo2.textContent = "Concierto de Rock";
parrafo2.classList.add("titulo");
const parrafo3 = document.createElement("p");
parrafo3.textContent = "800 por persona";
parrafo3.classList.add("precio");

//div con la clase de info
const info = document.createElement("div");
info.classList.add("info");
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);

//crear la imagen
const img = document.createElement("img");
img.src = "./img/hacer2.jpg";
img.alt = "imagen de hacer 2";

//crear el card
const card =  document.createElement('div')
card.classList.add('card')

//asignar img
card.appendChild(img)

//asignar info
card.appendChild(info)

//insertar en el html
const contenedor = document.querySelector('.hacer .contenedor-cards')
contenedor.appendChild(card)

console.log(info);
