// Spread opertor...

let lenguajes = ['Javascript', 'PHP', 'Python'];
let frameworks = ['React.js', 'Vue.js', 'Djando'];

// Unir los arreglos en 1 solo

// Vieja
let combinacion = lenguajes.concat(frameworks);
console.log(combinacion);

// Nueva spread operator
let nuevoArreglo = [...lenguajes, ...frameworks];
console.log(nuevoArreglo);

function suma(a, b, c) {
    console.log(a+b+c);
}

const numeros = [10, 10, 10];

suma(...numeros);