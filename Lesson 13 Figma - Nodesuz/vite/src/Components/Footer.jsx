import React, { useState } from 'react'
import Navbar from './navbar'
import { NavLink } from 'react-router-dom'
import FootofFooter from './FootofFooter'

const Footer = () => {
    // const [colordata,setColordata] = useState({bck:'#fff',clr:'#282938'}) islemedi bunu navbara yollamaq
    return (
        <div className="containerfather">
            <div className="container">

                <div className='Footer'>
                    <div className="left">
                        <img src="/finsweetLogo.png" alt="finsweet logo" />
                        <p>We are always open to discuss your project and improve your online presence.</p>
                        <div className="emailandnumber">
                            <h3>Email me at</h3>
                            <h3>Call us</h3>
                            <h4>contact@website.com</h4>
                            <h4>0927 6277 28525</h4>
                        </div>
                    </div>
                    <div className="right">
                        <h1>Lets Talk!</h1>
                        <p>We are always open to discuss your project, improve your online presence and help with your UX/UI design challenges.</p>
                        <div className='logos'>
                            <img src="/Logos/facebook.png" alt="logo" />
                            <img src="/Logos/instagram.png" alt="logo" />
                            <img src="/Logos/twitter.png" alt="logo" />
                            <img src="/Logos/linkedin.png" alt="logo" />
                        </div>
                    </div>

                </div>


            </div>
            <FootofFooter/>
        </div>

    )
}

export default Footer