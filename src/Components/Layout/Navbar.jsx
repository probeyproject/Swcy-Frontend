import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import navimg from "./nav_img/navimg.jpg";
import { FaRegHeart, FaRegUser } from "react-icons/fa";
import { PiHandbagSimpleBold } from "react-icons/pi";
import { IoIosSearch } from "react-icons/io";
import Authcanvas from "../Auth/Authcanvas"; // Import Authcanvas to show the modal
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";
import logoimg from "../../assets/Images/swcy.png";
import { IoMenuOutline } from "react-icons/io5";

const Navbarcomp = () => {
  // State to manage modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Simulating user authentication state (replace with real logic)
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Change this to `true` when logged in

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0); // Initialize the last scroll position



  // Handle click outside the search bar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };

    if (isSearchOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSearchOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        // Fix the navbar when scroll is at 0
        setShowNavbar(true);
      } else if (window.scrollY > lastScrollY) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY); // Update last scroll position
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]); // Dependency on `lastScrollY` so the effect is recalculated when it changes
  
  


  // Function to handle click on user icon
  const handleUserClick = () => {
    if (!isLoggedIn) {
      setIsModalOpen(true); // Show login/signup modal if not logged in
    }
  };

  // State to store the announcement message
  const [announcement, setAnnouncement] = useState(
    "Elevate Your Style with Our Latest Men's Fashion!"
  );

  // Array of taglines
  const taglines = [
    "Elevate Your Style with Our Latest Men's Fashion!",
    "Discover the Best in Men's Wear  Trendy, Comfortable, Yours.",
    "Unleash Your Confidence with Premium Men's Apparel.",
    "Step Up Your Game with Fashion That Speaks.",
    "Shop Now for Exclusive Men's Fashion  Where Style Meets Comfort!",
  ];

  useEffect(() => {
    // Index to keep track of the current tagline
    let index = 0;

    const interval = setInterval(() => {
      // Change announcement message to the next tagline
      setAnnouncement(taglines[index]);

      // Update index, loop back to 0 if we reach the end
      index = (index + 1) % taglines.length;
    }, 2000); // Change announcement every 5 seconds

    // Cleanup the interval when component unmounts
    return () => clearInterval(interval);
  }, []);


  return (
    <>
      {/* Announcement bar at the top */}
      {/* <div
        className="announcement-bar text-center text-light py-2"
        style={{ backgroundColor: "rgb(252, 118, 118)" }}
      >
        <p className="m-0">{announcement}</p>
      </div> */}

      {/* Navbar start... */}
      <nav
        className={`navbar navbar-expand-lg text-dark shadow navbar_bg ${showNavbar ? "show-navbar" : "hide-navbar"}`}
      >
        <div className="container">
          {/* Logo */}
          <a className="logoimg" href="/">
            <img
              src={logoimg}
              style={{
                height: "60px",
                padding: "5px",
                filter: "brightness(0) invert(0)",
              }}
              alt=""
              srcset=""
            />
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
            <IoMenuOutline className="text-light" />
          </button>

          {/* Navbar Content */}
          <div className="collapse navbar-collapse" id="navbarNav">
            {/* Nav Links */}
            <ul className="navbar-nav mx-auto fw-bold">
              {/* Men */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link  px-3"
                  href="#"
                  id="menDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Men <FaAngleDown />
                </a>
                <ul
                  className="dropdown-menu bg-blur"
                  aria-labelledby="menDropdown"
                  style={{  background: "rgba(192, 192, 192, 0.8)"}}
                >
                  <div className="d-flex border-0">
                    {/* Column 1: Topwear */}
                    <div className="dropdown-column">
                      <h6 className="dropdown-header bg-orange">
                        <u className="text-danger"> Topwear</u>
                      </h6>
                      <li>
                        <Link className="dropdown-item text-dark" to="/filter">
                          T-Shirts
                        </Link>
                      </li>

                      <li>
                        <a className="dropdown-item text-dark" href="#">
                          Sweatshirts
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item text-dark" href="#">
                          Jackets
                        </a>
                      </li>
                    </div>

                    {/* Column 2: Bottomwear */}
                    <div className="dropdown-column mx-3">
                      <h6 className="dropdown-header bg-orange">
                        <u className="text-danger"> Bottomwear</u>
                      </h6>
                      <li>
                        <a className="dropdown-item text-dark" href="#">
                          Jeans
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item text-dark" href="#">
                          Trousers
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item text-dark" href="#">
                          Shorts
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item text-dark" href="#">
                          Track Pants & Joggers
                        </a>
                      </li>
                    </div>
                  </div>
                </ul>
              </li>

              {/* Women */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link  px-3"
                  href="#"
                  id="womenDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Women <FaAngleDown />
                </a>
                <ul
                  className="dropdown-menu bg-blur"
                  aria-labelledby="womenDropdown"
                  style={{  background: "rgba(192, 192, 192, 0.8)"}}
                >
                  <div className="d-flex">
                    {/* Column 1: Topwear */}
                    <div className="dropdown-column">
                      <h6 className="dropdown-header bg-orange">
                        <u className="text-danger"> Topwear</u>
                      </h6>
                      <li>
                        <Link className="dropdown-item text-dark" to="/filter">
                          T-Shirts
                        </Link>
                      </li>

                      <li>
                        <a className="dropdown-item text-dark" href="#">
                          Sweatshirts
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item text-dark" href="#">
                          Jackets
                        </a>
                      </li>
                    </div>

                    {/* Column 2: Bottomwear */}
                    <div className="dropdown-column">
                      <h6 className="dropdown-header bg-orange">
                        <u className="text-danger"> Bottomwear</u>
                      </h6>
                      <li>
                        <a className="dropdown-item text-dark" href="#">
                          Jeans
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item text-dark" href="#">
                          Trousers
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item text-dark" href="#">
                          Shorts
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item text-dark" href="#">
                          Track Pants & Joggers
                        </a>
                      </li>
                    </div>
                  </div>
                </ul>
              </li>

              {/* Kids */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link px-3"
                  href="#"
                  id="kidsDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Kids <FaAngleDown />
                </a>
                <ul
                  className="dropdown-menu bg-blur"
                  aria-labelledby="kidsDropdown"
                  style={{  background: "rgba(192, 192, 192, 0.8)"}}
                >
                  <div className="d-flex">
                    {/* Column 1: Topwear */}
                    <div className="dropdown-column">
                      <h6 className="dropdown-header bg-orange">
                        <u className="text-danger"> Topwear</u>
                      </h6>
                      <li>
                        <Link className="dropdown-item text-dark" to="/filter">
                          T-Shirts
                        </Link>
                      </li>

                      <li>
                        <a className="dropdown-item text-dark" href="#">
                          Sweatshirts
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item text-dark" href="#">
                          Jackets
                        </a>
                      </li>
                    </div>

                    {/* Column 2: Bottomwear */}
                    <div className="dropdown-column mx-3">
                      <h6 className="dropdown-header bg-orange">
                        <u className="text-danger"> Bottomwear</u>
                      </h6>
                      <li>
                        <a className="dropdown-item text-dark" href="#">
                          Jeans
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item text-dark" href="#">
                          Trousers
                        </a>
                      </li>

                      <li>
                        <a className="dropdown-item text-dark" href="#">
                          Shorts
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item text-dark" href="#">
                          Track Pants & Joggers
                        </a>
                      </li>
                    </div>
                  </div>
                </ul>
              </li>

              {/* Home & Living */}
              <li className="nav-item">
                <a className="nav-link px-3" href="#">
                  Plus Size
                </a>
              </li>
            </ul>

            {/* Icons */}
            <div className="d-flex align-items-center gap-4">
              <div className="position-relative">
                {/* Search Button */}
                <form className="d-flex border-0 d-flex flex-row align-items-center justify-content-center">
                  <button
                    type="button"
                    className="btn"
                    onClick={() => setIsSearchOpen(!isSearchOpen)}
                  >
                    <IoIosSearch
                      className="text-dark"
                      style={{ fontSize: "30px" }}
                    />
                  </button>
                </form>

                {/* Top Dropdown Search Bar */}
                <div
                  ref={searchRef}
                  className={`position-fixed top-0 start-0 w-100 ${isSearchOpen ? "slide-down" : "slide-up"
                    } d-flex justify-content-center align-items-center`}
                  style={{
                    height: isSearchOpen ? "100px" : "0",
                    background: "rgba(0, 0, 0, 0.7)",
                    backdropFilter: "blur(10px)",
                    transition: "height 0.3s ease-in-out",
                    overflow: "hidden",
                    zIndex: 1000,
                  }}
                >
                  <div className="w-75 position-relative">
                    <input
                      type="text"
                      className="form-control p-3"
                      placeholder="Search..."
                      autoFocus
                      style={{
                        fontSize: "18px",
                        background: "rgba(230, 230, 230, 0.86)",
                        color: "black",
                        border: "1px solid rgba(255, 255, 255, 0.88)",
                        backdropFilter: "blur(10px)",
                      }}
                    />
                    {/* Close Button */}
                    <button
                      className="btn position-absolute end-0 top-50 translate-middle-y text-white"
                      onClick={() => setIsSearchOpen(false)}
                      style={{ background: "transparent", border: "none" }}
                    >
                      ✖
                    </button>
                  </div>
                </div>
              </div>

              {/* User Icon */}
              <a
                href="#"
                className="bg-darkblue fs-5 d-flex flex-column align-items-center text-decoration-none "
                onClick={handleUserClick}
              >
                <FaRegUser className="text-dark"/>
                <span className="text-dark" style={{ fontSize: "12px" }}>Sign In</span>
              </a>
              <Link
                to="/wishlist"
                className="bg-darkblue fs-5 d-flex flex-column align-items-center text-decoration-none"
              >
                <FaRegHeart className="text-dark"/>
                <span className="text-dark" style={{ fontSize: "12px" }}>Wishlist</span>
              </Link>
              <Link
                to="/addtocart"
                className="bg-darkblue fs-5 d-flex flex-column align-items-center  text-decoration-none"
              >
                <PiHandbagSimpleBold className="text-dark" style={{ fontSize: "22px" }} />
                <span className="text-dark" style={{ fontSize: "12px" }}>My Bag</span>
              </Link>
            </div>

            {/* Auth Modal (Login/Signup) */}
            {isModalOpen && (
              <Authcanvas closeModal={() => setIsModalOpen(false)} />
            )}
          </div>
        </div>
      </nav >
    </>
  );
};

export default Navbarcomp;
