import React from "react";
import ProductList from '../components/ProductList/ProductList'
import ProductCard from '../components/ProductCard/ProductCard'
import ProductDetails from '../components/ProductDetails/ProductDetails'
import Footer from '../components/Footer/Footer'

const HomePage = () => {
  return(
    <>
      <ProductList />
      <ProductCard />
      <ProductDetails />
      <Footer />
    </>
  )
};

export default HomePage;
