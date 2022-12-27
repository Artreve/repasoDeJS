//bubble event: eventos que se propagan como burbujas
//esto es cuando precionamos en un evento y se hacen cosas en otros lados donde no queriamos
const cardDiv = document.querySelector('.card');
const infoDiv = document.querySelector('.info');
const titulo = document.querySelector('.titulo');


cardDiv.addEventListener('click', e => {
    e.stopPropagation();//evitamos que el evento se propague a otros nodos
    console.log('click card');
})
infoDiv.addEventListener('click', e => {
    e.stopPropagation();
    console.log('click info');
})

titulo.addEventListener('click', e => {
    e.stopPropagation();
    console.log('click titulo');
})