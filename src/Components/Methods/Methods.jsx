import React, { useEffect, useState } from "react";
import img from "../../imgs/Explora.png";
import entrenamiento from "../../imgs/entrrre.png";
import descubre from "../../imgs/Descubre.png";
import head from "../../imgs/logotype.png";
import descuMenu from "../../imgs/descuMenu.png";
import mantenimiento from "../../imgs/Mantenimiento.png";
import asesoramiento from "../../imgs/Asesoramiento.png";
import "./Methods.css";
import { Button } from "@mui/material";
import { Spinner } from "react-bootstrap";
import jose from "../../imgs/jose.png";
import videoSue from "../../imgs/videoSue.mp4";
import Carrousel from "../Carrousel/Carrousel";
const Methods = ({ productos }) => {
  const [prod, setProd] = useState([]);
  
  return (
    <>
      <div className="methods__Cont">
        <img style={{ width: "290px" }} src={img} alt="" />
        <hr className="methods__hr" />
        <img style={{ width: "290px" }} src={asesoramiento} alt="" />
        <hr className="methods__hr" />
        <img style={{ width: "290px" }} src={mantenimiento} alt="" />
      </div>

      <div className="d-flex methods__menuCont">
        <div className="menu">
          <h4>Entrenamiento</h4>

          {productos.map((item) => {
            return (
              <img
                onClick={() => {
                  setProd(item);
                }}
                style={{ width: "150px" }}
                className="menu__img"
                src={item.img}
              />
            );
          })}

        <div className="methods__marcaCont">
            <hr className="methods__marcaContHr" />
            <p>
              En veinte años lamentaras mas las cosas que no hiciste que
              las que hiciste, así que suelta amarras,abandona el puerto seguro,
              alza los vientos en tus velas.{" "}
              <span style={{ color: "red", fontWeight: "600" }}>
                SUEÑA EXPLORA DESCUBRE
              </span>
            </p>
            <hr className="methods__marcaContHr" />
            <img style={{ width: "130px" }} src={head} alt="" />
          </div>
        </div>
        
     
        {prod.length === 0 ? 
        <div className="w-100">  <Carrousel /> </div> : 
    
        <div className="methods__cont">
          <div className="">
            <video className="methods__video" autoPlay loop>
              <source src={prod.videos} type="video/mp4" />
            </video>

            <h6>
              <span style={{ color: "red" }}>{prod.color}</span>{" "}
              {prod.descColor}{" "}
              <span style={{ color: "red" }}> {prod.colorLogo}</span>
            </h6>
          </div>

          <div className="">
            <h4 style={{ color: "white" }}>{prod.detailTitle}</h4>

            <div>
              <h6 style={{ color: "red" }}>{prod.detailSubTitle}</h6>
              <ul>
                <li>{prod.detail1}</li>
                <li>{prod.detail2}</li>
                <li>{prod.detail3}</li>
              </ul>
            </div>
          </div>
        </div> }
      </div> 
     </>
  );
};

export default Methods;
