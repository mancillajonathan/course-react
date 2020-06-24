// Exportando funciones en módulos
import {nombreTarea, crearTarea, tareaCompletada} from './tareas.js';

console.log(nombreTarea);

const tarea1 = crearTarea('Torres Project', 'Altísima');
console.log(tarea1);

tareaCompletada();