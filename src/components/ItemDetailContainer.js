import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import productsDataBase from "./products.json"
import ClipLoader from "react-spinners/ClipLoader"
import { db } from "./firebase"

const ItemDetailContainer = () => {

    const [charging, setCharging] = useState(true)
    const [product, setProduct] = useState({})
    

    console.log(productsDataBase)
   

    useEffect(() => {
      
       const detailProduct = productsDataBase.filter((product)=>{return product.id === "1"})
      
         console.log(detailProduct)
         console.log(product.id)
      

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
        <ItemDetail product={product} key={product[0].id} detail={product[0].detail}/>     
      )   
    }
}

export default ItemDetailContainer