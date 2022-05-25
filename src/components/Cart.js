import React, { useContext } from 'react'
import { context } from './CartContext'
import { useNavigate } from "react-router-dom"

const Cart = ({name, price, quantity, id}) => {

  const {emptyCart} = useContext(context)
  const {totalPrice, totalQuantity} = useContext(context)
  const {cart} = useContext(context)

  const navigate = useNavigate()

  const handleClick = () => {
    return navigate(`/`)
  }

  return (  
    <>      
      <h3>Carrito{name}</h3>
      <p>Total: ${totalPrice()}</p>
      {totalQuantity()> 1 ? <p>Cantidades: {totalQuantity()}</p> : <p>Cantidad: {totalQuantity()}</p>}
      {cart.length > 0 ? <button className="cartButton" onClick={emptyCart}>Vaciar carrito</button> : 
      <button className="cartButton" onClick={handleClick}>Volver al inicio</button>}    
    </>    
  )
}
export default Cart