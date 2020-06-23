// Objetos

// Object literal
const persona = {
    nombre: 'Juan',
    profesion: 'Web Dev',
    edad: 22,
    isAdult: true
}

// Object constructor
function Tarea(nombre, urgencia) {
    this.nombre = nombre;
    this.urgencia = urgencia;
}

// Crear una nueva tarea
const tarea1 = new Tarea('Aprender Javascript y React', 'Urgente');
console.log(tarea1);
console.log(tarea1.nombre);