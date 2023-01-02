//Metodos a Clases
class Cliente {
    constructor(nombre,saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }
    mostrarInformacion(){
        return `Hola ${this.nombre}, tu saldo es de $ ${this.saldo}`
    }
    }
    const juan = new Cliente('Juan',400)
    console.log(juan.mostrarInformacion())