import React from 'react'
import ItemCount from './ItemCount'
import { db } from "./firebase"
import { collection,query,where,getDocs} from 'firebase/firestore';




const Cart = () => {

  <ItemCount />

  return (  
    <div>Confirma carga de carrito!!!</div>    
  )
}

export default Cart
