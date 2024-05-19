import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import QnA from './QnA'

const FrequentlyAsked = () => {



  return (
    <div>
      <div className="FrequentlyAsked">
        <div className="left">
          <h1>Frequently asked questions</h1>
          <Link style={{ color: '#2405F2' }}>Contact us for more info</Link>
        </div>
        <div className="right">
          <QnA/>
        </div>

      </div>


    </div>
  )
}

export default FrequentlyAsked