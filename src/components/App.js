import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
// import { useState } from "react"
// import { BrowserRouter } from "react-router-dom"
//import { ToastContainer } from "react-toastify"
//import "react-toastify/dist/ReactToastify.css"


// const Ejemplo = () => {

//     //const miVariable = "1"
//     const [miVariable, setMiVariable] = useState("1")
    
//     const handleClick1 = () => {
//       setMiVariable("1")
//     }
  
//     const handleClick2 = () => {
//       setMiVariable("2")
//     }
  
//     const handleClick3 = () => {
//       setMiVariable("3")
//     }
  
//     if(miVariable="1"){
//       return (
//         <>
//           <img src="https://via.placeholder.com/300x300" onClick={handleClick1}/>
//           <img src="https://via.placeholder.com/300x300" onClick={handleClick2}/>
//           <img src="https://via.placeholder.com/300x300" onClick={handleClick3}/>
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quasi, voluptate blanditiis amet repellendus placeat ipsam asperiores dolorem tempora, ratione assumenda eveniet reiciendis quia minus natus perspiciatis veniam minima delectus!</p>
//         </>
//       )
//     }
  
//     if(miVariable="2"){
//       return (
//         <>
//           <img src="https://via.placeholder.com/300x300" onClick={handleClick1}/>
//           <img src="https://via.placeholder.com/300x300" onClick={handleClick2}/>
//           <img src="https://via.placeholder.com/300x300" onClick={handleClick3}/>
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae quasi, voluptate blanditiis amlectus!</p>
//         </>
//       )
//     }
  
//     if(miVariable="3"){
//       return (
//         <>
//           <img src="https://via.placeholder.com/300x300" onClick={handleClick1}/>
//           <img src="https://via.placeholder.com/300x300" onClick={handleClick2}/>
//           <img src="https://via.placeholder.com/300x300" onClick={handleClick3}/>
//         </>
//       )
//     }
  
//   }





const App = () => {
    return <> 
    {/* <BrowserRouter>     */}
      <Header/>    
      <Main/>
      <Footer/> 
    {/* </BrowserRouter> */}
    </>
}
export default App






