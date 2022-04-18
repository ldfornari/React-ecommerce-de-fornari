import CartWidget from './CartWidget'

const NavBar = () => {
    return (
        <nav className="nav">
            <a href="/" className="nav__link">Inicio</a>
            <a href="/" className="nav__link">Productos</a>
            <a href="/" className="nav__link">Contactanos</a>
            <CartWidget/>
        </nav>
    )
}
export default NavBar