import React from 'react'
import NavBar from './NavBar'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header className='header'>
            <Link className="nav__link" to="/" ><h1 className='header__title'>E-Commerce Center</h1></Link>
            <NavBar/>            
        </header>
    )
}
export default Header