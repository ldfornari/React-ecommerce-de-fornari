import { useContext } from 'react'
import CartWidget from './CartWidget'
import { Link, NavLink } from 'react-router-dom'
import { authContext } from './AuthContext'

const NavBar = ({footer}) => {

    const { logout } = useContext(authContext) 
    const { user } = useContext(authContext)

    const handleClick = () => {
        return logout()
    }

    return (
        <nav className="nav">
            {!footer && user && <p>Bienvenido {user.email}</p>}
            {!footer && user ?  <button className="buttonLogin" type="onClick" onClick={handleClick}>Logout</button>: !footer && <NavLink to="/login" className="buttonLogin"> Ingresar </NavLink>}
            {!footer && !user && <NavLink to="/register" className="buttonLogin"> Registrate </NavLink>}
            <NavLink to="/" className="nav__link">Inicio</NavLink>
            <NavLink to="/products/Smartwatches" className="nav__link">Smartwatches</NavLink>
            <NavLink to="/products/Smartphones" className="nav__link">Smartphones</NavLink>
            <NavLink to="/products/Tablets" className="nav__link">Tablets</NavLink>
            {!footer && <Link className="nav__link" to="/cart"> <CartWidget/> </Link>}               
        </nav>
    )
}
export default NavBar