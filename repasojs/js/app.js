// Programación Orientada a Objetos - Clases

class Tarea {
    constructor(nombre, prioridad) {
        this.nombre = nombre;
        this.prioridad = prioridad;
    }

    // Método
    mostrar() {
        // console.log(`${this.nombre} tiene una prioridad de ${this.prioridad}`);
        return `${this.nombre} tiene una prioridad de ${this.prioridad}`;
    }
}

// Crear objetos
let tarea1 = new Tarea('Aprender Javascript', 'Alta');
let tarea2 = new Tarea('Aprender UI Design', 'Media');
let tarea3 = new Tarea('Aprender React.js', 'Alta');
let tarea4 = new Tarea('Aprender Vue.js', 'Baja');

console.log(tarea1.mostrar());
console.log(tarea2);
console.log(tarea3);