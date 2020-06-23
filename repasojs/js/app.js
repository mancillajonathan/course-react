// Arrow functions

// Function expression
let viajando = function(destino) {
    return `Viajando a la ciudad de: ${destino}`;
}

// Arrow function
let viajando = (destino) => { 
    return `Viajando a la ciudad de: ${destino}`;
}

// Si solo es 1 parámetro se eliminan los '( )'
let viajando = destino => { 
    return `Viajando a la ciudad de: ${destino}`;
}

// Si solo retornas un valor puedes eliminar
// las '{ ... }' 'return'
let viajando = destino =>  `Viajando a la ciudad de: ${destino}`;

// 1
let viaje = viajando('Paris');
// 2
let viaje2; 
viaje2 = viajando('Londes');

console.log(viaje + '\n' + viaje2);



