import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Menu = ({realaydi}) => {
    const [obj, setObj] = useState({})
    const [objMenu, setObjMenu] = useState([])
    const url = 'http://localhost:3000/restaurants/'
    useEffect(()=>{
      axios(url+realaydi).then(({data})=>{
        setObj(data)
        setObjMenu(data.Menu)
      })    
    },[])
    console.log(objMenu)
  return (
    <div className="Menu">
        <div className="MenuImg">
            <img src={obj.imgSrc} alt="" />    
        </div>

        <div className="Foods">
        {objMenu.map((food)=>{
            return(
                        <div className="foodcard">
                            <h3>{food.adname}</h3>
                            <img src={food.imgSrcfood} alt="foodimg" />
                            <h1 style={{color: 'green'}}>{food.qiymet} manat</h1>

                        </div>
                
                
                
                
            )
        })}
        </div>
    </div>

  )
}

export default Menu