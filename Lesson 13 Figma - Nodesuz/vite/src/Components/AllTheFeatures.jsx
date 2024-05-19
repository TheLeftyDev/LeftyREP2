import React from 'react'
import { Link } from 'react-router-dom'
const AlltheFeatures = () => {
  return (
    <div>
        <div className="containerfather">
            <div className="container">
                <div className="stellarWebsiteDiv">
                    <div className="left">
                        <div className="lefttop">
                            <h1>Building stellar websites for early startups</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </div>
                        <div className="leftbottom">
                            <button className='viewOurWork'>View Pricing</button>
                            <Link className='link' to={'/Pricing'}></Link>
                        </div>
                    </div>
                    <div className="right">
                        <img src="/featuresimg.png" alt="image" />
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default AlltheFeatures