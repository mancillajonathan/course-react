// Crear variables con VAR

// var aprendiendo = true;

// aprendiendo = false;

// Variables con CONST

// const aprendiendo = 'Javascript';

// Variables con LET

// let aprendiendo = 'Javascript';

// aprendiendo = true;

// Scope con VAR
// var musica = 'Rock';

// if (musica) {
//     var musica = 'Pop';
//     console.log('Dentro del if:', musica); // Pop
// }

// console.log('Fuera del if:', musica); // Pop

// Scope con LET
// let musica = 'Rock';

// if (musica) {
//     let musica = 'Pop';
//     console.log('Dentro del if:', musica); // Pop
// }

// console.log('Fuera del if:', musica); // Rock

// Scope con CONST
const musica = 'Rock';

if (musica) {
    const musica = 'Pop';
    console.log('Dentro del if:', musica); // Pop
}

console.log('Fuera del if:', musica); // Rock