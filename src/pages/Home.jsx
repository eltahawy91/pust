import React from "react";
import Navbar from "../Component/Navbar/Navbar";
import Category from "../Component/category/Category";
import Products from "../Component/products/Products";
import BestSeller from "../Component/bestSeller/BestSeller";
import Slider from "../Component/slider/Slider";
import Footer from "../Component/footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <Category />
      <BestSeller />
      <Products />
      <Footer />
    </>
  );
};

export default Home;
