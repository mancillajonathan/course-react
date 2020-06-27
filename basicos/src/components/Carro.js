import React from 'react';
import './carro.css'
import Producto from './Producto';

const Carro = ({carrito, agregarProducto}) => (
    <div className="carro">
        <h2>Tu carrito de compras</h2>

        {carrito.length === 0 
        ? <p>No hay elementos en el carrito</p>
        :carrito.map(producto => (
            <Producto
                key={producto.id}
                producto={producto}
                carrito={carrito}
                agregarProducto={agregarProducto}
            />
        ))}
    </div>
);
 
export default Carro;