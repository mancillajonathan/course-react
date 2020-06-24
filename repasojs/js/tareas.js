// Exportar módulos

// Primera forma
export const nombreTarea = 'Aprender Adobe XD';
// Segunda forma
const prioridadTarea = 'Inmediata';
export default prioridadTarea;

// Solo puedes tener un export default por documento

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