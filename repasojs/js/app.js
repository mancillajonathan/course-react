// Parámetros por default en las funciones

// Declaration
function actividad(nombre ='John Smith', actividad = 'Enseña química') {
    console.log(`La persona ${nombre}, está realizando la actividad ${actividad}`);
}

// Expression
const actividad = function (nombre ='John Smith', actividad = 'Enseña química') {
    console.log(`La persona ${nombre}, está realizando la actividad ${actividad}`);
}

actividad('Juan', 'Aprender Javascript');
actividad('Pedro', 'Creando un sitio web');
actividad('David');