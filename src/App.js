import React from "react";
import AuthContextProvider from "./contexts/AuthContextProvider";
import ProductContextProvider from "./contexts/ProductContextProvider";
import MainRoutes from "./MainRoutes";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <ProductContextProvider>
        <AuthContextProvider>
          <Navbar />
          <MainRoutes />
          <Footer />
        </AuthContextProvider>
      </ProductContextProvider>
    </>
  );
};

export default App;
