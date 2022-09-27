import produtos from "../mocks/produtos";

export const getProdutos = (categoria) => {
  return produtos[categoria];
};
