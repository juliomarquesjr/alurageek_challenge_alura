import React from "react";

import logo from "../../assets/img/logo.png";
import "./estilos.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_container">
        <div>
          <img className="logo_footer" src={logo} alt="Logo AluraGeek" />
        </div>
        <div>
          <ul>
            <li>Quem somos nós</li>
            <li>Política de privacidade</li>
            <li>Programa fidelidade</li>
            <li>Nossas lojas</li>
            <li>Quero ser franqueado</li>
            <li>Anuncie aqui</li>
          </ul>
        </div>
        <div className="footer_formulario">
          <p>Fale Conosco</p>
          <form>
            <label>Nome:</label>
            <input type="text" />
            <textarea placeholder="Escreva a sua mensagem" />
            <button>Enviar mensagem</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Footer;
