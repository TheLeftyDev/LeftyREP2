import React from 'react'
import {NavLink} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navlar'>
        <NavLink className = 'link' to = '/'>Home</NavLink>
        <NavLink className = 'link' to = '/Contact'>Contact</NavLink>
    </div>
  )
}

export default Navbar