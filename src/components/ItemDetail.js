import React, { useContext }  from "react" 
import ItemCount from "./ItemCount"
import { cartContext } from "./CartContext"

const ItemDetail = (product) => {

    const { addToCart } = useContext(cartContext)
    
    const onClick = (quantity) => {
        addToCart(product, quantity)
    }


    return(      
        <article className="cardContainer">
            <section className= "card ">
                <h3>{product.name}</h3>
                <img src={product.image} alt="img-clock" width={200}/>    
                <p>Precio: $ {product.price}</p>
                <p>Categoría: {product.category}</p> 
                <p className="cardP">Detalle: {product.detail}</p> 
                <ItemCount stock={product.stock} initial={1} onClick={onClick} id={product.id}/>   
            </section>   
        </article>     
    )
   
}     
export default ItemDetail
