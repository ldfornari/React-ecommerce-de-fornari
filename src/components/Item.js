import React from "react"
//import { useState } from "react"


export const handleClick = ({product}) => {

  const selectId = product.id  

  return (
    selectId
  ) 

}

const Item = ({product}) => {

  return (  <>  
      <article className= "card">
        <h3>{product.name}</h3>
        <img src={product.image} alt="img-clock" width={200}/>    
        <p>Precio: $ {product.price} </p>
        <p>Categorías: {product.category.map(categories=>{
          return <span>{categories} {" "}</span>
        })} </p> 
       <button onClick={handleClick}></button>
      </article> </>
        
  )
}
 
export default Item
