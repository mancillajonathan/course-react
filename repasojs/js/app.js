// Object literal enhancement


const banda = 'Metalica';
const genero = 'Heavy Metal';
const canciones = ['Master of Puppets', 'Seek & Destroy', 'Enter Sandman'];

// Forma anterior
// const metalica = {
//     banda: banda,
//     genero: genero,
//     canciones: canciones
// }

// Forma nueva
const metalica = {banda, genero, canciones};
console.log(metalica);