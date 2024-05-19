import React from 'react'

const PriceOfferTable = ({specsProp}) => {
  return (
      <div>
        {console.log(specsProp)}
            <div style={{backgroundColor: `${specsProp.clr0}`, color: `${specsProp.clr1}`}} className="thePriceLeft">
                <div className="priceTop">
                    <h1>$299</h1>
                    <p style={{color: `${specsProp.clr2}`}}>Per Design</p>
                </div>
                <div className="priceMid">
                    <h2>Landing Page</h2>
                    <h4>When you’re ready to go beyond prototyping in Figma, </h4>
                </div>
                <div className="priceBottom">
                    <h3>▶ All limited links</h3>
                    <h3>▶ Own analytics platform</h3>
                    <h3>▶ Chat support</h3>
                    <h3>▶ Optimize hashtags</h3>
                    <h3>▶ Unlimited users</h3>
                </div>
                <div className="priceLastPart">
                    <button style={{backgroundColor: `${specsProp.clr3}`, color: `${specsProp.clr0}`}} >Get Started</button>
                </div>                          
            </div>
        </div>
  )
}

export default PriceOfferTable