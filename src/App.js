import React from "react";
import AuthContextProvider from "./contexts/AuthContextProvider";
import ProductContextProvider from "./contexts/ProductContextProvider";
import MainRoutes from "./MainRoutes";

const App = () => {
  return (
    <>
      <ProductContextProvider>
        <AuthContextProvider>
          <MainRoutes />
        </AuthContextProvider>
      </ProductContextProvider>
    </>
  );
};

export default App;
