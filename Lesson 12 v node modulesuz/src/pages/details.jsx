import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
const Details = () => {
    const aydi = useParams()
    const url = "https://jsonplaceholder.typicode.com/users/"
    const [obj, setObj] =useState({})
    useEffect(()=>{
        axios(url).then(({data})=>{
            data.map((elem)=>{
                if(elem.id == aydi['*']){
                    setObj(elem)
                }
            })
            
        })
    },[])
  return (
    <div>
        <h1>{obj.name}</h1>
        <h1>{obj.email}</h1>
        <h1>{obj.username}</h1>
    

    </div>
  )
}

export default Details