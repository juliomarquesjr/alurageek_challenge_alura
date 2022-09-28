import React from "react";

import Pesquisa from "../Pesquisa";

import logo from "../../assets/img/logo.png";

import "./estilos.css";

const Header = () => {
  return (
    <div className="header_barra">
      <div className="header_container">
        <div className="header_direita">
          <img className="header_logo" src={logo} alt="Logo AluraGeek" />
          <Pesquisa />
        </div>
        <a className="botao_login" href="http://#">Login</a>
      </div>
    </div>
  );
};
export default Header;
