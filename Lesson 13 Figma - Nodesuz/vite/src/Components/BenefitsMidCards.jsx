import React, { useState } from 'react'
import { MidCards } from './MockData'
import BenefitsMidCard from './BenefitsMidCard'
const BenefitsMidCards = () => {
    return(
            <div className="midcardscontent">
                {MidCards.map((midcard) => {
                    return <BenefitsMidCard key={midcard.id} propsh2 = {midcard.h2} propsSrc={midcard.imgSrc} propsid={midcard.id} propsh1={midcard.h1} propsp={midcard.p} propsclr={midcard.clr}/>
                })}
            </div>
    )
}

export default BenefitsMidCards