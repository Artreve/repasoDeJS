const producto = {
  nombre: 'Monitor de 20"',
  precio: 300,
  disponible: true,
  mostrarInfo: function () {
    console.log(`El producto: ${this.nombre} tine un precio de ${this.precio}`);
  },
};
producto.mostrarInfo();
