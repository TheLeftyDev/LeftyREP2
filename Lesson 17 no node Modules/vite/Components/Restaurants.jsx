import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card'
import {Link} from 'react-router-dom'
const Restaurants = () => {
    const [restoranlar,setRestoranlar] = useState([])
    const url = 'http://localhost:3000/restaurants/'
    useEffect(()=>{
        axios(url).then(({data})=>{
            setRestoranlar(data)
        })
    },[])
    console.log(restoranlar);
// const detailseGet = () =>{
//     window.location
// }
  return (
    <div className='Restaurants'>
        {restoranlar.map((restoran)=>{
            return(
                <Link to={`/Details/${restoran.id}`}>
                    <Card propsData={restoran}/>
                </Link>
            )

        })}
    </div>
  )
}

export default Restaurants