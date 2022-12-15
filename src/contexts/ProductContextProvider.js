import React, { createContext, useContext, useReducer, useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

export const productContext = createContext();
export const useProducts = () => useContext(productContext);

const INIT_STATE = {
  products: [],
  productDetails: null,
};

const ProductContextProvider = ({ children }) => {
  const values = {};

  return (
    <productContext.Provider value={values}>{children}</productContext.Provider>
  );
};

export default ProductContextProvider;
