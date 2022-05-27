import React, { useContext } from 'react'
import { context } from './CartContext'
import { useNavigate } from "react-router-dom"
import { CartView } from './CartView'

export const Cart = ({name, price, quantity, id}) => {

  const {emptyCart} = useContext(context)
  const {totalPrice, totalQuantity} = useContext(context)
  const {cart} = useContext(context)

  const navigate = useNavigate()

  const handleClick = () => {
    return navigate(`/`)
  }

  return ( 
    <>
      <section className='cartList' >
        <CartView cart={cart}/>     
      </section> <br/> 

      {cart.length > 0 && <p>Precio Total: ${totalPrice()}</p>} <br/>
      {totalQuantity()> 0 && <p>Cantidad Total: {totalQuantity()}</p>}

      <div>
        {cart.length > 0 ? <button className="cartButton" onClick={emptyCart}>Vaciar carrito</button> :  
        <button className="cartButton" onClick={handleClick}>Volver al inicio</button>}     
        {cart.length > 0 &&<button className="cartFinish">Terminar mi compra</button>}
      </div>
    </>
  )
}
export default Cart