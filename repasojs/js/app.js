// Objetos

// function mostrarInformacionTarea(tarea, prioridad) {
//     return `La tarea ${tarea} tiene una prioridad de ${prioridad}`;
// }

// Object literal
const persona = {
    nombre: 'Juan',
    profesion: 'Web Dev',
    edad: 22,
    isAdult: true
}

// console.log(persona)

// Mala forma de usar la función
// const mostrarCliente = mostrarInformacionTarea(persona.nombre, persona.profesion);
// console.log(mostrarCliente);

// Object constructor
function Tarea(nombre, urgencia) {
    this.nombre = nombre;
    this.urgencia = urgencia;
}

// Agregar un prototype a tarea: 
Tarea.prototype.mostrarInformacionTarea = function() {
    return `La tarea ${this.nombre} tiene una prioridad de ${this.urgencia}`;
}

// Crear una nueva tarea
const tarea1 = new Tarea('Aprender Javascript y React', 'Urgente');
console.log(tarea1);
console.log(tarea1.mostrarInformacionTarea());

// const mostrarInfo = mostrarInformacionTarea(tarea1.nombre, tarea1.urgencia);
// console.log(mostrarInfo);