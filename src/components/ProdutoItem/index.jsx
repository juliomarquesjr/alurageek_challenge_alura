import React from "react";

import "./estilos.css";

import imgProduto1 from "../../assets/img/produtos/produto1.png";

const ProdutoItem = () => {
  return (
    <div className="produto_item_container">
      <img src={imgProduto1} alt="Produto" />
      <h1>Titulo</h1>
      <h2>R$60,00</h2>
      <p>
        <a href="http://#"> Ver Produto</a>
      </p>
    </div>
  );
};
export default ProdutoItem;
