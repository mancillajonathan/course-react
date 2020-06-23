
// Funciones


// Function declaration
function saludar(nombre) {
    console.log(`Bienvenido ${nombre}`);
}

saludar('Yorch');

// Function expression
const cliente = function(nombre) {
    console.log(`Mostrando datos del cliente ${nombre}`);
}

cliente('Juan');

// La principal diferencia entre ambas es en el llamado a la función