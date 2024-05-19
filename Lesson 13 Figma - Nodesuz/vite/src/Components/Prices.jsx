import React, { useState } from 'react'
import PriceOfferTable from './PriceOfferTable'

const Prices = () => {
    const [standardSpecs,setStandardSpecs] = useState({clr0:'#F4F6FC',clr1: '#282938',clr2:'#2405F2',clr3: '#282938'})
    const [blueSpecs,setBlueSpecs] = useState({clr0:'#1C1E53',clr1: '#FFFFFF',clr2:'#FCD980', clr3:'#FCD980'})

    return (
        <div>
            <div className="containerfatherwhite">
                <div className="container">
                    <div className="Prices">
                        <PriceOfferTable specsProp = {standardSpecs}/>
                        <PriceOfferTable specsProp = {blueSpecs}/>
                        <PriceOfferTable specsProp = {standardSpecs}/>
                    </div>
    
                </div>
            </div>
    
        </div>
      )
}

export default Prices