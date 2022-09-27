import React from "react";

import ProdutoItem from "../ProdutoItem";
import seta from "../../assets/img/seta.svg";

import "./estilos.css";

const CategoriaProdutos = ({ titulo }) => {
  return (
    <React.Fragment>
      <div className="cabecalho_categoria">
        <h1>{titulo}</h1>
        <a className="cabecalho_ver_todos" href="http://#">
          <p>Ver todos</p>
          <img src={seta} alt="Ver todos" />
        </a>
      </div>
      <div>
        <ProdutoItem />
      </div>
    </React.Fragment>
  );
};
export default CategoriaProdutos;
