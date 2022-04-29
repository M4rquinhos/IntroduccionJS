// template string

class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }

    saludar(){
        return `Hola, mucho gusto ${this.nombre} ${this.apellido}`;
    }
}


class Alumno extends Persona{
    constructor(nombre, apellido, grupo){
        super(nombre, apellido);
        this.grupo = grupo;

    }
        saludo(){
            return `Hola, mucho gusto ${this.nombre} ${this.apellido} del grupo ${this.grupo}`;
    }
}

let persona = new Persona('Juan', 'Perez');
console.log(persona.saludar());

let alumno = new Alumno('Juan', 'Perez', 'A');
console.log(alumno.saludo());