//Consumiento un API
const cargarApiBtn = document.querySelector('#cargarAPI')
cargarApiBtn.addEventListener('click'. cargarDatos)

function cargarDatos(){
    const url = 'http://picsum.photos/list'
    fetch(url).then(respuesta => respuesta.json()).then(resultado =mostrarHTML(resultado))
}
function mostrarHTML(datos){
    let html='';
  datos.forEach((dato) => {
    const {autor, post_url} = perfil;
    html += `
        <p>Autor: ${autor}</p>
        <a href=${post_url} target="_blank">ver imagen</a>`;
  });
  contenido.innerHTML = html
}