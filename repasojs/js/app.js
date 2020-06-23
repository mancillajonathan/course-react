// Template Strings 

const nombre = 'Jair';
const trabajo = 'Desarrollador Web';

// Concatenar en Javascript
console.log('Nombre: ' + nombre + ', Trabajo: ' + trabajo); // Nombre: Jair, Trabajo: Desarrollador Web

// Nueva versión
console.log(`Nombre: ${nombre}, Trabajo: ${trabajo}`); // Nombre: Jair, Trabajo: Desarrollador Web

// Concatenar con multiples líneas
// const contenedorApp = document.querySelector('#app');
// let html = '<ul>' +
// '<li> Nombre: ' + nombre + '</li>' +
// '<li> Trabajo: ' + trabajo + '</li>' +
//            '<ul>';
// contenedorApp.innerHTML = html;

// Nueva forma: template strings
const contenedorApp = document.querySelector('#app');
let html = `
    <ul>
        <li> Nombre; ${nombre} </li>
        <li> Trabajo: ${trabajo} </li>
    <ul>
`;

contenedorApp.innerHTML = html;