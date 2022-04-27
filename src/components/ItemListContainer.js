import { useEffect, useState } from "react"
import ItemList from "./ItemList"

const productsDataBase = [
   {
     id: 1,
     name: "Xiaomi Mi Band I",
     price: 100,
     image: "https://i01.appmifile.com/webfile/globalimg/products/pc/redmi-smart-band-pro/section06-01.png",
     category: ["smart-band", "smart-watch"]
   },
   {
     id: 2,
     name: "Xiaomi Mi Band II",
     price: 200,
     image: "https://i01.appmifile.com/webfile/globalimg/products/pc/redmi-smart-band-pro/section06-02.png",
     category: ["smart-band", "smart-watch"]
   },
   {
     id: 3,
     name: "Xiaomi Mi Band III",
     price: 300,
     image: "https://i01.appmifile.com/webfile/globalimg/products/pc/redmi-smart-band-pro/section06-03.png",
     category: ["smart-band", "smart-watch"]
   }
]

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
         <p>Cargando datos.......</p>
      )
   }else{
      return(
         <ItemList products={products}/>     
      )
   }
}

export default ItemListContainer
