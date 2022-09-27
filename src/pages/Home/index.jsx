import React from "react";

import Header from "../../components/Header";
import Banner from "../../components/Banner";
import CategoriaProdutos from "../../components/CategoriaProdutos";
import Footer from "../../components/Footer";

import { getProdutos } from "../../services/produtos";

import "./estilos.css";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <Banner />
      <div className="container_central">
        <CategoriaProdutos
          titulo="Star Wars"
          produtos={getProdutos("starwars")}
        />
        <CategoriaProdutos
          titulo="Consoles"
          produtos={getProdutos("consoles")}
        />
        <CategoriaProdutos
          titulo="Diversos"
          produtos={getProdutos("diversos")}
        />
      </div>
      <Footer />
    </React.Fragment>
  );
};
export default Home;
