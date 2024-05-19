import React from 'react'

const BenefitsTopCard = ({propsh1, propsp,propsSrc}) => {
    return (
        <div className='topcard'>
            <img src={propsSrc}  alt="" />
            <h1>{propsh1}</h1>
            <p>{propsp}</p>
        </div>
    )
}

export default BenefitsTopCard