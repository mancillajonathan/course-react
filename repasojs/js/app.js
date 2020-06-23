// Arreglos y .map

const carrito = ['Produco 1', 'Produco 2', 'Produco 3'];

console.log(carrito); // Array(3) [ "Produco 1", "Produco 2", "Produco 3" ]

const appContenedor = document.querySelector('#app');
appContenedor.innerHTML = carrito;

let html = '';

carrito.forEach(producto => {
    html+= `<li>${producto}</li>`;
})
appContenedor.innerHTML = html;

// MAP
carrito.map(producto => {
    return 'Elproducto es' + producto;
})
// Output:
// 0: "Elproducto esProduco 1"
// 1: "Elproducto esProduco 2"
// 2: "Elproducto esProduco 3"
// length: 3


// Object keys
const persona = {
    nombre: 'Juan',
    profesion: 'Web Dev',
    edad: 22
}

console.log(persona); // Object { nombre: "Juan", profesion: "Web Dev", edad: 22 }
console.log(Object.keys(persona)); //Array(3) [ "nombre", "profesion", "edad" ]