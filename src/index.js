import React from "react"
//import ReactDOM from 'react-dom'    version anterior
import ReactDOM from "react-dom/client" 


import App from "./components/App"  //importo la funcion App

import "./scss/style.scss"  // importo los estilos de SCSS


const root = ReactDOM.createRoot(document.getElementById("root"))

//ReactDOM.render(<App/>, document.getElementById("root"))

root.render(<App/>)