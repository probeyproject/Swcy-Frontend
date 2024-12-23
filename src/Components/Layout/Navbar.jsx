import React, { useState } from "react"; 
import "./Navbar.css";
import navimg from './nav_img/navimg.jpg'
import { FaCartArrowDown, FaRegHeart, FaRegUser } from "react-icons/fa"; 
import { IoIosSearch } from "react-icons/io"; 
import Authcanvas from "../Auth/Authcanvas"; // Import Authcanvas to show the modal

const Navbarcomp = () => { 
  // State to manage modal visibility 
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Simulating user authentication state (replace with real logic)
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Change this to `true` when logged in

  // Function to handle click on user icon
  const handleUserClick = () => {
    if (!isLoggedIn) {
      setIsModalOpen(true); // Show login/signup modal if not logged in
    }
  };

  return (
    <>
    <nav className="navbar navbar-expand-lg bg-light navbar-light shadow-lg  sticky-top-0">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand fw-bold fs-3 bg-darkblue" href="/">
          Swcy.
        </a>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Content */}
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Nav Links */}
          <ul className="navbar-nav mx-auto fw-bold">
            {/* Men */}
            <li className="nav-item dropdown">
              <a
                className="nav-link bg-darkblue dropdown-toggle px-3"
                href="#"
                id="menDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Men
              </a>
              <ul className="dropdown-menu" aria-labelledby="menDropdown">
                <div className="d-flex border-0">
                  {/* Column 1: Topwear */}
                  <div className="dropdown-column bg-light">
                    <h6 className="dropdown-header bg-orange fs-6">Topwear</h6>
                    <li><a className="dropdown-item " href="#">T-Shirts</a></li>
                    <li><a className="dropdown-item " href="#">Casual Shirts</a></li>
                    <li><a className="dropdown-item " href="#">Formal Shirts</a></li>
                    <li><a className="dropdown-item " href="#">Sweatshirts</a></li>
                    <li><a className="dropdown-item " href="#">Sweaters</a></li>
                    <li><a className="dropdown-item " href="#">Jackets</a></li>
                    <li><a className="dropdown-item " href="#">Blazers & Coats</a></li>
                    <li><a className="dropdown-item " href="#">Suits</a></li>
                    <li><a className="dropdown-item " href="#">Rain Jackets</a></li>
                    <li><a className="dropdown-item " href="#">Indian & Festive Wear</a></li>
                  </div>

                  {/* Column 2: Bottomwear */}
                  <div className="dropdown-column mx-3">
                    <h6 className="dropdown-header bg-orange fs-6">Bottomwear</h6>
                    <li><a className="dropdown-item " href="#">Jeans</a></li>
                    <li><a className="dropdown-item " href="#">Casual Trousers</a></li>
                    <li><a className="dropdown-item " href="#">Formal Trousers</a></li>
                    <li><a className="dropdown-item " href="#">Shorts</a></li>
                    <li><a className="dropdown-item " href="#">Track Pants & Joggers</a></li>
                    <img src={navimg} className="navimg" alt="" />
                  </div>

                  {/* Column 3: Innerwear, Footwear, and Accessories */}
                  <div className="dropdown-column bg-light">
                    <h6 className="dropdown-header bg-orange fs-6">Innerwear & Footwear</h6>
                    <li><a className="dropdown-item " href="#">Briefs & Trunks</a></li>
                    <li><a className="dropdown-item " href="#">Boxers</a></li>
                    <li><a className="dropdown-item " href="#">Vests</a></li>
                    <li><a className="dropdown-item " href="#">Sleepwear & Loungewear</a></li>
                    <li><a className="dropdown-item " href="#">Thermals</a></li>
                    <li><a className="dropdown-item " href="#">Casual Shoes</a></li>
                    <li><a className="dropdown-item " href="#">Sports Shoes</a></li>
                    <li><a className="dropdown-item " href="#">Formal Shoes</a></li>
                    <li><a className="dropdown-item " href="#">Sneakers</a></li>
                    <li><a className="dropdown-item " href="#">Sandals & Floaters</a></li>
                    <li><a className="dropdown-item " href="#">Flip Flops</a></li>
                    <li><a className="dropdown-item " href="#">Socks</a></li>
                  </div>
                </div>
              </ul>
            </li>

             {/* Women */}
             <li className="nav-item dropdown">
              <a
                className="nav-link bg-darkblue dropdown-toggle px-3"
                href="#"
                id="womenDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Women
              </a>
              <ul className="dropdown-menu" aria-labelledby="womenDropdown">
                <div className="d-flex">
                  {/* Column 1: Indian & Fusion Wear */}
                  <div className="dropdown-column">
                    <h6 className="dropdown-header bg-orange fs-6">Indian & Fusion Wear</h6>
                    <li><a className="dropdown-item " href="#">Kurtas & Suits</a></li>
                    <li><a className="dropdown-item " href="#">Kurtis, Tunics & Tops</a></li>
                    <li><a className="dropdown-item " href="#">Sarees</a></li>
                    <li><a className="dropdown-item " href="#">Ethnic Wear</a></li>
                    <li><a className="dropdown-item " href="#">Leggings, Salwars & Churidars</a></li>
                    <li><a className="dropdown-item " href="#">Skirts & Palazzos</a></li>
                    <li><a className="dropdown-item " href="#">Dress Materials</a></li>
                    <li><a className="dropdown-item " href="#">Lehenga Cholis</a></li>
                    <li><a className="dropdown-item " href="#">Dupattas & Shawls</a></li>
                    <li><a className="dropdown-item " href="#">Jackets</a></li>
                    <li><a className="dropdown-item " href="#">Belts, Scarves & More</a></li>
                    <li><a className="dropdown-item " href="#">Watches & Wearables</a></li>
                  </div>

                  {/* Column 2: Western Wear */}
                  <div className="dropdown-column bg-light mx-3">
                    <h6 className="dropdown-header bg-orange fs-6">Western Wear</h6>
                    <li><a className="dropdown-item " href="#">Dresses</a></li>
                    <li><a className="dropdown-item " href="#">Tops</a></li>
                    <li><a className="dropdown-item " href="#">Tshirts</a></li>
                    <li><a className="dropdown-item " href="#">Jeans</a></li>
                    <li><a className="dropdown-item " href="#">Trousers & Capris</a></li>
                    <li><a className="dropdown-item " href="#">Shorts & Skirts</a></li>
                    <li><a className="dropdown-item " href="#">Co-ords</a></li>
                    <li><a className="dropdown-item " href="#">Playsuits</a></li>
                    <li><a className="dropdown-item " href="#">Jumpsuits</a></li>
                    <li><a className="dropdown-item " href="#">Shrugs</a></li>
                    <li><a className="dropdown-item " href="#">Sweaters & Sweatshirts</a></li>
                    <li><a className="dropdown-item " href="#">Jackets & Coats</a></li>
                    <li><a className="dropdown-item " href="#">Blazers & Waistcoats</a></li>
                  </div>

                  {/* Column 3: Plus Size, Maternity, and Footwear */}
                  <div className="dropdown-column">
                    <h6 className="dropdown-header bg-orange fs-6">Plus Size & Maternity</h6>
                    <li><a className="dropdown-item " href="#">Plus Size</a></li>
                    <li><a className="dropdown-item " href="#">Maternity</a></li>
                    <h6 className="dropdown-header bg-orangebg-darkblue fs-6">Footwear</h6>
                    <li><a className="dropdown-item " href="#">Flats</a></li>
                    <li><a className="dropdown-item " href="#">Casual Shoes</a></li>
                    <li><a className="dropdown-item " href="#">Heels</a></li>
                    <li><a className="dropdown-item " href="#">Boots</a></li>
                    <li><a className="dropdown-item " href="#">Sports Shoes & Floaters</a></li>
                    <h6 className="dropdown-header bg-orange fs-6">Sports & Active Wear</h6>
                    <li><a className="dropdown-item " href="#">Clothing</a></li>
                    <li><a className="dropdown-item " href="#">Footwear</a></li>
                    <li><a className="dropdown-item " href="#">Sports Accessories</a></li>
                    <li><a className="dropdown-item " href="#">Sports Equipment</a></li>
                  </div>
                </div>
              </ul>
            </li>

            {/* Kids */}
            <li className="nav-item dropdown">
              <a
                className="nav-link bg-darkblue dropdown-toggle px-3"
                href="#"
                id="kidsDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Kids
              </a>
              <ul className="dropdown-menu" aria-labelledby="kidsDropdown">
                <div className="d-flex">
                  {/* Column 1: Boys Clothing */}
                  <div className="dropdown-column bg-light">
                    <h6 className="dropdown-header bg-orange fs-6">Boys Clothing</h6>
                    <li><a className="dropdown-item " href="#">T-Shirts</a></li>
                    <li><a className="dropdown-item " href="#">Shirts</a></li>
                    <li><a className="dropdown-item " href="#">Shorts</a></li>
                    <li><a className="dropdown-item " href="#">Jeans</a></li>
                    <li><a className="dropdown-item " href="#">Trousers</a></li>
                    <li><a className="dropdown-item " href="#">Clothing Sets</a></li>
                    <li><a className="dropdown-item " href="#">Ethnic Wear</a></li>
                    <li><a className="dropdown-item " href="#">Track Pants & Pyjamas</a></li>
                    <li><a className="dropdown-item " href="#">Jacket, Sweater & Sweatshirts</a></li>
                    <li><a className="dropdown-item " href="#">Party Wear</a></li>
                    <li><a className="dropdown-item " href="#">Innerwear & Thermals</a></li>
                    <li><a className="dropdown-item " href="#">Nightwear & Loungewear</a></li>
                    <li><a className="dropdown-item " href="#">Value Packs</a></li>
                  </div>

                  {/* Column 2: Girls Clothing */}
                  <div className="dropdown-column mx-3">
                    <h6 className="dropdown-header bg-orange fs-6">Girls Clothing</h6>
                    <li><a className="dropdown-item " href="#">Dresses</a></li>
                    <li><a className="dropdown-item " href="#">Tops</a></li>
                    <li><a className="dropdown-item " href="#">Tshirts</a></li>
                    <li><a className="dropdown-item " href="#">Clothing Sets</a></li>
                    <li><a className="dropdown-item " href="#">Lehenga Choli</a></li>
                    <li><a className="dropdown-item " href="#">Kurta Sets</a></li>
                    <li><a className="dropdown-item " href="#">Party Wear</a></li>
                    <li><a className="dropdown-item " href="#">Dungarees & Jumpsuits</a></li>
                    <li><a className="dropdown-item " href="#">Skirts & Shorts</a></li>
                    <li><a className="dropdown-item " href="#">Tights & Leggings</a></li>
                    <li><a className="dropdown-item " href="#">Jeans, Trousers & Capris</a></li>
                    <li><a className="dropdown-item " href="#">Jacket, Sweater & Sweatshirts</a></li>
                    <li><a className="dropdown-item " href="#">Innerwear & Thermals</a></li>
                  </div>

                  {/* Column 3: Footwear & Toys */}
                  <div className="dropdown-column bg-light">
                    <h6 className="dropdown-header bg-orange fs-6">Footwear</h6>
                    <li><a className="dropdown-item " href="#">Casual Shoes</a></li>
                    <li><a className="dropdown-item " href="#">Flip Flops</a></li>
                    <li><a className="dropdown-item " href="#">Sports Shoes</a></li>
                    <li><a className="dropdown-item " href="#">Flats</a></li>
                    <li><a className="dropdown-item " href="#">Sandals</a></li>
                    <li><a className="dropdown-item " href="#">Heels</a></li>
                    <li><a className="dropdown-item " href="#">School Shoes</a></li>
                    <h6 className="dropdown-header bg-orange fs-6">Toys & Games</h6>
                    <li><a className="dropdown-item " href="#">Learning & Development</a></li>
                    <li><a className="dropdown-item " href="#">Activity Toys</a></li>
                    <li><a className="dropdown-item " href="#">Soft Toys</a></li>
                    <li><a className="dropdown-item " href="#">Action Figure / Play Set</a></li>
                  </div>
                </div>
              </ul>
            </li>

            {/* Home & Living */}
            <li className="nav-item">
              <a className="nav-link bg-darkblue px-3" href="#">Home & Living</a>
            </li>

            {/* Beauty */}
            <li className="nav-item">
              <a className="nav-link bg-darkblue" href="/productdetail px-3">Beauty</a>
            </li>
          </ul>

          {/* Search Bar */}
          <form className="d-flex mx-5">
            <div className="input-group bg-darkblue">
              <input
                type="text"
                className="form-control bg-darkblue"
                aria-label="Dollar amount (with dot and two decimal places)"
              />
              <button className="input-group-text bg-darkblue">
                <IoIosSearch />
              </button>
            </div>
          </form>

          {/* Icons */}
          <div className="d-flex align-items-center gap-4">
            {/* User Icon */}
            <a href="#" className="bg-darkblue" onClick={handleUserClick}>
              <FaRegUser />
            </a>
            <a href="/wishlist" className="bg-darkblue">
              <FaRegHeart />
            </a>
            <a href="/addtocart" className="bg-darkblue">
              <FaCartArrowDown />
            </a>
          </div>

          {/* Auth Modal (Login/Signup) */}
          {isModalOpen && (
            <Authcanvas closeModal={() => setIsModalOpen(false)} />
          )}
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbarcomp;
