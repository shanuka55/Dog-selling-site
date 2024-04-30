import React, { useState } from 'react'
import '../component/Navbar.css';
import  { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../Assets/logo.png'


const Navbar = () => {

  //setting mobile nav
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

   //change nav colour when scroling
   const [color, setColor] = useState(false)
   const changeColor = () =>{
    if (window.scrollY >= 90) {
      setColor(true)
    }else {
      setColor(false)
    }
   } 
   window.addEventListener('scroll',changeColor);


 //close menu on click
    const closeMenu = () => setClick(false)

  return (
    <header className={color ? 'header header-bg' : 'header'}>
        <nav className='navbar'>
            <a href='/' className='logo'>
              <img src={logo} alt='logo' />
            </a>
            <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className='nav-item'><Link to="/" spy={true} smooth={true} offset={-100} duration={500}>Home</Link></li>
                <li className='nav-item'><Link to="" spy={true} smooth={true} offset={-100} duration={500}>About Us</Link></li>
                <li className='nav-item'><Link to="/Find" spy={true} smooth={true} offset={-100} duration={500}>Dog Breeds</Link></li>
                <li className='nav-item'><Link to="" spy={true} smooth={true} offset={-150} duration={500}>Countact Us</Link></li>
                <button className='signin-btn'> <span>Sign In</span>
                </button>
            </ul>
        </nav>
    </header>

  )
}

export default Navbar