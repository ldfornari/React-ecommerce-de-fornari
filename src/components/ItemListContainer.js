import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import productsDataBase from "./products.json"
import ClipLoader from "react-spinners/ClipLoader"

const ItemListContainer = () => {

   const [charging, setCharging] = useState(true)
   const [products, setProducts] = useState([])

   useEffect(() => {

      const order = new Promise((res,rej)=>{
        
         setTimeout(()=>{   
            res(productsDataBase)
         },2000)
      })
      order
         .then(()=>{
            console.log("Salio todo Bien")
            setProducts(productsDataBase)
            setCharging(false) 
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









// import { useEffect, useState } from "react"
// import ItemList from "./ItemList"
// import productsDataBase from "./products.json"
// // import ClipLoader from "react-spinners/ClipLoader"

// const ItemListContainer = () => {

//    const [charging, setCharging] = useState(true)
//    const [products, setProducts] = useState([])

//    useEffect(() => {

//       const order = new Promise((res,rej)=>{
        
//          setTimeout(()=>{   
//             res(productsDataBase)
//          },2000)
//       })
//       order
//          .then(()=>{
//             console.log("Salio todo Bien")
//             setProducts(productsDataBase)
//             setCharging(false) 
//          })
         
//    },[])

//    if (charging) {
//       return (
//          <>
//          <p>Cargando datos.......</p>
//          {/* < ClipLoader/> */}
//          </>
//       )
//    }else{
//       return(
//         <p>hola</p>
//         // <ItemList products={products}/>     
//       )
//    }
// }

// export default ItemListContainer
