import React from 'react'

const Producto = ({producto, carrito, agregarProducto, productos}) => {

    const {nombre, precio, id} = producto

    // Agregar una producto al carrito
    const seleccionarProducto = id => {
        const producto = productos.filter(producto => producto.id === id)[0];
        agregarProducto([
            ...carrito, // spread operator
            producto
        ]);
    }

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