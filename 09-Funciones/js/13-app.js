const reproductor = {
    cancion: '',
    reproducir: id=>{
        console.log(`Reproduciendo cancion con el Id ${id}`)
    },
    pausar: ()=>{
        console.log('pusando...')
    },
    crearPlayList: nombre=>{
        console.log(`creando la playlist de nombre ${nombre}`)
    },
    set nuevaCancion(cancion){ //con set enviamos valores
        this.cancion = cancion;
        console.log(`añandiendo cancion ${cancion}`)
    },
    get obtenerCancion(){
        console.log(`${this.cancion}`)
    }
    
}
reproductor.nuevaCancion = 'Niky Nicol';
reproductor.obtenerCancion;
reproductor.reproducir(30)
reproductor.pausar()

reproductor.borrar = function(id){
    console.log(`Borrando cancion con el id ${id}`)
}
 reproductor.borrar()