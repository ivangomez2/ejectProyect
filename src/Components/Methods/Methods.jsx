
import React from 'react'
import img from "../../imgs/Explora.png"
import sueña from "../../imgs/Sueña.png"
import descubre from "../../imgs/Descubre.png"
import "./Methods.css"

const Methods = () => {
  return (
    <div className='methods__Cont'>
       
    <img src={sueña} alt="" />
    <hr className='methods__hr' />
    <img  src={descubre} alt="" />
    <hr className='methods__hr' /> 
    <img src={img} alt="" />
    </div>
  )
}

export default Methods