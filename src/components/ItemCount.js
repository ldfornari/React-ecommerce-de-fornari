import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


const ItemCount = ({stock, initial, onClick}) => {

    const [count, setCount] = useState(+initial)
    const [confirmed, setConfirmed] = useState(false)

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
            </div>
        )
    }else{
        if(count > 1){
        return (
            <div className= "ItemCount">
                <div className='modal'>
                    <p>Se confirman {count} unidades!</p>
                    <button className='btn-count' onClick={cancel} > Cancelar </button>
                    <button className= "btn-addCart" onClick={changeConfirmed} > Confirmar Compra </button>                    
                </div>
            </div>
        )
        }else{
            return (
                <div className= "ItemCount">
                    <div className='modal'>
                        <p>Se confirma {count} unidad!</p>
                        <button className='btn-count' onClick={cancel} > Cancelar </button>
                        <Link to="/cart">
                            <button className= "btn-addCart" onClick={changeConfirmed}> Confirmar Compra </button>
                        </Link>                    
                    </div>
                </div>
            )
        }
    }

}

export default ItemCount

