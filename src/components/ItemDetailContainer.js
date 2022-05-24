import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom"
import ClipLoader from "react-spinners/ClipLoader"
import { db } from "./firebase"
import { getDoc, doc} from 'firebase/firestore';

const ItemDetailContainer = () => {

    const [charging, setCharging] = useState(true)
    const [product, setProduct] = useState({})
    const {id}  = useParams()

    useEffect(() => {

      setCharging(true)

      const  myProduct = doc(db,"products",id)
            getDoc(myProduct)
            
            .then((prod)=>{
                setProduct({id:prod.id, ...prod.data()})

            .catch(()=>{
                console.log("Error")
            })

            }).finally(() => {
                setCharging(false)
            }) 
    }, [id])

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