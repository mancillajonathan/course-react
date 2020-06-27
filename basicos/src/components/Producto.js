import React from 'react'

const Producto = ({producto}) => {

    const {nombre, precio, id} = producto

    return (

        <div>
            <h3>
                {nombre}
            </h3>
            <p>${precio}</p>
        </div>
    );
}
 
export default Producto;