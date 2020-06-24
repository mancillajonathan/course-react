// Mostrando el resultado en HTML
const descargarUsuarios = cantidad => new Promise((resolve, reject) => {
    // Pasar la cantidad a la api
    const api = `https://randomuser.me/api/?results=${cantidad}&nat=us`;

    // Llamado a ajax
    const xhr = new XMLHttpRequest();

    // Abrir la conexión
    xhr.open('GET', api, true);

    // On load
    xhr.onload = () => {
        if(xhr.status === 200) {
            resolve(JSON.parse(xhr.responseText).results);
        } else {
            reject(Error(xhr.statusText));
        }
    }

    // Opctional: on error
    xhr.onerror = (error) => reject(error);

    // Send
    xhr.send()
});

descargarUsuarios(10)
    .then(
      miembros => imprimirHTML(miembros),
      error => console.error(
          new Error('Hubo un error' + error)
      )
    );

function imprimirHTML(usuarios) {
    let html = '';
    usuarios.forEach(usuario => {
        html += `
        <li>
            Nombre: ${usuario.name.first} ${usuario.name.last}
            País: ${usuario.nat}
            Imágen:
                <img src="${usuario.picture.medium}"> 
        </li>
        `
    });

    const contenedorApp = document.querySelector('#app');
    contenedorApp.innerHTML = html;
}