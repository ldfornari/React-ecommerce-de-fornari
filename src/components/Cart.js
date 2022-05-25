import React, { useContext } from 'react'
//import { BsFillTrashFill } from 'react-icons/bs'
import { context } from './CartContext'

const Cart = ({name, price, quantity, id}) => {

  const {removeFromCart} = useContext(context)  

  return (  
    <div>
      
      <h3>{name}</h3>
      <p>Precio: ${price}</p>
      <p>Cantidad: {quantity}</p>
      <button className='btn-count' onClick={() => {removeFromCart(id)}}>
{/*         
        <BsFillTrashFill /> */}
          
      </button>
    </div>    
  )
}
export default Cart