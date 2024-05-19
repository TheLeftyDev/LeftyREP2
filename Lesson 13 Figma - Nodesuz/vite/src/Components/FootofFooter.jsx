import React from 'react'
import { NavLink } from 'react-router-dom'

const FootofFooter = () => {
    return (
        <div className="foot">
            <div className="left">
                <h4>Copyright 2021, Finsweet.com</h4>
            </div>
            <div className='right'>
                <NavLink to={'/'} className='link'>Home</NavLink>
                <NavLink to={'/about'} className='link'>About Us</NavLink>
                <NavLink to={'/features'} className='link'>Features</NavLink>
                <NavLink to={'/pricing'} className='link'>Pricing</NavLink>
                <NavLink to={'/pricing'} className='link'>FAQ</NavLink>
                <NavLink to={'/work'} className='link'>Work</NavLink>
                <NavLink to={'/blog'} className='link'>Blog</NavLink>
            </div>
        </div>

    )
}

export default FootofFooter