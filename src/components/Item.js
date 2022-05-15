import React from "react"


const handleClick = ({product}) => {
  return (
    console.log("Hice Click")
  ) 

}
console.log(handleClick)

const Item = ({product}) => {

  return (  <>  
      <article className= "card">
        <h3>{product.name}</h3>
        <img src={product.image} alt="img-clock" width={200}/>    
        <p>Precio: $ {product.price}</p>
        <p>Categorías: {product.category.map(categories=>{
          return <span>{categories} {" "}</span>
        })} </p> 
        <button onClick={handleClick}>Ver más</button>       
      </article> </>
      
  )
}
 
export default Item
