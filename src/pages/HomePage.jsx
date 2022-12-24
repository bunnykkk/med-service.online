import React from "react";
import ProductList from '../components/ProductList/ProductList'
import ProductCard from '../components/ProductCard/ProductCard'
import ProductDetails from '../components/ProductDetails/ProductDetails'
import Loader from '../components/Loader/Loader'

const HomePage = () => {
  return(
    <>
      <ProductList />
      <ProductCard />
      <ProductDetails />
      <Loader />
    </>
  )
};

export default HomePage;
