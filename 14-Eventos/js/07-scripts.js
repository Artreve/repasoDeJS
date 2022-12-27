//Tambien podemos detener el event boubble de la siguiente manera
const cardDiv = document.querySelector('.card');

cardDiv.addEventListener('click', e => {
    if(e.target.classList.contains('titulo')) {
        console.log('click titulo');
    }
    if(e.target.classList.contains('info')) {
        console.log('click info');
    }
});