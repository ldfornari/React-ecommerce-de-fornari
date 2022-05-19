import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import productsDataBase from "./products.json"
import ClipLoader from "react-spinners/ClipLoader"
import { db } from "./firebase"

const ItemDetailContainer = () => {

    const [charging, setCharging] = useState(true)
    const [product, setProduct] = useState({})
    const {id}  = useParams()

    useEffect(() => {
      
      const detailProduct = productsDataBase.filter((product)=>{
          return product.id === id
        
        })[0]
      
     const order = new Promise((res)=>{
        
      setTimeout(()=>{   
           res(detailProduct)
       },2000)
   
           
      })
      order
        .then(()=>{
        console.log(detailProduct)         
        setProduct(detailProduct)
        setCharging(false) 
           
         })
         
   },[id])

    if (charging) {
      return (
        <>
        <p>Cargando detalles.......</p>
        <ClipLoader color= "red-100"/>
        </>

      )
    }else{               
      return(    
        <ItemDetail {...product}/>
      )   
    }
}

export default ItemDetailContainer