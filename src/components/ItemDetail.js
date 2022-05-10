import React from 'react'
import { handleClick } from './Item'

const ItemDetail = (product) => { 
 
  return (  <>  
    <article className= "card">
      <h3>{product.name}</h3>
      <img src={product.image} alt="img-clock" width={200}/>    
      <p>Precio: $ {product.price} </p>
      <p>Categorías: {product.category.map(categories=>{
        return <span>{categories} {" "}</span>
      })} </p>
      <p>Detalle: {product.detail}</p>
      
      <button onClick={handleClick}>Ver más...</button>
    </article></>
      
  )
}


export default ItemDetail