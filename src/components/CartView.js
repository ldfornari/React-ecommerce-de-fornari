import React, { useContext } from 'react'
import { cartContext } from './CartContext'
import { CartItem } from './CartItem'

export const CartView = () => {

    const { cart } = useContext(cartContext)

    return (
        <div className="cartView">
            {cart.length > 0 ?   <> 
                <h2>Productos en el carrito</h2>                                             
                {cart.map((prod) => <CartItem key={prod.id} {...prod}/>)} </> 
            :  
                <h4>No has agregado productos al carrito</h4>                
            }
        </div>
    )
}
