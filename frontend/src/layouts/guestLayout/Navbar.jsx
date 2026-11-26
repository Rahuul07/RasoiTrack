
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">

        <NavLink to="/" className="navbar-logo">
          🍃 Rasoi Katta
        </NavLink>

        <nav className="navbar-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/login" className="navbar-login">
            Login
          </NavLink>
        </nav>

      </div>
    </header>
  )
}

export default Navbar
