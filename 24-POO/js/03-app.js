//Herencia
class Cliente {
    constructor(nombre,saldo){
        this.nombre = nombre;
        this.saldo = saldo;
    }
    mostrarInformacion(){
        return `Hola ${this.nombre}, tu saldo es de $ ${this.saldo}`
    }
    }
class Empresa extends Cliente{
    constructor(nombre, saldo, telefono, categoria){
        super(nombre, saldo)//busca a la clase padre e instancia los valores que le especifiquemos
        this.telefono = telefono;
        this.categoria = categoria;
    }
}
    const juan = new Cliente('Juan',400)
    const empresa =  new Empresa('Codigo con Juan', 500,12345678,'Aprendizaje en Linea')
    console.log(empresa)
    console.log(empresa.mostrarInformacion())

    //si llamamos el mismo metodo dentro de otra clase, ese va a sobrecribir el de la clase padre