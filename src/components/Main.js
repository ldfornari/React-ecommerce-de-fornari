import React from 'react'
import ItemListContainer from './ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer'
import { Routes, Route } from 'react-router-dom'
import Cart from './Cart'
 

const Main = () => {
    return (
        <main className="main">
            <Routes>
                <Route path="/" element={<ItemListContainer/>} />
                <Route path="/products/:nameCategory" element={<ItemListContainer/>} />
                <Route path="/product/:id" element={<ItemDetailContainer/>} />
                <Route path="/cart" element={<Cart/>} />
            </Routes> 
        </main>
    )
}
export default Main