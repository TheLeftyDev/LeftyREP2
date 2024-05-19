import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = ({ scrollToSection }) => {
  return (
    // style={{ color: bckcolor.clr, backgroundColor: bckcolor.bck }}
    <div className="containerfather">
    <div className="container">
    <div className='navbar'>
      <div className="left3">
        <Link to={'/'}><img style={{ width: '150px' }} src="/finsweetLogo.png" alt="" /></Link>
      </div>
      <div className="right3">
        <NavLink to={'/'} className='link'>Home</NavLink>
        <NavLink to={'/about'} className='link'>About Us</NavLink>
        <NavLink to={'/features'} className='link'>Features</NavLink>
        <NavLink to={'/pricing'} className='link'>Pricing</NavLink>
        <NavLink to={'/pricing'} onClick={scrollToSection} className='link'>FAQ</NavLink>
        <NavLink to={'/work'} className='link'>Work</NavLink>
        <NavLink to={'/blog'} className='link'>Blog</NavLink>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Navbar