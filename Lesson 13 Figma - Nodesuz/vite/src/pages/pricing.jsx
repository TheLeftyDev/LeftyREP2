import React, { useEffect, useRef } from 'react'
import Navbar from '../Components/navbar'
import OurPricing from '../Components/OurPricing'
import Prices from '../Components/Prices'
import FrequentlyAsked from '../Components/FrequentlyAsked'
import Footer from '../Components/Footer'

const Pricing = () => {
  const sectionRef = useRef(null)
  // useEffect(() => {
  //   // this is for Scrolling to FAQ once it's mounted
  //   scrollToSection();
  // }, []);
  const scrollToSection = () =>{
    if(sectionRef.current) {
      sectionRef.current.scrollIntoView({behavior: 'smooth'})
    }
  }
  return (
    <div>
        <Navbar scrollToSection={scrollToSection}/>
        <OurPricing/>
        <Prices/>
        <div ref={sectionRef}>
        <FrequentlyAsked/>
        </div>
        <Footer/>


    </div>
  )
}

export default Pricing