import React from "react";

import lupa from "../../assets/img/lupa.svg";
import "./estilos.css";

const Pesquisa = () => {
  return (
    <React.Fragment>
      <input
        className="input_pesquisa"
        type="text"
        placeholder="O que deseja encontrar"
      />
      <div className="box_lupa">
        <img className="icone_lupa" src={lupa} alt="Lupa" />
      </div>
    </React.Fragment>
  );
};
export default Pesquisa;
