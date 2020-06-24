// Programación Orientada a Objetos - Clases - Herencia

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

class ComprasPendientes extends Tarea {
    constructor(nombre, prioridad, cantidad) {
        super(nombre, prioridad);
        this.cantidad = cantidad;
    }

    // Reescribir el metodo de la clase Tareas
    mostrar() {
        return 'Hola!' + this.nombre;
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

// Compras
let compra1 = new ComprasPendientes('Jabón', 'Mediana', 4);
console.log(compra1); // Object { nombre: "Jabón", prioridad: "Mediana", cantidad: 4 }
console.log(compra1.mostrar()); // Jabón tiene una prioridad de Mediana

// Con metodo mostrar() reescrita
console.log(compra1.mostrar()); // Hola! Jabón
