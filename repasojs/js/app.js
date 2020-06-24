// Métodos en arreglos
 
const personas = [
    {nombre: 'Juan',   edad: 22, aprendiedno: 'Javascript'},
    {nombre: 'Pablo',  edad: 23, aprendiedno: 'PHP'},
    {nombre: 'Carlos', edad: 21, aprendiedno: 'Adobe XD'},
    {nombre: 'Miguel', edad: 24, aprendiedno: 'React.js'},
    {nombre: 'Oscar',  edad: 25, aprendiedno: 'Python'}
]
console.log(personas); // Array(5) [ {…}, {…}, {…}, {…}, {…} ]


// Mayores de 28 años

const mayores = personas.filter(persona => {
    return persona.edad > 22;
})
console.log(mayores); // Array(3) [ {…}, {…}, {…} ]


personas.filter(persona => {
    console.log(persona);
})

console.log(personas);
// Object { nombre: "Juan", edad: 22, aprendiedno: "Javascript" }
// .... Retorna cada objeto individualmente


// Qué aprende Miguel
const miguel = personas.find(persona => {
    return persona.nombre === 'Miguel';
});
console.log(miguel); // Object { nombre: "Miguel", edad: 24, aprendiedno: "React.js" }
console.log('Miguel está aprendiendo ' + miguel.aprendiedno); // Miguel está aprendiendo React.js


// Suma de todas las edades de personas
let total = personas.reduce((edadTotal, persona) => {
    return edadTotal + persona.edad;
}, 0);
console.log(total); // 115 toal edad
console.log(personas.length); // 5 personas
console.log(total/personas.length); // 23 promedio edad