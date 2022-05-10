import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import productsDataBase from "./products.json"


const ItemDetailContainer = () => {

    const [charging, setCharging] = useState(true)
    const [product, setProduct] = useState({})
    

    console.log(productsDataBase)
   

    useEffect(() => {


       const detailProduct = productsDataBase.filter((producto)=>{return producto.id === id})
      
         console.log(detailProduct)
         console.log(product.id)
         console.log({id, test})

      const order = new Promise((res)=>{
        
         setTimeout(()=>{   
            res(detailProduct)
         },2000)
      })
      order
         .then(()=>{
            console.log("Salio todo Bien")         
            setProduct(detailProduct)
            setCharging(false) 
         })
         
   },[id, product.id])

   if (charging) {
      return (
         <p>Cargando detalles.......</p>
      )
   }else{               
      return(
         <>
         <p>productos cargados</p>
         <ItemDetail key={product.id} product={product}/>
         </>
      )   
   }
}

export default ItemDetailContainer