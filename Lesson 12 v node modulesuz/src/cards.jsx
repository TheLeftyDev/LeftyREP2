import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from './card'

const Cards = () => {
    const [arr,setArr] = useState([])
    const url = "https://jsonplaceholder.typicode.com/users/"
    useEffect(()=>{
        axios(url).then(({data})=>{
            setArr(data)
        })
    },[])


  return (
        <Card prop = {arr}/>
  )
}

export default Cards