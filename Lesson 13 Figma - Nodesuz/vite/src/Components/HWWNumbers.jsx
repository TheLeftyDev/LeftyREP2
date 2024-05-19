import React from 'react'

const HWWNumbers = ({propsData}) => {
    return (
        <div className='card'>
            <img src={propsData.src} alt="img" />
            <h1>{propsData.h1}</h1>
            <p>{propsData.p}</p>
        </div>
    )
}

export default HWWNumbers