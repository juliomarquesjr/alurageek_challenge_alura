import React from "react";

import "./estilos.css";

const ProdutoItem = ({ item }) => {
  return (
    <div className="produto_item_container">
      <img src={item.img} alt="Produto" />
      <h1>{item.titulo}</h1>
      <h2>{item.valor}</h2>
      <p>
        <a href="http://#"> Ver Produto</a>
      </p>
    </div>
  );
};
export default ProdutoItem;
