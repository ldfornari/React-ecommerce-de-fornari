import React, { useContext, useState } from 'react'
import { context } from './CartContext'
import { useNavigate } from "react-router-dom"
import { CartView } from './CartView'
import { db } from './firebase'
import { addDoc, collection } from 'firebase/firestore'

export const Cart = ({}) => {

  const {emptyCart} = useContext(context)
  const {totalPrice, totalQuantity} = useContext(context)
  const {cart} = useContext(context)
  const [idSale, setIdSale] = useState("")

  const navigate = useNavigate()

  const handleClick = () => {
    return navigate(`/`)
  }

  const saveSale = () => {

    const salesCollection = collection(db,'sales')

    const sale = {
      buyer: {
        name: 'Juan Perez',
        email: 'juanperez@gmail.com',
        phone: '1133445555'
      },
      items: cart,
      date: Date(),
      totalSale: totalPrice()
    }

    const pushSale = addDoc(salesCollection,sale)

    pushSale
    .then((res) => {
    
      setIdSale(res.id)
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      emptyCart()
    })

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
        {cart.length > 0 &&<button className="cartFinish" onClick={saveSale}>Terminar mi compra</button>}
        {idSale && <> 
                      <br/><br/>
                      <h3>La compra se realizó con exito!</h3> <br/>
                      <h4>Conserva el ID de la compra: {idSale}</h4>
                      <br/>
                   </>}
      </div>
    </>
  )
}
export default Cart