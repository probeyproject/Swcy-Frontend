import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./src/Pages/Home";
import Navbar from "./src/Components/Layout/Navbar";
import Footer from "./src/Components/Layout/Footer";
import "./public/style.css"
import Signup from "./src/Components/Auth/Signup";
import Signin from "./src/Components/Auth/Signin";
import Wishlist from "./src/Components/Wishlist/Wishlist";
import AddToCart from "./src/Components/Cart/AddToCart";
import ProductDetail from "./src/Components/Product detail/ProductDetail";
import CheckoutPage from "./src/Components/Cart/CheckoutPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />

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
