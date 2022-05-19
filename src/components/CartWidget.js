import { Link } from "react-router-dom"
import { db } from "./firebase"

const CartWidget = () => {
    return (   
        <Link to="/cart">            
            <span className="material-icons">shopping_cart</span>
        </Link>           
    )
}
export default CartWidget
