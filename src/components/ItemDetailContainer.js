import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import productsDataBase from "./products.json"
import ClipLoader from "react-spinners/ClipLoader"
import id from "./Item"
import { db } from "./firebase"

const ItemDetailContainer = () => {

    const [charging, setCharging] = useState(true)
    const [product, setProduct] = useState({})

    useEffect(() => {
      
      const detailProduct = productsDataBase.filter((product)=>{return product.id === id})
      
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
         
   },[product.id])

    if (charging) {
      return (
        <>
        <p>Cargando detalles.......</p>
        <ClipLoader color= "red-100"/>
        </>

      )
    }else{               
      return(    
        <ItemDetail product={product} key={product.id} detail={product.detail}/>     
      )   
    }
}

export default ItemDetailContainer