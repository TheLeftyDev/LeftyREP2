import React from 'react'

const Card = ({propsData}) => {
  return (
    <div>
        <div className="Card">
        <h1>{propsData.ad}</h1>
        <img src={propsData.imgSrc} alt="image" />
        <h2>Rating: {propsData.rating}</h2>
        <h3>Address: {propsData.address}</h3>

        </div>

    </div>
  )
}

export default Card