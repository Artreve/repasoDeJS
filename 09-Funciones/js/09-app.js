//Metodos de propiedad
const reproductor = {
    reproducir: function(id){
        console.log(`Reproduciendo cancion con el Id ${id}`)
    },
    pausar: function(){
        console.log('pusando...')
    },
    crearPlayList: function(nombre){
        console.log(`creando la playlist de nombre ${nombre}`)
    }
}
reproductor.reproducir(30)
reproductor.pausar()

reproductor.borrar = function(id){
    console.log(`Borrando cancion con el id ${id}`)
}
 reproductor.borrar()