import React, { useRef } from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/home'
import About from './pages/about'
import Faqq from './pages/faqq'
import Pricing from './pages/pricing'
import Blog from './pages/blog'
import Features from './pages/features'
import './style.css'
import Work from './pages/Work'



const App = () => {
  return (
    <div>
        <Routes>
            <Route path= '/' element = {<Home/>}/>
            <Route path= '/about' element = {<About/>}/>
            <Route path= '/faqq' element = {<Faqq/>}/>
            <Route path= '/features' element = {<Features/>}/>
            <Route path= '/blog' element = {<Blog/>}/>
            <Route path= '/Pricing' element = {<Pricing/>}/>
            <Route path= '/Work' element = {<Work/>}/>
        </Routes>
    </div>


  )
}

export default App