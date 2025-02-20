// import React from "react";
// import "../../App.css";
// import {
//   FaFacebook,
//   FaTwitter,
//   FaGoogle,
//   FaInstagramSquare,
// } from "react-icons/fa";
// import { MdLocationCity } from "react-icons/md";
// import { IoIosMail } from "react-icons/io";
// import { FaPhone } from "react-icons/fa6";
// import { Link } from "react-router-dom";
// import logoimg from "../../assets/Images/swcy.png";
// import './Footer.css'

// function Footer() {
//   return (
//     <>
//       {/* <!-- Footer --> */}
//       <footer className="text-lg-start bg-dark text-muted sticky-bottom">
//         {/* <!-- Section: Social media --> */}
//         <section className="container d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
//           {/* <!-- Left --> */}
//           <div className="me-5 d-none d-lg-block text-light">
//             <span>Get connected with us on social networks:</span>
//           </div>

// <div className="footer-icon">
//   <a data-mdb-ripple-init className="btn btn-outline btn-floating m-1" href="#!" role="button">
//     <FaFacebook className="text-light" />
//   </a>
//   <a data-mdb-ripple-init className="btn btn-outline btn-floating m-1" href="#!" role="button">
//     <FaTwitter className="text-light" />
//   </a>
//   <a data-mdb-ripple-init className="btn btn-outline btn-floating m-1" href="#!" role="button">
//     <FaGoogle className="text-light" />
//   </a>
//   <a data-mdb-ripple-init className="btn btn-outline btn-floating m-1" href="#!" role="button">
//     <FaInstagramSquare className="text-light" />
//   </a>
// </div>
//           {/* <!-- Right --> */}
//         </section>

//         <section>
//           <div className="container text-md-start mt-5">
//             <div className="row">
//               {/* Column 1 */}
//               <div className="col-lg-3 col-md-6 col-6 mb-4">
//                 <div className="text-center mx-auto mb-4">
//                   <h6 className="text-uppercase fw-bold mb-4">
// <a className="navbar-brand fw-bold fs-3 text-black" href="/">
//   <img
//     src={logoimg}
//     style={{
//       height: "60px",
//       filter: "brightness(0) invert(1)",
//     }}
//     alt="logo"
//   />
// </a>
//                   </h6>
//                   <p className="text-light">
//                     Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                   </p>
// <p className="text-light"><MdLocationCity className="text-light" /> H-150 Sector 63, Noida UP</p>
// <p className="text-light"><IoIosMail className="text-light" /> info@swcy.com</p>
// <p className="text-light"><FaPhone className="text-light" /> + 01 234 567 88</p>
//                 </div>
//               </div>

//               {/* Column 2 */}
//               <div className="col-lg-3 col-md-6 col-6 mb-4">
//                 <div className="text-center mx-auto mb-4">
//                   <h6 className="text-uppercase text-light fw-bold mb-4">Category</h6>
//                   <p className="text-light"><a href="#!" className="text-reset">T-shirts</a></p>
//                   <p className="text-light"><a href="#!" className="text-reset">Jeans</a></p>
//                   <p className="text-light"><a href="#!" className="text-reset">Shirts</a></p>
//                   <p className="text-light"><a href="#!" className="text-reset">Hooddy</a></p>
//                 </div>
//               </div>

//               {/* Column 3 */}
//               <div className="col-lg-3 col-md-6 col-6 mb-4">
//                 <div className="text-center mx-auto mb-4">
//                   <h6 className="text-uppercase text-light fw-bold mb-4">Useful links</h6>
//                   <p className="text-light"><Link to="/about" className="text-reset">About Us</Link></p>
//                   <p className="text-light"><Link to="/addtocart" className="text-reset">Cart</Link></p>
//                   <p className="text-light"><a href="#!" className="text-reset">Orders</a></p>
//                   <p className="text-light"><a href="/contactus" className="text-reset">Help</a></p>
//                 </div>
//               </div>

