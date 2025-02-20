import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbarcomp from "./Components/Layout/Navbar";
import Footer from "./Components/Layout/Footer";
import ScrollToTop from "./ScrollToTop";
import ProtectedRoute from "./Components/Proutes/ProtectedRoute";
import "./App.css";
import ProductDetail from "./Components/Product detail/ProductDetail";
import CustomePrinting from "./Components/Custome Tshirt Printing/CustomePrinting";
import Filter1 from "./Components/Sidebar/Filter1";
import AddressManager from "./Components/Address Manager/AddressManager";
import OrderSuccess from "./Components/Order Succes/OrderSuccess";
// import OfferBanner from "./Components/Offer Banner/OfferBanner";


// Lazy-loaded components
const Home = lazy(() => import("./Pages/Home"));
const Signup = lazy(() => import("./Components/Auth/Signup"));
const Signin = lazy(() => import("./Components/Auth/Signin"));
const Wishlist = lazy(() => import("./Components/Wishlist/Wishlist"));
const AddToCart = lazy(() => import("./Components/Cart/AddToCart"));
const CheckoutPage = lazy(() => import("./Components/Cart/CheckoutPage"));
const Filter = lazy(() => import("./Components/Sidebar/Filter"));
const UserProfile = lazy(() => import("./Components/UserProfile/UserProfile"));
const About = lazy(() => import("./Pages/About"));
const Contactus = lazy(() => import("./Pages/Contactus"));
const SingleProductView = lazy(() => import("./Components/Product detail/SingleProductView"));
const Checkout = lazy(()=> import("./Pages/Checkout"))
// const CustomePrinting = lazy(()=> import("./Components/Custome Tshirt Printing/CustomePrinting"))


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbarcomp />
        <ScrollToTop />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/about" element={<About />} />
            <Route path="/contactus" element={<Contactus />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/userprofile" element={<UserProfile/>}/>
            <Route path="/filter" element={<Filter />} />
            <Route path="/singleproductview" element={<SingleProductView />} />
            <Route path="/detailpage/:id" element={<ProductDetail />} />
            <Route path="/customeprinting" element={<CustomePrinting/>}/>
            <Route path="/filter1" element={<Filter1/>}/>
            {/* <Route path="/offerbanner" element={<OfferBanner/>}/> */}
            <Route path="/addressmanager" element={<AddressManager/>}/>
            <Route path="/order-success" element={<OrderSuccess/>}/>
          

            {/* Protected Routes */}
            <Route
              path="/wishlist"
              element={
                <ProtectedRoute>
                  <Wishlist />
                </ProtectedRoute>
              }
            />
            <Route
              path="/addtocart"
              element={
                <ProtectedRoute>
                  <AddToCart />
                </ProtectedRoute>
              }
            />
            <Route
              path="/checkout"
              element={
                <ProtectedRoute>
                  <CheckoutPage />
                </ProtectedRoute>
              }
            />
            <Route

              path="/userprofile"
              element={
                <ProtectedRoute>
                  <UserProfile />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
