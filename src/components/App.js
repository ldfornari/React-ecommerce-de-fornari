import React from "react" 
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import { BrowserRouter } from "react-router-dom"
import { CustomProvider } from "./CartContext"


const App = () => {

  return (      
      <BrowserRouter>
        <CustomProvider>    
          <Header/>    
          <Main/>
        </CustomProvider>
          <Footer/>        
      </BrowserRouter>      
  )
}
export default App