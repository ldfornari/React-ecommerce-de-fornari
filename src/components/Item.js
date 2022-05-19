import React from "react"
import { Link, useNavigate } from "react-router-dom"

const Item = ({product}) => {

  const navigate = useNavigate()

  const handleClick = () => {
    return (
      navigate(`/product/${product.id}`)
    ) 
  
  }  

  return (  <>  
      <article className= "card">
        <h3>{product.name}</h3>
        <img src={product.image} alt="img-clock" width={200}/>    
        <p>Precio: $ {product.price}</p>
        <p>Categoría: {product.category}</p> 
        <button onClick={handleClick} className="button">Ver más</button>    
      </article> 
      </>
      
  )
}
 
export default Item
