// Métodos o funciones en un objeto

const persona = {
    nombre: 'Juan',
    trabajo: 'Web Dev',
    edad: 22,
    musicIsRock: true,
    mostrarInformacion: function() {
        console.log(`${this.nombre} es ${this.trabajo} y su edad es
        ${this.edad}`)
    }
}

persona.mostrarInformacion();