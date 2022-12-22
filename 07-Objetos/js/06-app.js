//Desestructuracion en objetos
const producto = {
  nombre: 'Monitor de 20"',
  precio: 300,
  disponible: true,
  informacion: {
    medidas: {
      peso: "1kg",
      medida: "1m",
    },
    fabricacion: {
      pais: "China",
    },
  },
};

//Destructuring ...seria desestructuracion
const {
  nombre,
  informacion: { fabricacion:{pais} },
} = producto;
 console.log({nombre, pais})