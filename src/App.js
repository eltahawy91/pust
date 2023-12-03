import React, { useState } from "react";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";

// import Slider from "./Component/slider/Slider";
import Category from "./Component/category/Category.jsx";
import Products from "./Component/products/Products.jsx";
import { Route, Routes } from "react-router-dom";
import BookDetails from "./Component/bookdetails/BookDetails.jsx";
import Register from "./pages/register/Register.jsx";
// import Login from "./pages/login/Logni.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/login/Login.jsx";
import Account from "./pages/account/Account.jsx";
import AddProducts from "./dashboard/AddProducts.jsx";
import AllProduct from "./dashboard/AllProduct.jsx";
import UpdateProduct from "./dashboard/UpdateProduct.jsx";
import ViewAllProducts from "./pages/ViewAllProducts.jsx";
import Details from "./Component/detailsProductJson/Details.jsx";
import Footer from "./Component/footer/Footer.jsx";
import ShoppingCartProvider from "./context/ShoppingCartContext.js";
import Soon from "./pages/commingSoon/Soon.jsx";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <div>{isLoggedIn ? console.log("logged in") : <></>}</div>

      <ShoppingCartProvider>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
              </>
            }
          />
          <Route
            path="/accountProfile"
            element={
              <>
                <Navbar />
                <Account />
                <Footer />
              </>
            }
          />
          <Route path="/accountProfile/addProduct" element={<AddProducts />} />
          <Route path="/accountProfile/allProduct" element={<AllProduct />} />
          <Route path="/commingSoon" element={<Soon />} />
          
          <Route
            path="/accountProfile/UpdateProduct/:productId"
            element={<UpdateProduct />}
          />
          <Route
            path="/ViewAllProducts"
            element={
              <>
                <ViewAllProducts />
                <Footer />
              </>
            }
          />

          <Route
            path="/register"
            element={
              <>
                <Register />
              </>
            }
          />
          <Route
            path="/login"
            element={
              <>
                <Login />
              </>
            }
          />
          <Route
            path="/Book/:BookId"
            element={
              <>
                <Navbar />
                <BookDetails />
                <Footer />
              </>
            }
          />
          {/* json details product */}
          <Route
            path="/:JsonBookId"
            element={
              <>
                <Navbar />
                <Details />
                <Footer />
              </>
            }
          />
        </Routes>
      </ShoppingCartProvider>
    </>
  );
}
export default App;
