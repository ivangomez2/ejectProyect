import React, { useEffect, useState } from 'react'
import chicaSue from "../../imgs/sueñaChica.png"
import Methods from './Methods'
import descuMenu from "../../imgs/descuMenu.png";
import exploMenu from "../../imgs/exploMenu.png";
import sueMenu from "../../imgs/sueMenu.png";
import videoDes from "../../imgs/videoDes.png";
import collage from "../../imgs/Collage.png"
import img from "../../imgs/Explora.png";
import bannerSue from "../../imgs/introSue.png"

import videoEx from "../../imgs/videoEx.png";
import MethodsList from './MethodsListMenu';
import MethodsListMenu from './MethodsListMenu';
const MethodListContainer = () => {
  
  const [products,setProductos] = useState([])

  const prod = [{
    img: sueMenu,
    videos: chicaSue,
    color:"Workshop técnicos artísticos",
    colorLogo:"Ejet Proyect",
    descColor:"con la actualizacion de coleccion de diseño capilar en formatos de 8 horas permitiendo así ejecutar de forma clara y segura el metodo",
    id:1,
    nombre:"Integración sueña",
    objetivoColor:"El objetivo del circuito Integración Sueña",
    objetivo:"Integrar al profesional mostrando las herramientas intelectuales y destrezas tecnicas que permite realizar el funcionamiento directo , claro y seguro del método",
    detailTitle:"Más detalles",
    detailSubTitle:"WorkShop de 8 horas por área:",
    detail1:"Trabajo grupal",
    detail2:"Posición tecnico corporal",
    detail3:"Manejo de herramientas",
    Categoria:"Entrenamiento",
    banners: bannerSue,
    imgCat:{img},
    collage:collage
    
  },{
    id:2,
    color:"Clinicas técnico artísticas",
    descColor:"para grupos específicos y personalizados realizadas en salones de belleza o centros educativos programados en tres periodos de 8 horas por área",
    img: descuMenu,
    nombre:"Formación descubre",
    descripcion:"texto,texto,texto",
    videos: videoDes,
    Categoria:"Entrenamiento",
    banners:{bannerSue},
    collage:collage
  },{
    id:3,
    img:exploMenu,
    nombre:"Nivelación explora",
    color:"Capacitación integral",
    descColor:" en diseño capilar en las áreas de corte de dama y peinado corte de caballero y barbería , colorimetría y tratamientos modificadores.",
    descripcion:"texto,texto,texto",
    videos:videoEx,
    Categoria:"Entrenamiento",
    collage:collage
    
    
    ,
    banners:{bannerSue},
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