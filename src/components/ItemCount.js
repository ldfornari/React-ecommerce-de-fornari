import React from 'react'
import { useState } from 'react'
import clock from '../img/clock.jpg'

const result = 0

const ItemCount = (props) => {

    let stock = 5
    const [count, setCount] = useState(0)  
    const plusCount = () => {
       if (count < stock) {
          setCount(count+ 1)
          stock = stock - 1
       } 
    }
 
    const lessCount = () => {
       if (count > 0 ){
          setCount(count - 1)
          stock = stock + 1
       }
    }


    return (
        <div className= "ItemCount">
            <h3>Xiaomi Mi Band</h3>
            <img src={clock} alt="clock" width={200}/>
            <div className='btns-card'>
                <button className='btn-less'onClick={lessCount}> - </button>
                <button className='btn-count'>{count}</button>
                <button className='btn-plus' onClick={plusCount}> + </button>
            </div>
            <div>
                <button className= "btn-addCart">Agregar al carrito</button>
            </div>
        </div>
    
    )
}

export default ItemCount

