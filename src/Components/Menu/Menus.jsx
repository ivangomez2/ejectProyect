import React from "react";
import "./Menu.css";
import whatsapp from "../../imgs/whatsapp.png";
import { useState } from "react";
const Menus = () => {
  const [menu, setMenu] = useState(false);

  const menuActive = () => {
    setMenu(!menu);
  };

  return (
    <section class="top-nav">
     <div className="menu__cont">
      <div className="menu__burguer"
        onClick={() => {
          menuActive();
        }}
      >
        <div className="menus__bar menus__fixPos"></div>
        <div className="menus__bar"></div>
        <div className="menus__bar"> </div>
      </div>
      {menu && (
        <ul className="menu__ul">
          <li>Home</li>
          <li>Contacto</li>
          <li>Nosotros</li>
          <li>Servicios</li>
        </ul>
      )}
 </div>
      <div className="menus__whatsapp">
        <img src={whatsapp} />
      </div>



    </section>
  );
};

export default Menus;
