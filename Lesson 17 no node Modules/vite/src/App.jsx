import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import Details from './Pages/Details'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/Contact' element = {<Contact/>}></Route>
        <Route path = '/Details/*' element = {<Details/>}></Route>
      </Routes>
    </div>
  )
}

export default App