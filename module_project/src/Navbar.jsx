import { useState } from 'react';
import Logo from './logo.jpg'
import { Link } from "react-router-dom"
import './Navbar.css'
import HamburgerIcon from './hamburger_icon.svg'


const Navbar = () => {

const [openLinks, setOpenLinks] = useState (false)

const toggleNavbar = () => {
  setOpenLinks (!openLinks)
}

  return (


    <div className='navbar'>
      <div className='leftSide' id={openLinks ? "open" : "close"}>
        <img src={Logo} alt="" />

        <div className='hiddenLinks'>

          <Link to="/" className="navbarLink">Home</Link>
          <Link to="/menu" className="navbarLink">Menu</Link>
          <Link to="/services" className="navbarLink">Services</Link>
          <Link to="/about" className="navbarLink">About</Link>
          <Link to="/contact" className="navbarLink">Contact</Link>

        </div>


      </div>

      <div className='rightSide'>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/services">Services</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>

        <button onClick={toggleNavbar}>
          <img src={HamburgerIcon} alt="Hamburger Icon" />
        </button>


      </div>
    </div>
  )
}

export default Navbar