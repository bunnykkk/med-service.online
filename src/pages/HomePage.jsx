import React from "react";
import ProductList from "../components/ProductList/ProductList";
import ProductCard from "../components/ProductCard/ProductCard";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import HomeAbout from "../components/HomeAbout/HomeAbout";
import Loader from "../components/Loader/Loader";

const HomePage = () => {
  return (
    <>
      <HomeAbout />
      <ProductList />
      <ProductCard />
      <ProductDetails />
      <Loader />
    </>
  );
};

export default HomePage;
