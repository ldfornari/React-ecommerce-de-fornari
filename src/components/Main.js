import ItemListContainer from './ItemListContainer'
import ItemDetailContainer from './ItemDetailContainer'
// import {Routes, Route} from 'react-router-dom';

const Main = () => {
    return (
        <main className="main">
            <h2>Nuestras ofertas de la semana</h2>
            <ItemListContainer/>
            <ItemDetailContainer/>
        </main>
    )
}
export default Main