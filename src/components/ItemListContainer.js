import { useEffect, useState } from "react"
import ItemList from "./ItemList"
//import productsDataBase from "./products.json"
import ClipLoader from "react-spinners/ClipLoader"
import { useParams } from "react-router-dom"
import { db } from "./firebase"
import { collection,query,where,getDocs} from 'firebase/firestore';

const ItemListContainer = () => {

   const [charging, setCharging] = useState(true)
   const [products, setProducts] = useState([])
   const {nameCategory}  = useParams()
   

   useEffect(() => {
      const itemCollection = collection(db,"products")
      const queryCollection = getDocs(itemCollection)
      
      queryCollection
      .then((res)=>{
         const products = res.docs.map(doc=>{
         console.log(doc.data())
         const productsWithId = {...doc.data(),id:doc.id}
         return productsWithId
        })

        setProducts(products)
        setCharging(false) 

      })
      .catch(()=>{
         console.log("Error")
      })
      .finally(()=>{
         console.log("Finally")
      })
   },[])
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







      


      

  

