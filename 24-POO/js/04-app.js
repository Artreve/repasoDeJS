//propiedades privadas
class Cliente {
    #nombre; //hacemos la propiedad privada, y la unica manera de ingresar desde la clase, con un get o set o constructor o metodo 
    // constructor(nombre,saldo){
    //     this.#nombre = nombre;
    //     this.saldo = saldo;
    // }
    // mostrarInformacion(){
    //     return `Hola ${this.#nombre}, tu saldo es de $ ${this.saldo}`
    // }
    setNombre(nombre){
        this.#nombre = nombre;
    }
    getNombre(){
        return this.#nombre
    }
    }
    const juan = new Cliente()
    juan.setNombre('Juan')
    console.log(juan)