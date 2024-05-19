import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HWWNumbers from './HWWNumbers'

const HowWeWork = () => {
    const [arr, setArr] = useState(
        [
            { src: "/Numbers/1.png", h1: 'Strategy', p: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .' },
            { src: "/Numbers/2.png", h1: 'Wireframing', p: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .' },
            { src: "/Numbers/3.png", h1: 'Design', p: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .' },
            { src: "/Numbers/4.png", h1: 'Development', p: 'Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .' }

        ]
    )
    return (
        <div className="containerfathergrey">
            <div className="container">

                <div className='HowWeWork'>
                    <div className="left">
                        <h1>How we work</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                        <Link className='link'>Get in touch with us →</Link>

                    </div>
                    <div className="right">
                        {arr.map((obj) => {
                            return (<HWWNumbers propsData={obj} />)
                        })}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowWeWork