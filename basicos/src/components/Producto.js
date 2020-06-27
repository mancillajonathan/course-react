import React from 'react'

const Producto = ({producto}) => {

    const {nombre, precio, id} = producto

    // Agregar una producto al carrito
    const seleccionarProducto = id => console.log('Comprando...', id);

    return (

        <div>
            <h3>
                {nombre}
            </h3>
            <p>${precio}</p>
            <button 
                type="button"
                onClick={() => seleccionarProducto(id)}
            >Comprar</button>
        </div>
    );
}
 
export default Producto;