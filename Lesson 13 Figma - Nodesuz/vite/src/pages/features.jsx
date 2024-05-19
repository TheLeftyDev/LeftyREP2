import React from 'react'
import Navbar from '../Components/navbar'
import AlltheFeatures from '../Components/AllTheFeatures'
import Footer from '../Components/Footer'
import FrequentlyAsked from '../Components/FrequentlyAsked'
import BenefitsMain from '../Components/BenefitsMain'

const Features = () => {
  return (
    <div>
        <Navbar/>
        <AlltheFeatures/>
        <BenefitsMain/>
        <FrequentlyAsked/>
        <Footer/>


    </div>
  )
}

export default Features