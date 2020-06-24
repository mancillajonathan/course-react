// Exportar funciones en módulos
export const nombreTarea = 'Aprender API REST';

export const crearTarea = (tarea, urgencia) => {
    return `La tarea ${tarea} tiene una urgencia ${urgencia}`;
}

export const tareaCompletada = () => {
    console.log('La tarea se completó');
}


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