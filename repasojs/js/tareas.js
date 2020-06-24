// Exportar clases en módulos

export default class Tarea {
    constructor(nombre, prioridad) {
        this.nombre = nombre;
        this.prioridad = prioridad;
    }

    // Método
    mostrar() {
        console.log(`${this.nombre} tiene una prioridad de ${this.prioridad}`);
        // return `${this.nombre} tiene una prioridad de ${this.prioridad}`;
    }
}