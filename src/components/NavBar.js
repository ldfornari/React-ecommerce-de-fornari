import Cart from './Cart'
import CartWidget from './CartWidget'
import { Link, NavLink } from 'react-router-dom'

const NavBar = ({footer}) => {
        
    if(footer) {
    return (
            <nav className="nav">
                <NavLink to="/" className="nav__link">Inicio</NavLink>
                <NavLink to="/products/smart-watches" className="nav__link">Smart Watches</NavLink>
                <NavLink to="/products/smart-phones" className="nav__link">Smart Phones</NavLink>
                <NavLink to="/products/tablets" className="nav__link">Tablets</NavLink>
                <NavLink to="/contact" className="nav__link">Contactanos</NavLink>                
            </nav>
        )
    }else{ 
        return (
            <nav className="nav">
                <NavLink to="/" className="nav__link">Inicio</NavLink>
                <NavLink to="/products/smart-watches" className="nav__link">Smart Watches</NavLink>
                <NavLink to="/products/smart-phones" className="nav__link">Smart Phones</NavLink>
                <NavLink to="/products/tablets" className="nav__link">Tablets</NavLink>
                <NavLink to="/contact" className="nav__link">Contactanos</NavLink>
                <Link className="nav__link" to="/cart"> <CartWidget/> </Link>
            </nav>
        )        
    }
}
export default NavBar
