import React from 'react'

const BenefitsMidCard = ({ propsh2, propsh1, propsp, propsSrc, propsid, propsclr }) => {

    if (propsid % 2 == 1) {
        return (
            <div className="containerfather" style={{backgroundColor: `${propsclr}`}}>
                <div className="container">
                    <div className='midcardodds'>
                        <div className="left">
                            <h2>{propsh2}</h2>
                            <h1>{propsh1}</h1>
                            <p>{propsp}</p>
                        </div>
                        <div className="right">
                            <img src={propsSrc} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="containerfather" style={{backgroundColor: `${propsclr}`}}>
                <div className="container">
                    <div className='midcardevens'>
                        <div className="left">
                            <img src={propsSrc} alt="" />

                        </div>
                        <div className="right">
                            <h2>{propsh2}</h2>
                            <h1>{propsh1}</h1>
                            <p>{propsp}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BenefitsMidCard