import React from 'react'
import { Link } from 'react-router-dom'
const Card = ({prop}) => {

  return (
    <div className='cards'>
            {prop.map(({id,name,address,email,username}) =>{
        return (<Link to = {`/${id}`} className='card'>
            <h1>{name}</h1>
            <h3>The email: {email}</h3>
            <p>The address: {address.city + " " + address.street}</p>
            <img src={username} alt={username} />
        </Link>)
    })}
    </div>


  )
}

export default Card