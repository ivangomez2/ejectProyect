import React, { useState } from "react";
import img from "../../imgs/Explora.png";
import sueña from "../../imgs/Sueña.png";
import descubre from "../../imgs/Descubre.png";
import head from "../../imgs/head.png"
import head2 from "../../imgs/head2.png"
import head3 from "../../imgs/head3.png"
import "./Methods.css";

const Methods = ({ productos }) => {
  const [sueñ, setSueña] = useState(false);
  const [descubr, setDescubre] = useState(false);
  const [explora, setExplora] = useState(false);
  console.log(productos);

  const suenaClick = () => {
    setSueña(!sueñ);
    setDescubre(false);
    setExplora(false);
  };

  const descubrClick = () => {
    setDescubre(!descubr);
    setSueña(false);
    setExplora(false);
  };

  const exploraClick = () => {
    setExplora(!explora);
    setDescubre(false);
    setSueña(false);
  };

  console.log(productos);

  return (
    <>
      <div className="methods__Cont">
        <img onClick={() => suenaClick()} src={sueña} alt="" />
        <hr className="methods__hr" />
        <img onClick={() => exploraClick()} src={img} alt="" />
        <hr className="methods__hr" />
        <img onClick={() => descubrClick()} src={descubre} alt="" />
      </div>
      <div>
        {sueñ ? (
          <div className="methods__div d-flex methods__imgp">
            <h1 style={{ color: "white" }}>Integración sueña</h1>
            <img src={head} alt="" />
            <p>
              Work shop técnico con la actualizacion en coleccion de
              diseño capilar con formatos de 8 horas.
            </p>
          
          </div>
        ) : (
          <></>
        )}

        {explora ? (
          <div className="methods__div d-flex methods__imgp">
    
            <h1 style={{ color: "white" }}>Nivelación explora</h1>
            <img src={head2} alt="" />
            <p>
              Clinicas técnico artísticas para grupos específicos y
              personalizados. Realizadas desde salones de belleza o centros
              educativos.
            </p>
          </div>
        ) : (
          <></>
        )}

        {descubr ? (
          <div className="methods__div d-flex methods__imgp">
            <h1 style={{ color: "white" }}>Formación descubre</h1>
            <img src={head3} alt="" />
            <p>
              Capacitación integral en diseño capilar en las áreas de corte de cabello unisex, barbería
              ,colorimetría y tratamientos modificadores.
            </p>
         
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Methods;
