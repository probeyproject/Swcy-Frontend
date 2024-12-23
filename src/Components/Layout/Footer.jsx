import React from 'react'
import '../../App.css'
import { FaFacebook, FaTwitter, FaGoogle, FaInstagramSquare } from "react-icons/fa";

function Footer() {
    return (
        <>
            {/* <!-- Footer --> */}
            <footer className="text-center text-lg-start bg-body-tertiary text-muted mt-4">
                {/* <!-- Section: Social media --> */}
                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    {/* <!-- Left --> */}
                    <div className="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    {/* <!-- Left --> */}

                    {/* <!-- Right --> */}
                    <div className='footer-icon'>
                        <a data-mdb-ripple-init className="btn btn-outline btn-floating m-1" href="#!" role="button">
                            <FaFacebook />
                        </a>
                        <a data-mdb-ripple-init className="btn btn-outline btn-floating m-1" href="#!" role="button">
                            <FaTwitter />
                        </a>
                        <a data-mdb-ripple-init className="btn btn-outline btn-floating m-1" href="#!" role="button">
                            <FaGoogle />
                        </a>
                        <a data-mdb-ripple-init className="btn btn-outline btn-floating m-1" href="#!" role="button">
                            <FaInstagramSquare />
                        </a>
                    </div>
                    {/* <!-- Right --> */}
                </section>
                {/* <!-- Section: Social media --> */}

                {/* <!-- Section: Links  --> */}
                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        {/* <!-- Grid row --> */}
                        <div className="row mt-3">
                            {/* <!-- Grid column --> */}
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                {/* <!-- Content --> */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3"></i> <a className="navbar-brand fw-bold fs-3 text-primary" href="#">
                                        Swcy
                                    </a>
                                </h6>
                                <p>
                                    Here you can use rows and columns to organize your footer content. Lorem ipsum
                                    dolor sit amet, consectetur adipisicing elit.
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Products
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">T-shirts</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Jeans</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Shirts</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Hooddy</a>
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <a href="#!" className="text-reset">About Us</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Cart</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Orders</a>
                                </p>
                                <p>
                                    <a href="#!" className="text-reset">Help</a>
                                </p>
                            </div>
                            {/* <!-- Grid column --> */}

                            {/* <!-- Grid column --> */}
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                {/* <!-- Links --> */}
                                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                <p><i className="fas fa-home me-3"></i>H-150 Sector 63, Noida UP</p>
                                <p>
                                    <i className="fas fa-envelope me-3"></i>
                                    info@swcy.com
                                </p>
                                <p><i className="fas fa-phone me-3"></i> + 01 234 567 88</p>
                                <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
                            </div>
                            {/* <!-- Grid column --> */}
                        </div>
                        {/* <!-- Grid row --> */}
                    </div>
                </section>
                {/* <!-- Section: Links  --> */}

                {/* <!-- Copyright --> */}
                <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
                    © 2024 Copyright:
                    <a className="text-reset fw-bold" href="https://mdbootstrap.com/"> Swcy</a>
                </div>
                {/* <!-- Copyright --> */}
            </footer>
            {/* <!-- Footer --> */}
        </>
    )
}

export default Footer