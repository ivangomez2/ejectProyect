import React, { useEffect, useState } from 'react'

import Methods from './Methods'
import descuMenu from "../../imgs/descuMenu.png";
import exploMenu from "../../imgs/exploMenu.png";
import sueMenu from "../../imgs/sueMenu.png";
import videoSue from "../../imgs/videoSue.mp4";
const MethodListContainer = () => {
  
  const [products,setProductos] = useState([])

  const prod = [{
    img:sueMenu,
    videos: videoSue,
    color:"Work shop técnicos artísticos",
    colorLogo:"Ejet Proyect",
    descColor:"con la actualizacion de coleccion de diseño capilar en formatos de 8 horas permitiendo así ejecutar de forma clara y segura el metodo",
    id:1,
    nombre:"Integración sueña",
    objetivo:"El objetivo del circuito Integración Sueña es integrar al profesional mostrando las herramientas intelectuales y destrezas tecnicas que permite realizar el funcionamiento directo , claro y seguro del método Ejet proyect.",
    detailTitle:"Más detalles",
    detailSubTitle:"WorkShop de 8 horas por área:",
    detail1:"Trabajo grupal",
    detail2:"Posición tecnico corporal",
    detail3:"Manejo de herramientas"
  },{
    id:2,
    img: descuMenu,
    nombre:"Formación descubre",
    descripcion:"texto,texto,texto"
  },{
    id:3,
    img:exploMenu,
    nombre:"Nivelación explora",
    descripcion:"texto,texto,texto"
  }]

  

   
  useEffect(() => {
    
    const prom = new Promise((resolve,rejected)=>{
      return resolve(prod)
    }).then(res =>{
      setProductos(res)
      console.log(products);
    })
  }, [])
  
  
  
   console.log(products);
    return (
    <div>
    <Methods productos={products} />
    </div>
  )
}

export default MethodListContainer