import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import productsDataBase from "./products.json"
import ClipLoader from "react-spinners/ClipLoader"
import { useParams } from "react-router-dom"
import { db } from "./firebase"

const ItemListContainer = () => {

   const [charging, setCharging] = useState(true)
   const [products, setProducts] = useState([])
   const {nameCategory}  = useParams()

   useEffect(() => {

      if(nameCategory === undefined){
         const order = new Promise((res)=>{        
            setTimeout(()=>{   
               res(productsDataBase)
            },2000)
         })
         order
            .then(()=>{
               setProducts(productsDataBase)
               setCharging(false) 
            })
      }else{
            const order = new Promise((res)=>{        
            setTimeout(()=>{   
               res(productsDataBase)
            },2000)
         })
         order
            .then(()=>{         
               setProducts(productsDataBase.filter((product)=>{return product.category === nameCategory}))        
               setCharging(false) 
            })
      }

   },[nameCategory])

   if (charging) {
      return (
         <>
         <p>Cargando productos.......</p>
         <ClipLoader color= "red-100"/>
         </>
      )
   }else{
      return(
         <ItemList products={products}/>     
      )
   }
}

export default ItemListContainer
