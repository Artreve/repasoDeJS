const producto = {
    nombre: 'Monitor de 20"',
    precio: 300,
    disponible: true
  };

//Metodo keys
console.log(Object.keys(producto)) //obtenemos las llaves del objeto y nos da como resultado un array con las keys (la parte de la izquierda). Tambien nos puede servir para saber si un objeto esta vacio

//values
console.log(Object.values(producto))//obtenemos los valores de los valores (la parte de la derecha)

//entries
console.log(Object.entries(producto)) //nos da como resultado todo en pares (todo)