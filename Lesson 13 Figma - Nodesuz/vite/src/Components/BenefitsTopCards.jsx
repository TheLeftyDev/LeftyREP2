import React, { useState } from 'react'
import { Topcards } from './MockData'
import BenefitsTopCard from './BenefitsTopCard'
const BenefitsTopCards = () => {
    return (
        <div className="containerfatherwhite">
            <div className="container">
                <div className='topcards'>
                    <div className="topcardstitle">
                        <h1>The benefits of working with our team</h1>

                    </div>
                    <div className="topcardscontent">
                        {Topcards.map((topcard) => {
                            return <BenefitsTopCard key={topcard.id} propsSrc={topcard.imgSrc} propsid={topcard.id} propsh1={topcard.h1} propsp={topcard.p} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BenefitsTopCards