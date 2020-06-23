// Destructuring de objetos

const aprendiendoJS = {
    version: {
        nueva: 'ES6+',
        anterior: 'ES5'
    },
    frameworks : [ 
        'React', 'VueJS', 'AngularJS'
    ]
}

// Destructuring es extraer valores de un objeto
// console.log(aprendiendoJS);

// version anterior
// let version = aprendiendoJS.version.nueva;
// console.log(version);

// Destrcuturing forma nueva
let{version} = aprendiendoJS;
console.log(version);

let{nueva} = aprendiendoJS.version;
console.log(nueva);