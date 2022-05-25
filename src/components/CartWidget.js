import { Link } from "react-router-dom"
import React, { useContext } from "react"
import { context } from "./CartContext"

const CartWidget = () => {

    const {totalQuantity} = useContext(context)

    return (   
        <Link to="/cart">            
            <span className="material-icons">
                shopping_cart
            </span>
            {totalQuantity}
        </Link>           
    )
}
export default CartWidget
