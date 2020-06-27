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

    // Elimiar un producto del carrito
    const elimiarProducto = id => {
        const productos = carrito.filter(producto => producto.id !== id);

        // Colocar los productos en el state
        agregarProducto(productos)
    }

    return (

        <div>
            <h3>
                {nombre}
            </h3>
            <p>${precio}</p>
            {productos
            ?
                (
                    <button 
                        type="button"
                        onClick={() => seleccionarProducto(id)}
                    >Comprar</button>
                )
            :
                (
                    <button 
                        type="button"
                        onClick= { () => elimiarProducto(id)}
                    >Eliminar</button>                    
                )
            }

        </div>
    );
}
 
export default Producto;