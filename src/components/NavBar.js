import React from 'react'
import CartWidget from './CartWidget'
import { Link, NavLink } from 'react-router-dom'

const NavBar = ({footer}) => {
        
   
    return (
            <nav className="nav">
                <NavLink to="/" className="nav__link">Inicio</NavLink>
                <NavLink to="/products/Smartwatches" className="nav__link">Smartwatches</NavLink>
                <NavLink to="/products/Smartphones" className="nav__link">Smartphones</NavLink>
                <NavLink to="/products/Tablets" className="nav__link">Tablets</NavLink>
                {/* <NavLink to="/contact" className="nav__link">Contactanos</NavLink>  */}
                {!footer && <Link className="nav__link" to="/cart"> <CartWidget/> </Link>}               
            </nav>
        )
}
export default NavBar
