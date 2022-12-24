import React from "react";
import HomePage from "./pages/HomePage";
import AuthContextProvider from "./contexts/AuthContextProvider";
import ProductContextProvider from "./contexts/ProductContextProvider";
import MainRoutes from "./MainRoutes";
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
      <ProductContextProvider>
        <AuthContextProvider>
          <MainRoutes />
          <Footer />
        </AuthContextProvider>
      </ProductContextProvider>
    </>
  );
};

export default App;
