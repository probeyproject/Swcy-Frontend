import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbarcomp from "./Components/Layout/Navbar";
import Footer from "./Components/Layout/Footer";
import "./App.css";
import Signup from "./Components/Auth/Signup";
import Signin from "./Components/Auth/Signin";
import Wishlist from "./Components/Wishlist/Wishlist";
import AddToCart from "./Components/Cart/AddToCart";
import ProductDetail from "./Components/Product detail/ProductDetail";
import CheckoutPage from "./Components/Cart/CheckoutPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbarcomp />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/addtocart" element={<AddToCart />} />
          <Route path="/productdetail" element={<ProductDetail />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
