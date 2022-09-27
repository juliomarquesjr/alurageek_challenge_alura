import React from "react";

import Header from "../../components/Header";
import Banner from "../../components/Banner";
import CategoriaProdutos from "../../components/CategoriaProdutos";

import "./estilos.css"

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <Banner />
      <div className="container_central">
        <CategoriaProdutos titulo="Star Wars" />
      </div>
    </React.Fragment>
  );
};
export default Home;
