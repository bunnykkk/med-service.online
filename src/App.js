import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <HomePage />
      </BrowserRouter>
    </>
  );
};

export default App;
