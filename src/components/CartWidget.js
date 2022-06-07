import { Link } from "react-router-dom"
import React, { useContext } from "react"
import { cartContext } from "./CartContext"

const CartWidget = () => {
    
    const {totalQuantity} = useContext(cartContext)  

    return (   
        <Link className="cartWidget" to="/cart">            
            <span className="material-icons">
                shopping_cart
            </span>
            <span className="cartWidgetQuantity">                    
                {totalQuantity() > 0 &&  totalQuantity()}
            </span>
        </Link>           
    )
}
export default CartWidget
