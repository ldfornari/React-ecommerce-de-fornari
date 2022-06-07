import React, { useContext } from 'react'
import { cartContext } from './CartContext'

export const CartItem = ({name, price, quantity, id, image}) => {

    const {removeFromCart} = useContext(cartContext)

    return (
        <div className="itemContainer">
            <div>
             <img src={image} height="150" rounded />
            </div>
            <div>
                <h4>{name}</h4>
                <h5>Precio: {price}</h5>
                <h6>Cantidad: {quantity}</h6>
                <button className='cartView' onClick={() => { removeFromCart(id) }} > Quitar del Carrito </button>
            </div>

        </div>
    )
}