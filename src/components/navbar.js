import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Brand } from './assets/breakfastclublogo.svg'
import { ReactComponent as Hamburger } from './assets/icons8-hamburger-menu-50.svg'
import './navbar.css'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
        <NavLink to="/breakfast-club"><Brand></Brand></NavLink>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
        <Hamburger ></Hamburger>
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/breakfast-club">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About Us</NavLink>
            </li>
            <li>
              <NavLink to="/catalog">Catalog</NavLink>
            </li>
            <li>
              <NavLink to="/meals">Meals</NavLink>
            </li>
            <li>
              <NavLink to="/guidelines">Guidelines</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar