import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import ClipLoader from "react-spinners/ClipLoader"
import { useParams } from "react-router-dom"
import { db } from "./firebase"
import { collection,query,where,getDocs, getDoc, doc} from 'firebase/firestore'

const ItemListContainer = () => {

   const [charging, setCharging] = useState(true)
   const [products, setProducts] = useState([])
   const {nameCategory}  = useParams()
   

   useEffect(() => {

      setCharging(true)

         const myCollection = collection(db,"products")
         const itemQuery = nameCategory ? query(myCollection,where('category','==',nameCategory)) : myCollection
         getDocs(itemQuery)

         .then((data)=>{
            setProducts(data.docs.map((doc)=>({id:doc.id,...doc.data()})))
         })
         .finally(()=>{
            setCharging(false)
         })


  }, [nameCategory]) 

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