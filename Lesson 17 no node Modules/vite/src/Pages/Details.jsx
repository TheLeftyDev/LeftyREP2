import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import Navbar from '../../Components/Navbar'
import Menu from '../../Components/Menu'
const Details = () => {
  let aydi = useParams()
  let realaydi = aydi['*']
  return (
    <div>
        <Navbar/>
        <Menu realaydi={realaydi}/>
    </div>
  )
}

export default Details