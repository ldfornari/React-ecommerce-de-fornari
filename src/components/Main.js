import ItemListContainer from './ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer'
import { Routes, Route } from 'react-router-dom'
import CartWidget from './CartWidget'

const Main = () => {
    return (
        <main className="main">
            <h2>Nuestras ofertas de la semana</h2>
            <Routes>
                <Route path="/" element={<ItemListContainer/>} />
                <Route path="/products/:nameCategory" element={<ItemListContainer/>} />
                <Route path="/product/:id" element={<ItemDetailContainer/>} />
                <Route path="/cartWidget" element={<CartWidget/>} />
            </Routes>           
        </main>
    )
}
export default Main