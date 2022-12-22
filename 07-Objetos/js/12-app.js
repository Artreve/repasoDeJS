//Objet literal

const producto = {
    nombre: 'Monitor de 20"',
    precio: 300,
    disponible: true
  };

  //objet constructor (clases)

  function Producto (nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.disponible = true;
  }

  const producto2 = new Producto ('Monitor de 20"',200)
  console.log(producto2)