import React, { useState, useContext }from 'react'
import { context } from './CartContext'

const ItemCount = ({stock, id, initial, onClick }) => {

    const [count, setCount] = useState(initial)
    const [confirmed, setConfirmed] = useState(false)

    const {removeFromCart} = useContext(context)
    const {cart} = useContext(context)


    const plusCount = () => {
       if (count < stock) {
          setCount(count + 1)
          stock = stock - 1
       } 
    }

    const lessCount = () => {
       if (count > 1 ){
          setCount(count - 1)
          stock = stock + 1
       }
    }

    const addCart = () => {       
        setConfirmed(true)          
    }

    const changeConfirmed = () => {                
        setConfirmed(false) 
        onClick(count)
    }

    const cancel= () => {
        setConfirmed(false)
    }
 
    if(!confirmed){
        return (
            <div className= "ItemCount">
                <div className='btns-card'>
                    <button className='btn-less'onClick={lessCount}> - </button>
                    <button className='btn-count'>{count}</button>
                    <button className='btn-plus' onClick={plusCount}> + </button>
                </div>
                <div>
                    <button onClick={addCart} className= "btn-addCart">Agregar al carrito</button>
                </div>
                <div>
                    {cart.filter(product => product.id == id) != 0 && <button className="btnClear" onClick={() => { removeFromCart(id) }} > Quitar del Carrito </button>}
                </div>
            </div>
        )
    }else{
        return (
            <div className= "ItemCount">
                <div className='modal'>
                    {count > 1 ? <p>Se confirman {count} unidades!</p> : <p>Se confirma {count} unidad!</p>}
                    <button className='btn-count' onClick={cancel} > Cancelar </button>                   
                    <button className= "btn-addCart" onClick={changeConfirmed} > Confirmar Compra </button>                    
                </div>
            </div>
        )
    }

}

export default ItemCount

