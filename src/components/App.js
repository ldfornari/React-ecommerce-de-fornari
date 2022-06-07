import React from "react" 
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import { BrowserRouter } from "react-router-dom"
import { CustomProvider } from "./CartContext"
import { AuthProvider } from "./AuthContext"


const App = () => {

  return (      
      <BrowserRouter>
        <AuthProvider>
          <CustomProvider>    
            <Header/>    
            <Main/>
          </CustomProvider>        
          <Footer/>
        </AuthProvider>        
      </BrowserRouter>      
  )
}

export default App