//               {/* Column 4 */}
//               <div className="col-lg-3 col-md-6 col-6 mb-4">
//                 <div className="text-center mx-auto mb-4">
//                   <h6 className="text-uppercase text-light fw-bold mb-4">Quick Links</h6>
//                   <p className="text-light"><a href="#!" className="text-reset">Terms & Conditions</a></p>
//                   <p className="text-light"><a href="#!" className="text-reset">Refunds Policy</a></p>
//                   <p className="text-light"><Link to="/contactus" className="text-reset">Contact Us</Link></p>
//                   <p className="text-light"><a href="#!" className="text-reset">FAQ</a></p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* <!-- Copyright --> */}
//         <div className="text-center text-light p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
//           © 2024 Copyright:
//           <a className="text-reset fw-bold" href="https://mdbootstrap.com/">
//             {" "}
//             Swcy
//           </a>
//         </div>
//         {/* <!-- Copyright --> */}
//       </footer>

//       {/* <!-- Footer --> */}
//     </>
//   );
// }

// export default Footer;



import React from "react";
import "./Footer.css"
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaFacebook,
  FaTwitter,
  FaGoogle,
  FaInstagramSquare,
} from "react-icons/fa";
import { MdLocationCity } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import logoimg from "../../assets/Images/swcy.png";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="text-light footer_bg pt-5 pb-3">
      <div className="container text-center text-md-start">
        <div className="row">
          {/* Logo and Description */}
          <div className="col-md-4 mb-3">
            <div className="mb-3">
              <a className="navbar-brand fw-bold fs-3 text-black" href="/">
                <img
                  src={logoimg}
                  style={{
                    height: "60px",
                    filter: "brightness(0) invert(1)",
                  }}
                  alt="logo"
                />
              </a>
            </div>
            <p className="text-light small">
              Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <p className="text-light mb-0"><MdLocationCity className="text-light" /> H-150 Sector 63, Noida UP</p>
            <p className="text-light mb-0 "><IoIosMail className="text-light" /> info@swcy.com</p>
            <p className="text-light"><FaPhone className="text-light" /> + 01 234 567 88</p>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 mb-4">
            <h5 className="fw-bold">Category</h5>
            <ul className="list-unstyled">
              <li className="footer-link"><a href="#" className="text-light text-decoration-none">T-shirts</a></li>
              <li className="footer-link"><a href="#" className="text-light text-decoration-none">Jeans</a></li>
              <li className="footer-link"><a href="#" className="text-light text-decoration-none">Shirts</a></li>
              <li className="footer-link"><a href="#" className="text-light text-decoration-none">Hooddy</a></li>
            </ul>
          </div>

    

          {/* Quick Links */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Useful Links</h5>
            <ul className="list-unstyled">
              <li className="footer-link"><Link to="/about" className="text-light text-decoration-none">About Us</Link></li>
              <li className="footer-link"><Link to="/addtocart" className="text-light text-decoration-none">Cart</Link></li>
              <li className="footer-link"><a href="#" className="text-light text-decoration-none">Orders</a></li>
              <li className="footer-link"><a href="#" className="text-light text-decoration-none">Help</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 mb-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="footer-link"><a href="#" className="text-light text-decoration-none">Terms & Conditions</a></li>
              <li className="footer-link"><a href="#" className="text-light text-decoration-none">Refunds Policy</a></li>
              <li className="footer-link"><Link to="/contactus" className="text-light text-decoration-none">Contact Us</Link></li>
              <li className="footer-link"><a href="#" className="text-light text-decoration-none">FAQ</a></li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="d-flex align-items-center justify-content-between">
            <h5 className="fw-bold mb-0">Follow Us</h5>
            <div className="footer-icon ">
              <a className="btn btn-outline m-1" href="#!" role="button">
                <FaFacebook className="text-dark" />
              </a>
              <a className="btn btn-outline m-1" href="#!" role="button">
                <FaTwitter className="text-dark" />
              </a>
              <a className="btn btn-outline m-1" href="#!" role="button">
                <FaGoogle className="text-dark" />
              </a>
              <a className="btn btn-outline m-1" href="#!" role="button">
                <FaInstagramSquare className="text-dark" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center pt-3 border-top">
        <p className="small m-0">&copy; 2025 Your Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
