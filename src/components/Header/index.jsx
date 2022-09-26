import React from "react";

import Pesquisa from "../Pesquisa";
import BotaoLogin from "../BotaoLogin";

import logo from "../../assets/img/logo.png";

import "./estilos.css";

const Header = () => {
  return (
    <div className="header_barra">
      <div className="header_direita">
        <img src={logo} alt="Logo AluraGeek" />
        <Pesquisa />
      </div>
      <BotaoLogin />
    </div>
  );
};
export default Header;
