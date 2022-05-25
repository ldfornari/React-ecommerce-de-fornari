import React from "react" 
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import { BrowserRouter } from "react-router-dom"
import { CustomProvider } from "./CartContext"
import { context } from "./CartContext"

const App = () => {

  return (      
      <BrowserRouter>
        <context.CustomProvider>    
          <Header/>    
          <Main/>
        </context.CustomProvider>
          <Footer/>        
      </BrowserRouter>      
  )
}
export default App