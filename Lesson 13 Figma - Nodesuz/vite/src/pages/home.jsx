import React from 'react'
import Navbar from '../Components/navbar'
import StellarWebsite from '../Components/StellarWebsite'
import HowWeWork from '../Components/HowWeWork'
import FrequentlyAsked from '../Components/FrequentlyAsked'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <StellarWebsite/>
        <HowWeWork/>
        <FrequentlyAsked/>
        <Footer/>

    </div>
  )
}

export default Home