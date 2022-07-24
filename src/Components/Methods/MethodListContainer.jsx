import React, { useState } from 'react'
import MethodList from './MethodList'
import Methods from './Methods'

const MethodListContainer = () => {
  
  const [productos,setProductos] = useState()

  const prod = [{
    id:1,
    nombre:"Integración sueña",
    descripcion:"texto,texto,texto"
  },{
    id:2,
    nombre:"Formación descubre",
    descripcion:"texto,texto,texto"
  },{
    id:3,
    nombre:"Nivelación explora",
    descripcion:"texto,texto,texto"
  }]
  
   setProductos(prod)
  
  
   console.log(productos);
    return (
    <div>
    <Methods productos={productos} />
    </div>
  )
}

export default MethodListContainer