import React from 'react'
import Cards from './cards'
import { Route, Routes } from 'react-router'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Details from './pages/details'



const App = () => {
  return (
    <div>
    <Routes>
      <Route path='/' element = {<Home/>} />
      <Route path='/about' element = {<About/>} />
      <Route path='/contact' element = {<Contact/>} />
      <Route path='/*' element = {<Details/>} />
    </Routes>
    </div>


  )
}

export default App